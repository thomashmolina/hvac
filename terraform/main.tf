terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "hvac-terraform-state"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}

variable "aws_profile" {
  description = "AWS CLI profile to use (leave empty in CI)"
  type        = string
  default     = null
}

provider "aws" {
  region  = "us-west-2"
  profile = var.aws_profile
}

# ACM certs for CloudFront must be in us-east-1
provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = var.aws_profile
}

locals {
  bucket_name = "hvac-site"
  domain_name = "hvaccowboy.com"
  alt_names   = ["hvaccowboy.com", "www.hvaccowboy.com"]
}

# --- SSL Certificate ---

resource "aws_acm_certificate" "website" {
  provider          = aws.us_east_1
  domain_name       = local.domain_name
  subject_alternative_names = ["www.${local.domain_name}"]
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_s3_bucket" "website" {
  bucket = local.bucket_name
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id

  depends_on = [aws_s3_bucket_public_access_block.website]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.website.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.website.arn
          }
        }
      }
    ]
  })
}

resource "aws_cloudfront_origin_access_control" "website" {
  name                              = "hvac-site-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "website" {
  origin {
    domain_name              = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id                = "s3-hvac-site"
    origin_access_control_id = aws_cloudfront_origin_access_control.website.id
  }

  enabled             = true
  default_root_object = "index.html"
  aliases             = local.alt_names

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "s3-hvac-site"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  # Serve index.html for SPA client-side routing
  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.website.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

output "cloudfront_url" {
  value = "https://${aws_cloudfront_distribution.website.domain_name}"
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.website.id
}

output "bucket_name" {
  value = local.bucket_name
}

output "acm_validation_records" {
  description = "DNS records to add at your registrar for certificate validation"
  value = {
    for dvo in aws_acm_certificate.website.domain_validation_options : dvo.domain_name => {
      type  = dvo.resource_record_type
      name  = dvo.resource_record_name
      value = dvo.resource_record_value
    }
  }
}

output "domain_dns_target" {
  description = "Point your domain's A/CNAME record to this CloudFront domain"
  value       = aws_cloudfront_distribution.website.domain_name
}

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

locals {
  bucket_name = "hvac-site"
}

resource "aws_s3_bucket" "website" {
  bucket = local.bucket_name
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "website" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id

  depends_on = [aws_s3_bucket_public_access_block.website]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.website.arn}/*"
      }
    ]
  })
}

output "website_url" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "bucket_name" {
  value = local.bucket_name
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080'

let refreshPromise = null

async function rawRequest(path, options = {}) {
  const token = localStorage.getItem('token')
  const headers = { 'Content-Type': 'application/json', ...options.headers }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers })
  const data = await res.json().catch(() => null)

  if (!res.ok) {
    const err = new Error(data?.error || `Request failed (${res.status})`)
    err.status = res.status
    throw err
  }
  return data
}

async function tryRefresh() {
  const refreshToken = localStorage.getItem('refresh_token')
  if (!refreshToken) return false

  // Deduplicate concurrent refresh attempts
  if (!refreshPromise) {
    refreshPromise = rawRequest('/api/v1/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refresh_token: refreshToken }),
    }).finally(() => { refreshPromise = null })
  }

  try {
    const data = await refreshPromise
    localStorage.setItem('token', data.token)
    return true
  } catch {
    return false
  }
}

async function request(path, options = {}) {
  try {
    return await rawRequest(path, options)
  } catch (err) {
    if (err.status !== 401) throw err

    const refreshed = await tryRefresh()
    if (refreshed) {
      return await rawRequest(path, options)
    }

    // Refresh failed — clear tokens and redirect
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    if (window.location.pathname.startsWith('/admin')) {
      window.location.href = '/admin/login?expired=1'
    }
    throw err
  }
}

export const auth = {
  login: (email, password) =>
    rawRequest('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  register: (name, email, password) =>
    rawRequest('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }),
  logout: () =>
    rawRequest('/api/v1/auth/logout', { method: 'POST' }),
  me: () =>
    request('/api/v1/auth/me'),
  refresh: (refresh_token) =>
    rawRequest('/api/v1/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refresh_token }),
    }),
  changePassword: (current_password, new_password) =>
    request('/api/v1/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ current_password, new_password }),
    }),
}

export const inquiries = {
  create: (data) =>
    rawRequest('/api/v1/inquiries', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080'

async function request(path, options = {}) {
  const token = localStorage.getItem('token')
  const headers = { 'Content-Type': 'application/json', ...options.headers }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers })
  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`)
  }
  return data
}

export const auth = {
  login: (email, password) =>
    request('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  register: (name, email, password) =>
    request('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }),
  logout: () =>
    request('/api/v1/auth/logout', { method: 'POST' }),
  me: () =>
    request('/api/v1/auth/me'),
  refresh: (refresh_token) =>
    request('/api/v1/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refresh_token }),
    }),
  changePassword: (current_password, new_password) =>
    request('/api/v1/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ current_password, new_password }),
    }),
}

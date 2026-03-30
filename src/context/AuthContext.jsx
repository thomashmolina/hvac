import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setLoading(false)
      return
    }
    auth.me()
      .then(setUser)
      .catch(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
      })
      .finally(() => setLoading(false))
  }, [])

  async function login(email, password) {
    const data = await auth.login(email, password)
    localStorage.setItem('token', data.token)
    localStorage.setItem('refresh_token', data.refresh_token)
    setUser(data.user)
    return data.user
  }

  async function register(name, email, password) {
    const data = await auth.register(name, email, password)
    localStorage.setItem('token', data.token)
    localStorage.setItem('refresh_token', data.refresh_token)
    setUser(data.user)
    return data.user
  }

  async function logout() {
    try { await auth.logout() } catch {}
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

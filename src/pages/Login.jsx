import { useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [searchParams] = useSearchParams()
  const expired = searchParams.get('expired') === '1'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(expired ? 'Your session has expired. Please sign in again.' : '')
  const [submitting, setSubmitting] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(email, password)
      navigate('/admin')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center flex-grow p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-sm text-left">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-900 dark:text-blue-100">Sign in</h1>
        {error && <p className="bg-red-100 text-red-700 px-3 py-2.5 rounded-lg text-sm mb-4">{error}</p>}
        <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-2 focus:outline-blue-600" />
        </label>
        <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-2 focus:outline-blue-600" />
        </label>
        <button type="submit" disabled={submitting} className="w-full py-2.5 mt-2 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
          {submitting ? 'Signing in...' : 'Sign in'}
        </button>
        <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
          Don't have an account? <Link to="/admin/register" className="text-blue-600 dark:text-blue-400 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  )
}

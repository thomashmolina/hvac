import { useAuth } from '../context/AuthContext'

export default function Admin() {
  const { user, logout } = useAuth()

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-blue-100 dark:border-blue-800">
        <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Admin</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span>{user.name} ({user.role})</span>
          <button onClick={logout} className="px-4 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            Sign out
          </button>
        </div>
      </header>
      <main className="text-gray-600 dark:text-gray-400">
        <p>Welcome to the admin dashboard.</p>
      </main>
    </div>
  )
}

import { useAuth } from '../context/AuthContext'
import './Admin.css'

export default function Admin() {
  const { user, logout } = useAuth()

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin</h1>
        <div className="admin-user">
          <span>{user.name} ({user.role})</span>
          <button onClick={logout} className="logout-btn">Sign out</button>
        </div>
      </header>
      <main className="admin-content">
        <p>Welcome to the admin dashboard.</p>
      </main>
    </div>
  )
}

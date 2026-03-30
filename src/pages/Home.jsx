import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const { user, logout } = useAuth()

  return (
    <div className="home-page">
      {user ? (
        <>
          <h1>Welcome, {user.name}</h1>
          <p className="user-info">{user.email} &middot; {user.role}</p>
          <button onClick={logout} className="logout-btn">Sign out</button>
        </>
      ) : (
        <>
          <h1>HVAC</h1>
          <p>Welcome to the HVAC app.</p>
          <div className="home-actions">
            <Link to="/login" className="btn">Sign in</Link>
            <Link to="/register" className="btn btn-secondary">Register</Link>
          </div>
        </>
      )}
    </div>
  )
}

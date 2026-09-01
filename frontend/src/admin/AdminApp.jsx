import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import Login from './Login'
import Dashboard from './Dashboard'
import ActiveDesk from './ActiveDesk'
import Mandates from './Mandates'
import Commodities from './Commodities'
import Insights from './Insights'
import MarketData from './MarketData'
import Freight from './Freight'
import Contacts from './Contacts'
import Users from './Users'
import AuditLogs from './AuditLogs'
import Settings from './Settings'

export default function AdminApp() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('argos_admin_token')
    const stored = localStorage.getItem('argos_admin_user')
    if (token && stored) {
      try { setUser(JSON.parse(stored)) } catch { /* ignore */ }
    }
    setLoading(false)
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('argos_admin_user', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('argos_admin_user')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-gray-600 text-sm">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <HashRouter>
      <AdminLayout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/active-desk" element={<ActiveDesk />} />
          <Route path="/mandates" element={<Mandates />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/market-data" element={<MarketData />} />
          <Route path="/freight" element={<Freight />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/audit" element={<AuditLogs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AdminLayout>
    </HashRouter>
  )
}

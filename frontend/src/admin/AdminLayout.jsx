import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard, Armchair, FileText, Layers, Newspaper,
  TrendingUp, Ship, MessageSquare, Users, ScrollText,
  Settings, LogOut, X, Menu
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/active-desk', icon: Armchair, label: 'Active Desk' },
  { to: '/mandates', icon: FileText, label: 'Mandates' },
  { to: '/commodities', icon: Layers, label: 'Commodities' },
  { to: '/insights', icon: Newspaper, label: 'Insights' },
  { to: '/market-data', icon: TrendingUp, label: 'Market Data' },
  { to: '/freight', icon: Ship, label: 'Freight' },
  { to: '/contacts', icon: MessageSquare, label: 'Contacts' },
  { to: '/users', icon: Users, label: 'Users' },
  { to: '/audit', icon: ScrollText, label: 'Audit Logs' },
  { to: '/settings', icon: Settings, label: 'Settings' },
]

export default function AdminLayout({ children, user, onLogout }) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('argos_admin_token')
    onLogout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#111] border border-[#333] text-white p-2"
      >
        <Menu size={20} />
      </button>

      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-60 bg-[#111111] border-r border-[#222] flex flex-col z-50 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#222]">
          <div>
            <h1 className="text-white text-sm font-semibold tracking-wide">ARGOS</h1>
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] mt-0.5">Admin Panel</p>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-500 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 text-sm mb-0.5 transition-colors ${
                  isActive
                    ? 'bg-[#1a1a1a] text-white border-l-2 border-white'
                    : 'text-gray-500 hover:text-gray-300 border-l-2 border-transparent'
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-[#222] px-5 py-4">
          <p className="text-gray-500 text-xs truncate">{user?.email}</p>
          <p className="text-gray-600 text-[10px] uppercase tracking-wider mt-0.5">{user?.role || 'admin'}</p>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-500 hover:text-red-400 text-xs mt-3 transition-colors"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 min-h-screen lg:ml-0">
        <div className="p-6 lg:p-8 max-w-[1400px]">
          {children}
        </div>
      </main>
    </div>
  )
}

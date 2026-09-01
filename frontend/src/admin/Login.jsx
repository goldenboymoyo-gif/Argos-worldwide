import { useState } from 'react'
import { Lock, Mail } from 'lucide-react'
import { apiFetch } from '../lib/api'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const data = await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      })
      localStorage.setItem('argos_admin_token', data.token)
      onLogin(data.user)
    } catch (err) {
      setError(err.message || 'Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-white text-2xl font-semibold tracking-tight">Argos Worldwide</h1>
          <p className="text-gray-500 text-sm mt-1">Administrator Access</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111111] border border-[#222] p-8">
          {error && (
            <div className="bg-red-900/20 border border-red-800 text-red-400 text-sm px-4 py-3 mb-6">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#333] text-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#333] text-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-[#0a0a0a] font-medium py-2.5 text-sm hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}

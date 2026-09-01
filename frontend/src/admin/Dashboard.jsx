import { useState, useEffect } from 'react'
import { FileText, Clock, Users, Armchair, Newspaper, TrendingUp } from 'lucide-react'
import { apiFetch } from '../lib/api'

const defaultStats = [
  { label: 'Total Mandates', value: 0, icon: FileText },
  { label: 'Pending Mandates', value: 0, icon: Clock },
  { label: 'New Contacts', value: 0, icon: Users },
  { label: 'Public Desk Items', value: 0, icon: Armchair },
  { label: 'Draft Insights', value: 0, icon: Newspaper },
  { label: 'Total Users', value: 0, icon: TrendingUp },
]

export default function Dashboard() {
  const [stats, setStats] = useState(defaultStats)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiFetch('/admin/stats')
      .then((data) => {
        if (data) {
          setStats((prev) =>
            prev.map((s) => {
              const key = s.label.toLowerCase().replace(/\s+/g, '_')
              const val = data[key] ?? data[s.label] ?? s.value
              return { ...s, value: val }
            })
          )
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-white text-xl font-semibold mb-1">Dashboard</h1>
      <p className="text-gray-500 text-sm mb-8">Overview of platform activity</p>

      {loading ? (
        <div className="text-gray-600 text-sm">Loading stats...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-[#111111] border border-[#222] p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-xs uppercase tracking-wider">{label}</span>
                <Icon size={16} className="text-gray-600" />
              </div>
              <p className="text-white text-3xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

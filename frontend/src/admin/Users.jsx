import { useState, useEffect } from 'react'
import { Pencil, X, Check } from 'lucide-react'
import { apiFetch } from '../lib/api'

const ROLES = ['admin', 'editor', 'viewer']
const STATUSES = ['active', 'inactive']

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({})
  const [saving, setSaving] = useState(false)

  const load = () => {
    apiFetch('/users')
      .then((d) => setUsers(d.users || d || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const startEdit = (u) => {
    setEditing(u.id)
    setForm({ role: u.role || 'viewer', status: u.status || 'active' })
  }

  const handleSave = async (id) => {
    setSaving(true)
    try {
      await apiFetch(`/users/${id}`, { method: 'PUT', body: JSON.stringify(form) })
      setEditing(null)
      load()
    } catch (err) {
      alert(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h1 className="text-white text-xl font-semibold mb-1">Users</h1>
      <p className="text-gray-500 text-sm mb-8">Manage admin user accounts</p>

      {loading ? (
        <div className="text-gray-600 text-sm">Loading...</div>
      ) : users.length === 0 ? (
        <div className="text-gray-600 text-sm">No users found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#222]">
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Name</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Email</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Role</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Status</th>
                <th className="text-right text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-[#1a1a1a] hover:bg-[#111]">
                  <td className="py-3 px-3 text-white">{u.name}</td>
                  <td className="py-3 px-3 text-gray-300">{u.email}</td>
                  {editing === u.id ? (
                    <>
                      <td className="py-3 px-3">
                        <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500">
                          {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                      </td>
                      <td className="py-3 px-3">
                        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500">
                          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleSave(u.id)} disabled={saving} className="text-green-400 hover:text-green-300"><Check size={14} /></button>
                          <button onClick={() => setEditing(null)} className="text-gray-500 hover:text-white"><X size={14} /></button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3 px-3">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-[#1a1a1a] px-2 py-1">{u.role}</span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-[10px] uppercase tracking-wider px-2 py-1 ${u.status === 'active' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                          {u.status || 'active'}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button onClick={() => startEdit(u)} className="text-gray-500 hover:text-white"><Pencil size={14} /></button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

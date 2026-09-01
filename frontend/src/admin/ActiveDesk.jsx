import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, X, Eye, EyeOff } from 'lucide-react'
import { apiFetch } from '../lib/api'

const STATUSES = ['RESEARCH', 'SOURCING', 'MATCHING', 'INTRODUCTION', 'EXECUTION', 'COMPLETED', 'ARCHIVED']

const emptyForm = {
  commodity: '', origin: '', destination: '', volume: '', unit: 'MT',
  specification: '', status: 'RESEARCH', visibility: 'public', displayOrder: 0,
}

export default function ActiveDesk() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(null)
  const [saving, setSaving] = useState(false)

  const load = () => {
    apiFetch('/active-desk')
      .then((d) => setItems(d.items || d || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      const payload = { ...form, volume: Number(form.volume) || 0, displayOrder: Number(form.displayOrder) || 0 }
      if (form.id) {
        await apiFetch(`/active-desk/${form.id}`, { method: 'PUT', body: JSON.stringify(payload) })
      } else {
        await apiFetch('/active-desk', { method: 'POST', body: JSON.stringify(payload) })
      }
      setForm(null)
      load()
    } catch (err) {
      alert(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this item?')) return
    try {
      await apiFetch(`/active-desk/${id}`, { method: 'DELETE' })
      load()
    } catch (err) {
      alert(err.message)
    }
  }

  const toggleVisibility = async (item) => {
    const newVis = item.visibility === 'public' ? 'hidden' : 'public'
    try {
      await apiFetch(`/active-desk/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ visibility: newVis }),
      })
      load()
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-white text-xl font-semibold">Active Desk</h1>
          <p className="text-gray-500 text-sm mt-1">Manage desk listings</p>
        </div>
        <button onClick={() => setForm({ ...emptyForm })} className="bg-white text-[#0a0a0a] px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
          <Plus size={14} /> New Item
        </button>
      </div>

      {form && (
        <div className="bg-[#111111] border border-[#222] p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-sm font-medium">{form.id ? 'Edit Item' : 'New Item'}</h2>
            <button onClick={() => setForm(null)} className="text-gray-500 hover:text-white"><X size={16} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { key: 'commodity', label: 'Commodity' },
              { key: 'origin', label: 'Origin' },
              { key: 'destination', label: 'Destination' },
              { key: 'volume', label: 'Volume', type: 'number' },
              { key: 'unit', label: 'Unit' },
              { key: 'specification', label: 'Specification' },
              { key: 'displayOrder', label: 'Display Order', type: 'number' },
            ].map(({ key, label, type }) => (
              <div key={key}>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</label>
                <input
                  type={type || 'text'}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              >
                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Visibility</label>
              <select
                value={form.visibility}
                onChange={(e) => setForm({ ...form, visibility: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              >
                <option value="public">Public</option>
                <option value="hidden">Hidden</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <button onClick={handleSave} disabled={saving} className="bg-white text-[#0a0a0a] px-5 py-2 text-sm font-medium hover:bg-gray-200 disabled:opacity-50">
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button onClick={() => setForm(null)} className="text-gray-500 hover:text-white px-4 py-2 text-sm">Cancel</button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-gray-600 text-sm">Loading...</div>
      ) : items.length === 0 ? (
        <div className="text-gray-600 text-sm">No items yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#222]">
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Order</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Commodity</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Origin</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Destination</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Volume</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Status</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Vis</th>
                <th className="text-right text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-[#1a1a1a] hover:bg-[#111]">
                  <td className="py-3 px-3 text-gray-400">{item.displayOrder}</td>
                  <td className="py-3 px-3 text-white">{item.commodity}</td>
                  <td className="py-3 px-3 text-gray-300">{item.origin}</td>
                  <td className="py-3 px-3 text-gray-300">{item.destination}</td>
                  <td className="py-3 px-3 text-gray-300">{item.volume} {item.unit}</td>
                  <td className="py-3 px-3">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-[#1a1a1a] px-2 py-1">{item.status}</span>
                  </td>
                  <td className="py-3 px-3">
                    <button onClick={() => toggleVisibility(item)} className="text-gray-500 hover:text-white">
                      {item.visibility === 'public' ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => setForm({ ...emptyForm, ...item })} className="text-gray-500 hover:text-white"><Pencil size={14} /></button>
                      <button onClick={() => handleDelete(item.id)} className="text-gray-500 hover:text-red-400"><Trash2 size={14} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

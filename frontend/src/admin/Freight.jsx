import { useState, useEffect } from 'react'
import { Pencil, X, Check } from 'lucide-react'
import { apiFetch } from '../lib/api'

export default function Freight() {
  const [routes, setRoutes] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({})
  const [saving, setSaving] = useState(false)

  const load = () => {
    apiFetch('/freight')
      .then((d) => setRoutes(d.routes || d || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const startEdit = (route) => {
    setEditing(route.id)
    setForm({
      route: route.route || '',
      commodity: route.commodity || '',
      rate: route.rate ?? '',
      direction: route.direction || '',
      source: route.source || '',
      isIndicative: route.isIndicative ?? true,
    })
  }

  const handleSave = async (id) => {
    setSaving(true)
    try {
      await apiFetch(`/freight/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...form, rate: Number(form.rate) || 0 }),
      })
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
      <h1 className="text-white text-xl font-semibold mb-1">Freight</h1>
      <p className="text-gray-500 text-sm mb-8">Manage freight routes and rates</p>

      {loading ? (
        <div className="text-gray-600 text-sm">Loading...</div>
      ) : routes.length === 0 ? (
        <div className="text-gray-600 text-sm">No freight routes found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#222]">
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Route</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Commodity</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Rate</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Direction</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Source</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Indicative</th>
                <th className="text-right text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r) => (
                <tr key={r.id} className="border-b border-[#1a1a1a] hover:bg-[#111]">
                  {editing === r.id ? (
                    <>
                      <td className="py-3 px-3">
                        <input type="text" value={form.route} onChange={(e) => setForm({ ...form, route: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500" />
                      </td>
                      <td className="py-3 px-3">
                        <input type="text" value={form.commodity} onChange={(e) => setForm({ ...form, commodity: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500" />
                      </td>
                      <td className="py-3 px-3">
                        <input type="number" step="any" value={form.rate} onChange={(e) => setForm({ ...form, rate: e.target.value })} className="w-24 bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500" />
                      </td>
                      <td className="py-3 px-3">
                        <input type="text" value={form.direction} onChange={(e) => setForm({ ...form, direction: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500" />
                      </td>
                      <td className="py-3 px-3">
                        <input type="text" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500" />
                      </td>
                      <td className="py-3 px-3">
                        <button onClick={() => setForm({ ...form, isIndicative: !form.isIndicative })} className={`text-xs px-2 py-1 ${form.isIndicative ? 'bg-yellow-900/30 text-yellow-400' : 'bg-[#1a1a1a] text-gray-500'}`}>
                          {form.isIndicative ? 'Yes' : 'No'}
                        </button>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleSave(r.id)} disabled={saving} className="text-green-400 hover:text-green-300"><Check size={14} /></button>
                          <button onClick={() => setEditing(null)} className="text-gray-500 hover:text-white"><X size={14} /></button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3 px-3 text-white">{r.route}</td>
                      <td className="py-3 px-3 text-gray-300">{r.commodity}</td>
                      <td className="py-3 px-3 text-white font-mono">{r.rate}</td>
                      <td className="py-3 px-3 text-gray-400">{r.direction}</td>
                      <td className="py-3 px-3 text-gray-400 text-xs">{r.source}</td>
                      <td className="py-3 px-3">
                        <span className={`text-[10px] uppercase tracking-wider px-2 py-1 ${r.isIndicative ? 'bg-yellow-900/30 text-yellow-400' : 'bg-[#1a1a1a] text-gray-500'}`}>
                          {r.isIndicative ? 'Indicative' : 'Confirmed'}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button onClick={() => startEdit(r)} className="text-gray-500 hover:text-white"><Pencil size={14} /></button>
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

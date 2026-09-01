import { useState, useEffect } from 'react'
import { Pencil, X, Check } from 'lucide-react'
import { apiFetch } from '../lib/api'

export default function MarketData() {
  const [instruments, setInstruments] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({})
  const [saving, setSaving] = useState(false)

  const load = () => {
    apiFetch('/market-data')
      .then((d) => setInstruments(d.instruments || d || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const startEdit = (inst) => {
    setEditing(inst.id)
    setForm({ price: inst.price ?? '', change: inst.change ?? '', isLive: inst.isLive ?? true })
  }

  const handleSave = async (id) => {
    setSaving(true)
    try {
      await apiFetch(`/market-data/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...form, price: Number(form.price) || 0, change: Number(form.change) || 0 }),
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
      <h1 className="text-white text-xl font-semibold mb-1">Market Data</h1>
      <p className="text-gray-500 text-sm mb-8">Manage market data instruments</p>

      {loading ? (
        <div className="text-gray-600 text-sm">Loading...</div>
      ) : instruments.length === 0 ? (
        <div className="text-gray-600 text-sm">No instruments found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#222]">
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Name</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Symbol</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Price</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Change</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Live</th>
                <th className="text-right text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {instruments.map((inst) => (
                <tr key={inst.id} className="border-b border-[#1a1a1a] hover:bg-[#111]">
                  <td className="py-3 px-3 text-white">{inst.name}</td>
                  <td className="py-3 px-3 text-gray-400 font-mono text-xs">{inst.symbol}</td>
                  {editing === inst.id ? (
                    <>
                      <td className="py-3 px-3">
                        <input type="number" step="any" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-28 bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500" />
                      </td>
                      <td className="py-3 px-3">
                        <input type="number" step="any" value={form.change} onChange={(e) => setForm({ ...form, change: e.target.value })} className="w-28 bg-[#0a0a0a] border border-[#333] text-white px-2 py-1 text-sm focus:outline-none focus:border-gray-500" />
                      </td>
                      <td className="py-3 px-3">
                        <button onClick={() => setForm({ ...form, isLive: !form.isLive })} className={`text-xs px-2 py-1 ${form.isLive ? 'bg-green-900/30 text-green-400' : 'bg-[#1a1a1a] text-gray-500'}`}>
                          {form.isLive ? 'Live' : 'Static'}
                        </button>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleSave(inst.id)} disabled={saving} className="text-green-400 hover:text-green-300"><Check size={14} /></button>
                          <button onClick={() => setEditing(null)} className="text-gray-500 hover:text-white"><X size={14} /></button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3 px-3 text-white font-mono">{inst.price}</td>
                      <td className="py-3 px-3">
                        <span className={`font-mono text-xs ${inst.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {inst.change >= 0 ? '+' : ''}{inst.change}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-[10px] uppercase tracking-wider px-2 py-1 ${inst.isLive ? 'bg-green-900/30 text-green-400' : 'bg-[#1a1a1a] text-gray-500'}`}>
                          {inst.isLive ? 'Live' : 'Static'}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button onClick={() => startEdit(inst)} className="text-gray-500 hover:text-white"><Pencil size={14} /></button>
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

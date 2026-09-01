import { useState, useEffect } from 'react'
import { Save } from 'lucide-react'
import { apiFetch } from '../lib/api'

export default function Settings() {
  const [settings, setSettings] = useState([])
  const [loading, setLoading] = useState(true)
  const [edits, setEdits] = useState({})
  const [saving, setSaving] = useState(false)

  const load = () => {
    apiFetch('/settings')
      .then((d) => {
        const items = d.settings || d || []
        setSettings(items)
        const map = {}
        items.forEach((s) => { map[s.key] = s.value })
        setEdits(map)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleSave = async (key) => {
    setSaving(true)
    try {
      await apiFetch(`/settings/${key}`, {
        method: 'PUT',
        body: JSON.stringify({ value: edits[key] }),
      })
    } catch (err) {
      alert(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h1 className="text-white text-xl font-semibold mb-1">Settings</h1>
      <p className="text-gray-500 text-sm mb-8">System configuration</p>

      {loading ? (
        <div className="text-gray-600 text-sm">Loading...</div>
      ) : settings.length === 0 ? (
        <div className="text-gray-600 text-sm">No settings found.</div>
      ) : (
        <div className="space-y-3">
          {settings.map((s) => (
            <div key={s.key} className="bg-[#111111] border border-[#222] p-4 flex items-center gap-4">
              <div className="w-48 shrink-0">
                <p className="text-gray-400 text-xs uppercase tracking-wider">{s.key}</p>
                {s.description && <p className="text-gray-600 text-[10px] mt-0.5">{s.description}</p>}
              </div>
              <input
                type="text"
                value={edits[s.key] ?? s.value ?? ''}
                onChange={(e) => setEdits({ ...edits, [s.key]: e.target.value })}
                className="flex-1 bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
              <button
                onClick={() => handleSave(s.key)}
                disabled={saving || edits[s.key] === s.value}
                className="text-gray-500 hover:text-white disabled:opacity-30 shrink-0"
              >
                <Save size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

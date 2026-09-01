import { useState, useEffect } from 'react'
import { Plus, Trash2, X } from 'lucide-react'
import { apiFetch } from '../lib/api'

export default function Commodities() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(null)
  const [newCatName, setNewCatName] = useState('')
  const [newCatSlug, setNewCatSlug] = useState('')
  const [newCommodity, setNewCommodity] = useState('')
  const [saving, setSaving] = useState(false)

  const load = () => {
    apiFetch('/commodities')
      .then((d) => setCategories(d.categories || d || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const addCategory = async () => {
    if (!newCatName.trim()) return
    setSaving(true)
    try {
      await apiFetch('/commodities', {
        method: 'POST',
        body: JSON.stringify({ name: newCatName, slug: newCatSlug || newCatName.toLowerCase().replace(/\s+/g, '-') }),
      })
      setNewCatName('')
      setNewCatSlug('')
      load()
    } catch (err) {
      alert(err.message)
    } finally {
      setSaving(false)
    }
  }

  const addCommodity = async (catId) => {
    if (!newCommodity.trim()) return
    setSaving(true)
    try {
      await apiFetch('/commodities', {
        method: 'POST',
        body: JSON.stringify({ name: newCommodity, categoryId: catId }),
      })
      setNewCommodity('')
      load()
    } catch (err) {
      alert(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h1 className="text-white text-xl font-semibold mb-1">Commodities</h1>
      <p className="text-gray-500 text-sm mb-8">Manage commodity categories and items</p>

      <div className="bg-[#111111] border border-[#222] p-5 mb-6">
        <h2 className="text-white text-sm font-medium mb-3">Add Category</h2>
        <div className="flex gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Category name"
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
            className="bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
          />
          <input
            type="text"
            placeholder="Slug (optional)"
            value={newCatSlug}
            onChange={(e) => setNewCatSlug(e.target.value)}
            className="bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
          />
          <button onClick={addCategory} disabled={saving} className="bg-white text-[#0a0a0a] px-4 py-2 text-sm font-medium hover:bg-gray-200 disabled:opacity-50 flex items-center gap-1">
            <Plus size={14} /> Add
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-gray-600 text-sm">Loading...</div>
      ) : categories.length === 0 ? (
        <div className="text-gray-600 text-sm">No categories yet.</div>
      ) : (
        <div className="space-y-4">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-[#111111] border border-[#222] p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-white text-sm font-medium">{cat.name}</h3>
                  <p className="text-gray-600 text-xs">{cat.slug || cat.commodities?.length || 0} items</p>
                </div>
              </div>

              {cat.commodities && cat.commodities.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {cat.commodities.map((c) => (
                    <span key={c.id || c.name} className="bg-[#1a1a1a] border border-[#222] text-gray-300 text-xs px-3 py-1.5">
                      {c.name || c}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add commodity..."
                  value={form === cat.id ? newCommodity : ''}
                  onChange={(e) => { setForm(cat.id); setNewCommodity(e.target.value) }}
                  onFocus={() => setForm(cat.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter') addCommodity(cat.id) }}
                  className="flex-1 bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
                />
                {form === cat.id && (
                  <button onClick={() => addCommodity(cat.id)} disabled={saving} className="bg-white text-[#0a0a0a] px-3 py-2 text-sm font-medium hover:bg-gray-200 disabled:opacity-50">
                    <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

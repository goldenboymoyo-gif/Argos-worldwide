import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, X, Send } from 'lucide-react'
import { apiFetch } from '../lib/api'

const CATEGORIES = ['COMMODITIES', 'MARKETS', 'FREIGHT', 'TRADE', 'GEOPOLITICS', 'SUPPLY CHAINS']
const STATUSES = ['draft', 'published']

const emptyForm = {
  title: '', slug: '', category: 'COMMODITIES', summary: '', content: '', author: '', status: 'draft',
}

export default function Insights() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(null)
  const [saving, setSaving] = useState(false)

  const load = () => {
    apiFetch('/insights')
      .then((d) => setArticles(d.articles || d || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      if (form.id) {
        await apiFetch(`/insights/${form.id}`, { method: 'PUT', body: JSON.stringify(form) })
      } else {
        await apiFetch('/insights', { method: 'POST', body: JSON.stringify(form) })
      }
      setForm(null)
      load()
    } catch (err) {
      alert(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handlePublish = async (id) => {
    try {
      await apiFetch(`/insights/${id}/publish`, { method: 'POST' })
      load()
    } catch (err) {
      alert(err.message)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this article?')) return
    try {
      await apiFetch(`/insights/${id}`, { method: 'DELETE' })
      load()
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-white text-xl font-semibold">Insights</h1>
          <p className="text-gray-500 text-sm mt-1">Manage insight articles</p>
        </div>
        <button onClick={() => setForm({ ...emptyForm })} className="bg-white text-[#0a0a0a] px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
          <Plus size={14} /> New Article
        </button>
      </div>

      {form && (
        <div className="bg-[#111111] border border-[#222] p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-sm font-medium">{form.id ? 'Edit Article' : 'New Article'}</h2>
            <button onClick={() => setForm(null)} className="text-gray-500 hover:text-white"><X size={16} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Title</label>
              <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
            </div>
            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Slug</label>
              <input type="text" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
            </div>
            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500">
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Author</label>
              <input type="text" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
            </div>
            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Status</label>
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500">
                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Summary</label>
              <textarea value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} rows={2} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500 resize-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Content</label>
              <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={10} className="w-full bg-[#0a0a0a] border border-[#333] text-white px-3 py-2 text-sm focus:outline-none focus:border-gray-500 resize-none font-mono" />
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
      ) : articles.length === 0 ? (
        <div className="text-gray-600 text-sm">No articles yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#222]">
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Title</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Category</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Author</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Status</th>
                <th className="text-right text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.id} className="border-b border-[#1a1a1a] hover:bg-[#111]">
                  <td className="py-3 px-3 text-white">{a.title}</td>
                  <td className="py-3 px-3 text-gray-400">{a.category}</td>
                  <td className="py-3 px-3 text-gray-300">{a.author}</td>
                  <td className="py-3 px-3">
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-1 ${a.status === 'published' ? 'bg-green-900/30 text-green-400' : 'bg-[#1a1a1a] text-gray-400'}`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center justify-end gap-2">
                      {a.status !== 'published' && (
                        <button onClick={() => handlePublish(a.id)} className="text-gray-500 hover:text-green-400" title="Publish"><Send size={14} /></button>
                      )}
                      <button onClick={() => setForm({ ...emptyForm, ...a })} className="text-gray-500 hover:text-white"><Pencil size={14} /></button>
                      <button onClick={() => handleDelete(a.id)} className="text-gray-500 hover:text-red-400"><Trash2 size={14} /></button>
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

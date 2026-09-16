import { useState, useEffect } from 'react'
import { Eye, X } from 'lucide-react'
import { apiFetch } from '../lib/api'

export default function Contacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    apiFetch('/contacts')
      .then((d) => setContacts(d.contacts || d || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-white text-xl font-semibold mb-1">Contacts</h1>
      <p className="text-gray-500 text-sm mb-8">Contact form submissions</p>

      {selected && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-[#111] border border-[#222] w-full max-w-lg p-6 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white text-sm font-medium">Contact Details</h2>
              <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white"><X size={16} /></button>
            </div>
            <div className="space-y-3">
              {Object.entries(selected).filter(([k]) => !['id', 'createdAt', 'updatedAt'].includes(k)).map(([key, val]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-gray-500 uppercase text-xs tracking-wider">{key}</span>
                  <span className="text-gray-300 text-right ml-4 max-w-[60%] break-words">{String(val)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-gray-600 text-sm">Loading...</div>
      ) : contacts.length === 0 ? (
        <div className="text-gray-600 text-sm">No contact submissions yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#222]">
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Date</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Name</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Email</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Subject</th>
                <th className="text-right text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} className="border-b border-[#1a1a1a] hover:bg-[#111]">
                  <td className="py-3 px-3 text-gray-400">{new Date(c.created_at).toLocaleDateString()}</td>
                  <td className="py-3 px-3 text-white">{c.name}</td>
                  <td className="py-3 px-3 text-gray-300">{c.email}</td>
                  <td className="py-3 px-3 text-gray-300">{c.subject || '-'}</td>
                  <td className="py-3 px-3 text-right">
                    <button onClick={() => setSelected(c)} className="text-gray-500 hover:text-white">
                      <Eye size={14} />
                    </button>
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

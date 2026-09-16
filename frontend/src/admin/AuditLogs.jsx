import { useState, useEffect } from 'react'
import { apiFetch } from '../lib/api'

export default function AuditLogs() {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiFetch('/audit')
      .then((d) => setLogs(d.logs || d || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-white text-xl font-semibold mb-1">Audit Logs</h1>
      <p className="text-gray-500 text-sm mb-8">System activity audit trail</p>

      {loading ? (
        <div className="text-gray-600 text-sm">Loading...</div>
      ) : logs.length === 0 ? (
        <div className="text-gray-600 text-sm">No audit log entries.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#222]">
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Timestamp</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">User</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Action</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Resource</th>
                <th className="text-left text-gray-500 text-xs uppercase tracking-wider font-medium py-3 px-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className="border-b border-[#1a1a1a] hover:bg-[#111]">
                  <td className="py-3 px-3 text-gray-400 text-xs whitespace-nowrap">
                    {log.created_at ? new Date(log.created_at).toLocaleString() : '-'}
                  </td>
                  <td className="py-3 px-3 text-white text-xs">{log.user || log.userEmail || '-'}</td>
                  <td className="py-3 px-3">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-[#1a1a1a] px-2 py-1">{log.action}</span>
                  </td>
                  <td className="py-3 px-3 text-gray-300 text-xs">{log.resource || log.entityType || '-'}</td>
                  <td className="py-3 px-3 text-gray-500 text-xs max-w-[300px] truncate">{log.details || log.metadata || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

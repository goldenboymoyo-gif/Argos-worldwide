const API_BASE_URL = import.meta.env.VITE_API_URL || ''

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem('argos_admin_token')
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const basePath = API_BASE_URL ? `${API_BASE_URL}/api` : '/api'
  const res = await fetch(`${basePath}${path}`, { ...options, headers })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || 'Request failed')
  return data
}

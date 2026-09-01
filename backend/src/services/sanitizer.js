import crypto from 'crypto'
import { query } from '../config/database.js'

export function sanitizeInput(value) {
  if (typeof value !== 'string') return value
  // Remove control characters and escape HTML
  return value
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
}

export function hashReference(id) {
  return crypto.createHash('sha256').update(String(id)).digest('hex').slice(0, 12)
}

export async function logAudit({ userId = null, action, entity, entityId = null, ip = null, metadata = null }) {
  try {
    await query(
      `INSERT INTO audit_logs (user_id, action, entity, entity_id, ip_address, metadata)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [userId, action, entity, entityId, ip, metadata ? JSON.stringify(metadata) : null]
    )
  } catch (error) {
    console.error('Audit logging failed:', error)
  }
}

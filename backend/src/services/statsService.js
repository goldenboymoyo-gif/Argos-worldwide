import { query } from '../config/database.js'

export async function serviceStats() {
  const result = await query(
    `SELECT
      (SELECT COUNT(*) FROM mandates) as total_mandates,
      (SELECT COUNT(*) FROM mandates WHERE status = 'PENDING') as pending_mandates,
      (SELECT COUNT(*) FROM contacts WHERE status = 'new') as new_contacts,
      (SELECT COUNT(*) FROM active_desk WHERE visibility = 'public') as public_desk_items,
      (SELECT COUNT(*) FROM insights WHERE status = 'draft') as draft_insights,
      (SELECT COUNT(*) FROM users) as total_users`
  )
  return result.rows[0]
}

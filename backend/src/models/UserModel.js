import { query } from '../config/database.js'

export const UserModel = {
  async create({ email, password, name, role = 'viewer' }) {
    const result = await query(
      `INSERT INTO users (email, password_hash, name, role, status)
       VALUES ($1, $2, $3, $4, 'active')
       RETURNING id, email, name, role, status, created_at`,
      [email, password, name, role]
    )
    return result.rows[0]
  },

  async findByEmail(email) {
    const result = await query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    )
    return result.rows[0]
  },

  async findById(id) {
    const result = await query(
      'SELECT id, email, name, role, status, created_at FROM users WHERE id = $1',
      [id]
    )
    return result.rows[0]
  },

  async update(id, fields) {
    const allowed = ['name', 'role', 'status']
    const updates = []
    const values = []
    Object.entries(fields).forEach(([key, value]) => {
      if (allowed.includes(key)) {
        values.push(value)
        updates.push(`${key} = $${values.length}`)
      }
    })
    if (updates.length === 0) return null
    values.push(id)
    const result = await query(
      `UPDATE users SET ${updates.join(', ')} WHERE id = $${values.length}
       RETURNING id, email, name, role, status`,
      values
    )
    return result.rows[0]
  },

  async delete(id) {
    const result = await query('DELETE FROM users WHERE id = $1 RETURNING id', [id])
    return result.rows[0]
  },

  async list() {
    const result = await query(
      'SELECT id, email, name, role, status, created_at FROM users ORDER BY created_at DESC'
    )
    return result.rows
  },
}

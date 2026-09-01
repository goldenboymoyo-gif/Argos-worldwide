import { query } from '../config/database.js'

export const ActiveDeskModel = {
  async create(data) {
    const result = await query(
      `INSERT INTO active_desk
       (commodity, origin, destination, volume, unit, specification, status, visibility, display_order, vehicle_type)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [
        data.commodity,
        data.origin,
        data.destination,
        data.volume,
        data.unit,
        data.specification || null,
        data.status || 'RESEARCH',
        data.visibility || 'public',
        data.displayOrder || 0,
        data.vehicleType || null,
      ]
    )
    return result.rows[0]
  },

  async findAll({ visibility } = {}) {
    let sql = 'SELECT * FROM active_desk'
    const params = []
    if (visibility) {
      params.push(visibility)
      sql += ` WHERE visibility = $1`
    }
    sql += ' ORDER BY display_order ASC, created_at DESC'
    const result = await query(sql, params)
    return result.rows
  },

  async findById(id) {
    const result = await query('SELECT * FROM active_desk WHERE id = $1', [id])
    return result.rows[0]
  },

  async update(id, data) {
    const allowed = [
      'commodity',
      'origin',
      'destination',
      'volume',
      'unit',
      'specification',
      'status',
      'visibility',
      'display_order',
      'vehicle_type',
    ]
    const updates = []
    const values = []
    Object.entries(data).forEach(([key, value]) => {
      if (allowed.includes(key)) {
        values.push(value)
        updates.push(`${key} = $${values.length}`)
      }
    })
    if (updates.length === 0) return null
    values.push(id)
    updates.push('updated_at = NOW()')
    const result = await query(
      `UPDATE active_desk SET ${updates.join(', ')} WHERE id = $${values.length}
       RETURNING *`,
      values
    )
    return result.rows[0]
  },

  async delete(id) {
    const result = await query('DELETE FROM active_desk WHERE id = $1 RETURNING id', [id])
    return result.rows[0]
  },

  async toggleVisibility(id, visibility) {
    const result = await query(
      'UPDATE active_desk SET visibility = $1, updated_at = NOW() WHERE id = $2 RETURNING *',
      [visibility, id]
    )
    return result.rows[0]
  },
}

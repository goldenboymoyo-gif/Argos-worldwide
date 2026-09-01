import { query } from '../config/database.js'

export const MandateModel = {
  async create(data) {
    const result = await query(
      `INSERT INTO mandates
       (party_type, commodity, origin, destination, volume, unit, specification,
        delivery_window, incoterms, target_price, additional_info, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 'PENDING')
       RETURNING *`,
      [
        data.partyType,
        data.commodity,
        data.origin,
        data.destination,
        data.volume,
        data.unit,
        data.specification || null,
        data.deliveryWindow || null,
        data.incoterms || null,
        data.targetPrice || null,
        data.additionalInfo || null,
      ]
    )
    return result.rows[0]
  },

  async linkDocuments(mandateId, documentIds) {
    for (const docId of documentIds) {
      await query(
        'UPDATE uploaded_documents SET mandate_id = $1 WHERE id = $2',
        [mandateId, docId]
      )
    }
  },

  async findById(id) {
    const result = await query('SELECT * FROM mandates WHERE id = $1', [id])
    return result.rows[0]
  },

  async findAll() {
    const result = await query(
      'SELECT * FROM mandates ORDER BY created_at DESC'
    )
    return result.rows
  },

  async update(id, data) {
    const allowed = [
      'party_type',
      'commodity',
      'origin',
      'destination',
      'volume',
      'unit',
      'specification',
      'delivery_window',
      'incoterms',
      'target_price',
      'additional_info',
      'status',
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
      `UPDATE mandates SET ${updates.join(', ')} WHERE id = $${values.length}
       RETURNING *`,
      values
    )
    return result.rows[0]
  },

  async delete(id) {
    const result = await query('DELETE FROM mandates WHERE id = $1 RETURNING id', [id])
    return result.rows[0]
  },
}

import { query } from '../config/database.js'

export const CommodityModel = {
  async create(data) {
    const result = await query(
      `INSERT INTO commodities (name, category_id, slug, description, status, display_order)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [data.name, data.categoryId, data.slug, data.description || null, data.status || 'active', data.displayOrder || 0]
    )
    return result.rows[0]
  },

  async findAll() {
    const result = await query(
      `SELECT c.*, cc.name as category_name
       FROM commodities c
       LEFT JOIN commodity_categories cc ON cc.id = c.category_id
       ORDER BY c.display_order ASC`
    )
    return result.rows
  },

  async findBySlug(slug) {
    const result = await query('SELECT * FROM commodities WHERE slug = $1', [slug])
    return result.rows[0]
  },

  async findById(id) {
    const result = await query('SELECT * FROM commodities WHERE id = $1', [id])
    return result.rows[0]
  },

  async update(id, data) {
    const allowed = ['name', 'category_id', 'slug', 'description', 'status', 'display_order']
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
    const result = await query(
      `UPDATE commodities SET ${updates.join(', ')} WHERE id = $${values.length}
       RETURNING *`,
      values
    )
    return result.rows[0]
  },

  async delete(id) {
    const result = await query('DELETE FROM commodities WHERE id = $1 RETURNING id', [id])
    return result.rows[0]
  },
}

export const CommodityCategoryModel = {
  async create(name, slug, description, displayOrder = 0) {
    const result = await query(
      `INSERT INTO commodity_categories (name, slug, description, display_order)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, slug, description, displayOrder]
    )
    return result.rows[0]
  },

  async findAll() {
    const result = await query(
      'SELECT * FROM commodity_categories ORDER BY display_order ASC'
    )
    return result.rows
  },

  async findBySlug(slug) {
    const result = await query(
      'SELECT * FROM commodity_categories WHERE slug = $1',
      [slug]
    )
    return result.rows[0]
  },

  async update(id, data) {
    const allowed = ['name', 'slug', 'description', 'display_order']
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
    const result = await query(
      `UPDATE commodity_categories SET ${updates.join(', ')} WHERE id = $${values.length}
       RETURNING *`,
      values
    )
    return result.rows[0]
  },

  async delete(id) {
    const result = await query(
      'DELETE FROM commodity_categories WHERE id = $1 RETURNING id',
      [id]
    )
    return result.rows[0]
  },
}

import { query } from '../config/database.js'

export const InsightModel = {
  async create(data) {
    const result = await query(
      `INSERT INTO insights (title, slug, category, summary, content, author, status, image_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [data.title, data.slug, data.category, data.summary, data.content, data.author, data.status || 'draft', data.imageUrl || null]
    )
    return result.rows[0]
  },

  async findAll({ status, category } = {}) {
    let sql = 'SELECT * FROM insights'
    const params = []
    const conditions = []
    if (status) {
      params.push(status)
      conditions.push(`status = $${params.length}`)
    }
    if (category) {
      params.push(category)
      conditions.push(`category = $${params.length}`)
    }
    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ')
    }
    sql += ' ORDER BY published_at DESC NULLS LAST, created_at DESC'
    const result = await query(sql, params)
    return result.rows
  },

  async findBySlug(slug) {
    const result = await query(
      'SELECT * FROM insights WHERE slug = $1 AND status = $2',
      [slug, 'published']
    )
    return result.rows[0]
  },

  async findPublishedBySlug(slug) {
    return this.findBySlug(slug)
  },

  async findById(id) {
    const result = await query('SELECT * FROM insights WHERE id = $1', [id])
    return result.rows[0]
  },

  async update(id, data) {
    const allowed = [
      'title',
      'slug',
      'category',
      'summary',
      'content',
      'author',
      'status',
      'image_url',
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
    const result = await query(
      `UPDATE insights SET ${updates.join(', ')} WHERE id = $${values.length}
       RETURNING *`,
      values
    )
    return result.rows[0]
  },

  async publish(id) {
    const result = await query(
      `UPDATE insights SET status = 'published', published_at = NOW() WHERE id = $1
       RETURNING *`,
      [id]
    )
    return result.rows[0]
  },

  async delete(id) {
    const result = await query('DELETE FROM insights WHERE id = $1 RETURNING id', [id])
    return result.rows[0]
  },
}

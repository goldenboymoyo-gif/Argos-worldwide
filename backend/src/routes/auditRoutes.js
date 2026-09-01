import { Router } from 'express'
import { protect, authorize } from '../middleware/auth.js'
import { query } from '../config/database.js'

const router = Router()

router.use(protect)
router.use(authorize('admin'))

router.get('/', async (req, res, next) => {
  try {
    const { limit = 100, entity } = req.query
    let sql = 'SELECT al.*, u.email as user_email FROM audit_logs al LEFT JOIN users u ON u.id = al.user_id'
    const params = []
    const conditions = []
    if (entity) {
      params.push(entity)
      conditions.push(`al.entity = $${params.length}`)
    }
    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ')
    }
    sql += ' ORDER BY al.created_at DESC LIMIT $' + (params.length + 1)
    params.push(parseInt(limit) || 100)
    const result = await query(sql, params)
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
})

export default router

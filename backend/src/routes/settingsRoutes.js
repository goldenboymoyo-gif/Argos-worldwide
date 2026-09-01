import { Router } from 'express'
import { protect, authorize } from '../middleware/auth.js'
import { query } from '../config/database.js'
import { logAudit } from '../services/sanitizer.js'

const router = Router()

router.use(protect)
router.use(authorize('admin'))

router.get('/', async (req, res, next) => {
  try {
    const result = await query('SELECT key, value, updated_at FROM system_settings ORDER BY key')
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
})

router.put('/:key', async (req, res, next) => {
  try {
    const result = await query(
      `INSERT INTO system_settings (key, value, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = NOW()
       RETURNING key, value`,
      [req.params.key, JSON.stringify(req.body.value)]
    )
    await logAudit({ userId: req.user.id, action: 'UPDATE', entity: 'settings', ip: req.ip })
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
})

export default router

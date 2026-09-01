import { Router } from 'express'
import { SanitizedPublicService } from '../services/publicService.js'
import { protect, authorize } from '../middleware/auth.js'
import { query } from '../config/database.js'

const router = Router()

// Public - freight rates
router.get('/public', async (req, res, next) => {
  try {
    const data = await SanitizedPublicService.freightRatesPublic()
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.use(protect)
router.use(authorize('admin'))

router.get('/', async (req, res, next) => {
  try {
    const result = await query('SELECT * FROM freight_rates ORDER BY id ASC')
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const result = await query(
      `INSERT INTO freight_rates (route, origin, destination, commodity_relevance, rate, rate_unit, direction, source, is_indicative)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [req.body.route, req.body.origin, req.body.destination, req.body.commodityRelevance, req.body.rate, req.body.rateUnit, req.body.direction, req.body.source, req.body.isIndicative === false ? false : true]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const result = await query(
      `UPDATE freight_rates SET route = $1, origin = $2, destination = $3, commodity_relevance = $4,
       rate = $5, rate_unit = $6, direction = $7, source = $8, is_indicative = $9, last_updated = NOW()
       WHERE id = $10 RETURNING *`,
      [req.body.route, req.body.origin, req.body.destination, req.body.commodityRelevance, req.body.rate, req.body.rateUnit, req.body.direction, req.body.source, req.body.isIndicative, req.params.id]
    )
    if (result.rows.length === 0) return res.status(404).json({ message: 'Not found' })
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await query('DELETE FROM freight_rates WHERE id = $1 RETURNING id', [req.params.id])
    if (result.rows.length === 0) return res.status(404).json({ message: 'Not found' })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

export default router

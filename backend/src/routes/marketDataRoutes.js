import { Router } from 'express'
import { SanitizedPublicService } from '../services/publicService.js'
import { protect, authorize } from '../middleware/auth.js'
import { query } from '../config/database.js'

const router = Router()

// Public - market data (all flagged as reference when not live)
router.get('/public', async (req, res, next) => {
  try {
    const data = await SanitizedPublicService.marketDataPublic()
    res.json(data)
  } catch (error) {
    next(error)
  }
})

router.use(protect)
router.use(authorize('admin'))

router.get('/', async (req, res, next) => {
  try {
    const result = await query('SELECT * FROM market_data ORDER BY id ASC')
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const result = await query(
      `INSERT INTO market_data (instrument, symbol, price, change_value, change_percent, currency, is_live, data_source)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [req.body.instrument, req.body.symbol, req.body.price, req.body.changeValue, req.body.changePercent, req.body.currency || 'USD', req.body.isLive || false, req.body.dataSource || null]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const result = await query(
      `UPDATE market_data SET instrument = $1, symbol = $2, price = $3, change_value = $4,
       change_percent = $5, currency = $6, is_live = $7, data_source = $8, last_update = NOW()
       WHERE id = $9 RETURNING *`,
      [req.body.instrument, req.body.symbol, req.body.price, req.body.changeValue, req.body.changePercent, req.body.currency, req.body.isLive, req.body.dataSource, req.params.id]
    )
    if (result.rows.length === 0) return res.status(404).json({ message: 'Not found' })
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await query('DELETE FROM market_data WHERE id = $1 RETURNING id', [req.params.id])
    if (result.rows.length === 0) return res.status(404).json({ message: 'Not found' })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

export default router

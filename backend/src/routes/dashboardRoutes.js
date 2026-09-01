import { Router } from 'express'
import { protect, authorize } from '../middleware/auth.js'
import { serviceStats } from '../services/statsService.js'

const router = Router()

router.get('/stats', protect, authorize('admin'), async (req, res, next) => {
  try {
    const stats = await serviceStats()
    res.json(stats)
  } catch (error) {
    next(error)
  }
})

export default router

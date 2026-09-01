import { Router } from 'express'
import { InsightModel } from '../models/InsightModel.js'
import { protect, authorize } from '../middleware/auth.js'

const router = Router()

// Public - published insights only
router.get('/public', async (req, res, next) => {
  try {
    const insights = await InsightModel.findAll({ status: 'published' })
    res.json(insights)
  } catch (error) {
    next(error)
  }
})

// Public - single published insight by slug
router.get('/public/:slug', async (req, res, next) => {
  try {
    const insight = await InsightModel.findBySlug(req.params.slug)
    if (!insight) return res.status(404).json({ message: 'Not found' })
    res.json(insight)
  } catch (error) {
    next(error)
  }
})

// Admin routes guarded
router.use(protect)
router.use(authorize('admin', 'editor'))

router.get('/', async (req, res, next) => {
  try {
    const { status, category } = req.query
    const insights = await InsightModel.findAll({ status, category })
    res.json(insights)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const insight = await InsightModel.findById(req.params.id)
    if (!insight) return res.status(404).json({ message: 'Not found' })
    res.json(insight)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const insight = await InsightModel.create(req.body)
    res.status(201).json(insight)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const insight = await InsightModel.update(req.params.id, req.body)
    if (!insight) return res.status(404).json({ message: 'Not found' })
    res.json(insight)
  } catch (error) {
    next(error)
  }
})

router.post('/:id/publish', authorize('admin'), async (req, res, next) => {
  try {
    const insight = await InsightModel.publish(req.params.id)
    if (!insight) return res.status(404).json({ message: 'Not found' })
    res.json(insight)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', authorize('admin'), async (req, res, next) => {
  try {
    const insight = await InsightModel.delete(req.params.id)
    if (!insight) return res.status(404).json({ message: 'Not found' })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

export default router

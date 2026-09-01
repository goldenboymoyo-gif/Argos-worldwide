import { Router } from 'express'
import { CommodityModel, CommodityCategoryModel } from '../models/CommodityModel.js'
import { protect, authorize } from '../middleware/auth.js'
import { logAudit } from '../services/sanitizer.js'

const router = Router()

// Public - list categories
router.get('/categories', async (req, res, next) => {
  try {
    const categories = await CommodityCategoryModel.findAll()
    res.json(categories)
  } catch (error) {
    next(error)
  }
})

// Commercial/Public - list commodities by category
router.get('/', async (req, res, next) => {
  try {
    const commodities = await CommodityModel.findAll()
    res.json(commodities)
  } catch (error) {
    next(error)
  }
})

// Admin routes guarded
router.use(protect)

router.post('/categories', authorize('admin'), async (req, res, next) => {
  try {
    const category = await CommodityCategoryModel.create(
      req.body.name,
      req.body.slug,
      req.body.description,
      req.body.displayOrder
    )
    await logAudit({ userId: req.user.id, action: 'CREATE', entity: 'commodity_category', entityId: category.id, ip: req.ip })
    res.status(201).json(category)
  } catch (error) {
    next(error)
  }
})

router.put('/categories/:id', authorize('admin'), async (req, res, next) => {
  try {
    const category = await CommodityCategoryModel.update(req.params.id, req.body)
    if (!category) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'UPDATE', entity: 'commodity_category', entityId: category.id, ip: req.ip })
    res.json(category)
  } catch (error) {
    next(error)
  }
})

router.delete('/categories/:id', authorize('admin'), async (req, res, next) => {
  try {
    const category = await CommodityCategoryModel.delete(req.params.id)
    if (!category) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'DELETE', entity: 'commodity_category', entityId: req.params.id, ip: req.ip })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

router.post('/', authorize('admin'), async (req, res, next) => {
  try {
    const commodity = await CommodityModel.create(req.body)
    await logAudit({ userId: req.user.id, action: 'CREATE', entity: 'commodity', entityId: commodity.id, ip: req.ip })
    res.status(201).json(commodity)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', authorize('admin'), async (req, res, next) => {
  try {
    const commodity = await CommodityModel.update(req.params.id, req.body)
    if (!commodity) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'UPDATE', entity: 'commodity', entityId: commodity.id, ip: req.ip })
    res.json(commodity)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', authorize('admin'), async (req, res, next) => {
  try {
    const commodity = await CommodityModel.delete(req.params.id)
    if (!commodity) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'DELETE', entity: 'commodity', entityId: req.params.id, ip: req.ip })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

export default router

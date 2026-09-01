import { Router } from 'express'
import { ActiveDeskModel } from '../models/ActiveDeskModel.js'
import { SanitizedPublicService } from '../services/publicService.js'
import { protect, authorize } from '../middleware/auth.js'
import { logAudit } from '../services/sanitizer.js'

const router = Router()

// Public endpoint - only public items
router.get('/public', async (req, res, next) => {
  try {
    const items = await SanitizedPublicService.activeDeskPublic()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

// Admin - list all (any visibility), requires auth
router.get('/', protect, authorize('admin', 'editor'), async (req, res, next) => {
  try {
    const items = await ActiveDeskModel.findAll()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

// Admin - single item
router.get('/:id', protect, authorize('admin', 'editor'), async (req, res, next) => {
  try {
    const item = await ActiveDeskModel.findById(req.params.id)
    if (!item) return res.status(404).json({ message: 'Not found' })
    res.json(item)
  } catch (error) {
    next(error)
  }
})

// Admin - create
router.post('/', protect, authorize('admin', 'editor'), async (req, res, next) => {
  try {
    const item = await ActiveDeskModel.create(req.body)
    await logAudit({ userId: req.user.id, action: 'CREATE', entity: 'active_desk', entityId: item.id, ip: req.ip })
    res.status(201).json(item)
  } catch (error) {
    next(error)
  }
})

// Admin - update
router.put('/:id', protect, authorize('admin', 'editor'), async (req, res, next) => {
  try {
    const item = await ActiveDeskModel.update(req.params.id, req.body)
    if (!item) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'UPDATE', entity: 'active_desk', entityId: item.id, ip: req.ip })
    res.json(item)
  } catch (error) {
    next(error)
  }
})

// Admin - delete
router.delete('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const item = await ActiveDeskModel.delete(req.params.id)
    if (!item) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'DELETE', entity: 'active_desk', entityId: req.params.id, ip: req.ip })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

export default router

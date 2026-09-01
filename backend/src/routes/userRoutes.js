import { Router } from 'express'
import { UserModel } from '../models/UserModel.js'
import { protect, authorize } from '../middleware/auth.js'
import { logAudit } from '../services/sanitizer.js'

const router = Router()

router.use(protect)
router.use(authorize('admin'))

router.get('/', async (req, res, next) => {
  try {
    const users = await UserModel.list()
    res.json(users)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const user = await UserModel.update(req.params.id, req.body)
    if (!user) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'UPDATE', entity: 'user', entityId: user.id, ip: req.ip })
    res.json(user)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    if (req.params.id === String(req.user.id)) {
      return res.status(400).json({ message: 'Cannot delete your own account' })
    }
    const user = await UserModel.delete(req.params.id)
    if (!user) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'DELETE', entity: 'user', entityId: req.params.id, ip: req.ip })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

export default router

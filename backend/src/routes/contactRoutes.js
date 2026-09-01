import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { contactLimiter } from '../middleware/rateLimit.js'
import { protect, authorize } from '../middleware/auth.js'
import { query } from '../config/database.js'
import { sanitizeInput, logAudit } from '../services/sanitizer.js'

const router = Router()

const validateContact = [
  body('name').isString().isLength({ min: 2, max: 200 }),
  body('email').isEmail(),
  body('subject').isString().isLength({ max: 200 }).optional(),
  body('message').isString().isLength({ min: 10, max: 5000 }),
]

// Public - submit contact form (rate limited)
router.post('/', contactLimiter, validateContact, async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Validation failed', errors: errors.array() })
    }

    const result = await query(
      `INSERT INTO contacts (name, email, organisation, subject, message)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [
        sanitizeInput(req.body.name),
        sanitizeInput(req.body.email),
        sanitizeInput(req.body.organisation || null),
        sanitizeInput(req.body.subject || null),
        sanitizeInput(req.body.message),
      ]
    )

    await logAudit({ action: 'CONTACT_SUBMITTED', entity: 'contact', entityId: result.rows[0].id, ip: req.ip })

    res.status(201).json({ message: 'Message received. We will respond within one business day.' })
  } catch (error) {
    next(error)
  }
})

// Admin routes
router.use(protect)
router.use(authorize('admin'))

router.get('/', async (req, res, next) => {
  try {
    const result = await query('SELECT * FROM contacts ORDER BY created_at DESC')
    res.json(result.rows)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await query('DELETE FROM contacts WHERE id = $1 RETURNING id', [req.params.id])
    if (result.rows.length === 0) return res.status(404).json({ message: 'Not found' })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

export default router

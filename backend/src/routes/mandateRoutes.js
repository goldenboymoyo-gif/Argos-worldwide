import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { MandateModel } from '../models/MandateModel.js'
import { protect, authorize } from '../middleware/auth.js'
import { mandateLimiter } from '../middleware/rateLimit.js'
import { upload } from '../middleware/upload.js'
import { sanitizeInput, logAudit } from '../services/sanitizer.js'
import { sendNotification } from '../services/mailer.js'

const router = Router()

const validateMandate = [
  body('partyType').isString().isLength({ min: 1, max: 100 }),
  body('commodity').isString().isLength({ min: 1, max: 200 }),
  body('origin').isString().isLength({ min: 1, max: 200 }),
  body('destination').isString().isLength({ min: 1, max: 200 }),
  body('volume').isString().isLength({ min: 1, max: 100 }),
  body('unit').isString().isLength({ min: 1, max: 50 }),
  body('specification').isString().isLength({ max: 5000 }).optional(),
  body('deliveryWindow').isString().isLength({ max: 200 }).optional(),
  body('incoterms').isString().isLength({ max: 50 }).optional(),
  body('targetPrice').isString().isLength({ max: 200 }).optional(),
  body('additionalInfo').isString().isLength({ max: 5000 }).optional(),
]

// Public - submit a mandate (rate limited, sanitized)
router.post(
  '/',
  mandateLimiter,
  upload.array('documents', 3),
  validateMandate,
  async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Validation failed', errors: errors.array() })
      }

      const body = req.body
      const mandate = await MandateModel.create({
        partyType: sanitizeInput(body.partyType),
        commodity: sanitizeInput(body.commodity),
        origin: sanitizeInput(body.origin),
        destination: sanitizeInput(body.destination),
        volume: sanitizeInput(body.volume),
        unit: sanitizeInput(body.unit),
        specification: sanitizeInput(body.specification),
        deliveryWindow: sanitizeInput(body.deliveryWindow),
        incoterms: sanitizeInput(body.incoterms),
        targetPrice: sanitizeInput(body.targetPrice),
        additionalInfo: sanitizeInput(body.additionalInfo),
      })

      // Link uploaded documents to mandate
      if (req.files && req.files.length > 0) {
        const { query } = await import('../config/database.js')
        for (const file of req.files) {
          await query(
            `INSERT INTO uploaded_documents (mandate_id, filename, original_name, mime_type, size, storage_path)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [mandate.id, file.filename, file.originalname, file.mimetype, file.size, file.path]
          )
        }
      }

      await logAudit({ action: 'MANDATE_SUBMITTED', entity: 'mandate', entityId: mandate.id, ip: req.ip })

      // Best-effort — never blocks the response if email sending fails.
      sendNotification({
        subject: `New mandate submitted: ${body.commodity}`,
        text: `New confidential mandate received via the website.\n\n` +
          `Reference: ${mandate.id}\n` +
          `Party type: ${body.partyType}\n` +
          `Commodity: ${body.commodity}\n` +
          `Origin: ${body.origin}\n` +
          `Destination: ${body.destination}\n` +
          `Volume: ${body.volume} ${body.unit}\n` +
          `Delivery window: ${body.deliveryWindow || '—'}\n` +
          `Incoterms: ${body.incoterms || '—'}\n` +
          `Target price: ${body.targetPrice || '—'}\n\n` +
          `Specification:\n${body.specification || '—'}\n\n` +
          `Additional info:\n${body.additionalInfo || '—'}\n\n` +
          `View in admin for uploaded documents.`,
      }).catch(() => {})

      res.status(201).json({ message: 'Mandate received. We will respond confidentially.', reference: mandate.id })
    } catch (error) {
      next(error)
    }
  }
)

// Admin - list all mandates
router.get('/', protect, authorize('admin'), async (req, res, next) => {
  try {
    const mandates = await MandateModel.findAll()
    res.json(mandates)
  } catch (error) {
    next(error)
  }
})

// Admin - single mandate
router.get('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const mandate = await MandateModel.findById(req.params.id)
    if (!mandate) return res.status(404).json({ message: 'Not found' })

    const { query } = await import('../config/database.js')
    const docs = await query(
      'SELECT id, original_name, mime_type, size, created_at FROM uploaded_documents WHERE mandate_id = $1',
      [mandate.id]
    )

    await logAudit({ userId: req.user.id, action: 'VIEW', entity: 'mandate', entityId: mandate.id, ip: req.ip })
    res.json({ mandate, documents: docs.rows })
  } catch (error) {
    next(error)
  }
})

// Admin - update
router.put('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const mandate = await MandateModel.update(req.params.id, req.body)
    if (!mandate) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'UPDATE', entity: 'mandate', entityId: mandate.id, ip: req.ip })
    res.json(mandate)
  } catch (error) {
    next(error)
  }
})

// Admin - delete
router.delete('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const mandate = await MandateModel.delete(req.params.id)
    if (!mandate) return res.status(404).json({ message: 'Not found' })
    await logAudit({ userId: req.user.id, action: 'DELETE', entity: 'mandate', entityId: req.params.id, ip: req.ip })
    res.json({ message: 'Deleted' })
  } catch (error) {
    next(error)
  }
})

export default router

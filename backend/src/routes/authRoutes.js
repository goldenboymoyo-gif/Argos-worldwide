import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { body, validationResult } from 'express-validator'
import { UserModel } from '../models/UserModel.js'
import { config } from '../config/index.js'
import { authLimiter } from '../middleware/rateLimit.js'
import { protect } from '../middleware/auth.js'
import { logAudit } from '../services/sanitizer.js'

const router = Router()

const validateLogin = [
  body('email').isEmail().normalizeEmail(),
  body('password').isString().notEmpty(),
]

router.post('/login', authLimiter, validateLogin, async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid input', errors: errors.array() })
    }

    const { email, password } = req.body
    const user = await UserModel.findByEmail(email)

    if (!user || user.role !== 'admin') {
      await logAudit({ action: 'LOGIN_FAILED', entity: 'auth', ip: req.ip, metadata: { email, reason: 'invalid_credentials' } })
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password_hash)
    if (!isMatch) {
      await logAudit({ action: 'LOGIN_FAILED', entity: 'auth', ip: req.ip, metadata: { email, reason: 'wrong_password' } })
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    if (user.status !== 'active') {
      await logAudit({ action: 'LOGIN_BLOCKED', entity: 'auth', userId: user.id, ip: req.ip, metadata: { email, reason: 'inactive' } })
      return res.status(403).json({ message: 'Account inactive' })
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    )

    await logAudit({ action: 'LOGIN_SUCCESS', entity: 'auth', userId: user.id, ip: req.ip })

    res.cookie('token', token, {
      httpOnly: true,
      secure: config.env === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    })

    res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    })
  } catch (error) {
    next(error)
  }
})

router.post('/logout', protect, (req, res) => {
  res.clearCookie('token')
  res.json({ message: 'Logged out' })
})

router.get('/me', protect, async (req, res) => {
  const user = await UserModel.findById(req.user.id)
  res.json({ user })
})

export default router

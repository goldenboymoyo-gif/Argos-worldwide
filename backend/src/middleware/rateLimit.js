import express from 'express'
import rateLimit from 'express-rate-limit'
import { config } from '../config/index.js'
import { query } from '../config/database.js'

export const router = express.Router()

// Auth limiter for login attempts
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many login attempts. Please try again later.' },
})

// Mandate submission limiter
export const mandateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: { message: 'Too many mandate submissions. Please try again later.' },
})

// Contact form limiter
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: { message: 'Too many submissions. Please try again later.' },
})

export function logAudit({ userId = null, action, entity, entityId = null, ip = null }) {
  return query(
    `INSERT INTO audit_logs (user_id, action, entity, entity_id, ip_address, created_at)
     VALUES ($1, $2, $3, $4, $5, NOW())`,
    [userId, action, entity, entityId, ip]
  ).catch((err) => console.error('Audit log error:', err))
}

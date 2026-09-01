import jwt from 'jsonwebtoken'
import { config } from '../config/index.js'
import { query } from '../config/database.js'

export async function protect(req, res, next) {
  let token

  const authHeader = req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]
  } else if (req.cookies?.token) {
    token = req.cookies.token
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' })
  }

  try {
    const decoded = jwt.verify(token, config.jwt.secret)

    const result = await query(
      'SELECT id, email, role, status FROM users WHERE id = $1 AND status = $2',
      [decoded.id, 'active']
    )

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Not authorized, user not found' })
    }

    req.user = result.rows[0]
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized, token failed' })
  }
}

export function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized' })
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: insufficient permissions' })
    }
    next()
  }
}

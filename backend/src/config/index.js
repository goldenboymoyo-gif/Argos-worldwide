import dotenv from 'dotenv'
dotenv.config()

const env = process.env.NODE_ENV || 'development'

const jwtSecret = process.env.JWT_SECRET

// Refuse to run in production with a missing or placeholder JWT secret
if (env === 'production' && (!jwtSecret || jwtSecret.length < 32 || jwtSecret === 'change-me')) {
  throw new Error(
    'JWT_SECRET must be set to a strong, random value of at least 32 characters in production. Aborting startup.'
  )
}

export const config = {
  env,
  port: process.env.PORT || 5000,
  db: {
    connectionString:
      process.env.DATABASE_URL ||
      `postgresql://${process.env.DB_USER || 'postgres'}:${process.env.DB_PASSWORD || ''}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME || 'argos'}`,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
  upload: {
    maxSize: process.env.UPLOAD_MAX_SIZE || 10 * 1024 * 1024,
    dir: process.env.UPLOAD_DIR || 'uploads',
  },
  rateLimit: {
    windowMs: process.env.RATE_WINDOW_MS || 15 * 60 * 1000,
    max: process.env.RATE_MAX || 300,
  },
  mail: {
    host: process.env.SMTP_HOST || '',
    port: Number(process.env.SMTP_PORT || 587),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    from: process.env.SMTP_FROM || 'Argos Worldwide Website <no-reply@argosworldwide.com>',
    // Where contact/mandate submission notifications are sent.
    notifyEmail: process.env.CONTACT_NOTIFY_EMAIL || 'arthur@argosworldwide.com',
  },
}

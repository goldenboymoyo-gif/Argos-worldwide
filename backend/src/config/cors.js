import { config } from './index.js'

export const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = config.cors.origin.split(',').map((o) => o.trim())
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

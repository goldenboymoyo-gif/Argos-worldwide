import { config } from './index.js'

export const corsOptions = {
  origin: (origin, callback) => {
    // Always allow the production Argos origins, any of our own subdomains,
    // plus anything explicitly configured in CORS_ORIGIN. Public forms must
    // work from every environment where the site is published.
    const configured = config.cors.origin.split(',').map((o) => o.trim()).filter(Boolean)
    const ownDomain = /^https?:\/\/([\w-]+\.)*argosworldwide\.com$/
    if (!origin || ownDomain.test(origin) || configured.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

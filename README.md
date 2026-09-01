# Argos Worldwide — Website

Official website for Argos Worldwide, a commodity trading and sourcing business connecting commodity buyers with suppliers globally.

## Structure

```
Argos worldwide/
├── frontend/        # React 18 + Vite + Tailwind CSS public website
│   ├── public/      # Static assets (favicon, sitemap.xml, robots.txt)
│   └── src/
│       ├── admin/   # Private administrator dashboard
│       ├── components/  # Header, Footer, Layout
│       ├── lib/     # Shared API helper
│       └── pages/   # Public pages
└── backend/         # Node.js + Express + PostgreSQL API
    └── src/
        ├── config/
        ├── controllers/
        ├── database/
        ├── middleware/
        ├── models/
        ├── routes/
        ├── security/
        ├── services/
        ├── utils/
        └── jobs/
```

## Prerequisites

- Node.js 18+
- PostgreSQL

## Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run preview
```

## Backend

```bash
cd backend
npm install
# Configure environment
Copy-Item .env.example .env
# Edit .env with your PostgreSQL credentials
npm run db:migrate   # create tables
npm run db:seed      # seed reference data + default admin
npm run dev          # http://localhost:5000
```

Default admin (change immediately after first login):
- Email: admin@argosworldwide.com
- Password: ChangeMe_2026!

## Admin Dashboard

Navigate to `http://localhost:3000/admin` and log in with admin credentials.

Sections: Dashboard, Active Desk, Mandates, Commodities, Insights, Market Data, Freight, Contacts, Users, Audit Logs, Settings.

## Deployment Notes

This project is intentionally **not deployed**. The Active Desk is connected to the backend and shows reference data seeded into the database. Market data and freight rates are reference-only — they are **not live** until a market data API provider is connected.

## Contact

- Arthur Blackwell — arthur@argosworldwide.com
- Ben Norton — ben@argosworldwide.com / +263 77 875 9836

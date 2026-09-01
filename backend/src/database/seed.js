import bcrypt from 'bcryptjs'
import { query } from '../config/database.js'

export async function seed() {
  // Seed roles
  await query(
    `INSERT INTO roles (name, description) VALUES
     ('admin', 'Full platform administrator'),
     ('editor', 'Content editor'),
     ('viewer', 'Read-only access')
     ON CONFLICT (name) DO NOTHING`
  ).catch(() => {})

  // Seed default admin (password: change-me-now)
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@argosworldwide.com'
  const adminPassword = process.env.ADMIN_INITIAL_PASSWORD || 'ChangeMe_2026!'
  const existingAdmin = await query('SELECT id FROM users WHERE email = $1', [adminEmail])
  if (existingAdmin.rows.length === 0) {
    const hash = await bcrypt.hash(adminPassword, 12)
    await query(
      `INSERT INTO users (email, password_hash, name, role, status)
       VALUES ($1, $2, $3, 'admin', 'active')`,
      [adminEmail, hash, 'Administrator']
    )
    console.log('Admin user created. Change the default password immediately.')
  }

  // Seed mandate_statuses
  await query(
    `INSERT INTO mandate_statuses (name, sort_order) VALUES
     ('RESEARCH', 1),
     ('SOURCING', 2),
     ('MATCHING', 3),
     ('INTRODUCTION', 4),
     ('EXECUTION', 5),
     ('COMPLETED', 6),
     ('ARCHIVED', 7)
     ON CONFLICT (name) DO NOTHING`
  ).catch(() => {})

  // Seed commodity categories
  await query(
    `INSERT INTO commodity_categories (name, slug, description, display_order) VALUES
     ('Energy', 'energy', 'Crude grades, refined products, LNG and power across Atlantic and Eastern basins.', 1),
     ('Metals', 'metals', 'Precious, base and battery metals including physical lots and structured offtake agreements.', 2),
     ('Minerals', 'minerals', 'Industrial minerals and mining outputs sourced directly from origin globally.', 3),
     ('Agriculture', 'agriculture', 'Grains, softs and edible oils matched from production regions to global demand.', 4),
     ('Construction Materials', 'construction-materials', 'Aggregates, cement, bitumen and bulk materials for large-scale infrastructure projects.', 5),
     ('Specialist Sourcing', 'specialist-sourcing', 'Bulk products that have an established market.', 6)
     ON CONFLICT (slug) DO NOTHING`
  ).catch(() => {})

  // Seed Active Desk reference records
  await query(
    `INSERT INTO active_desk
     (commodity, origin, destination, volume, unit, specification, status, visibility, display_order) VALUES
     ('Granular Sulphur', 'Middle East Gulf', 'Southeast Asia', '10,000–25,000', 'MT', NULL, 'MATCHING', 'public', 1),
     ('Copper Cathode', 'Central Africa', 'China', '500–2,000', 'MT', NULL, 'EXECUTION', 'public', 2),
     ('Bitumen (60/70)', 'Iran', 'West Africa', '5,000–15,000', 'MT', NULL, 'MATCHING', 'public', 3),
     ('Milling Wheat', 'Black Sea', 'MENA', '25,000–60,000', 'MT', NULL, 'EXECUTION', 'public', 4),
     ('Manganese Ore', 'South Africa', 'India', '10,000–30,000', 'MT', NULL, 'SOURCING', 'public', 5),
     ('Urea (Prilled)', 'Arab Gulf', 'Brazil', '20,000–40,000', 'MT', NULL, 'SOURCING', 'public', 6),
     ('LNG Cargo', 'US Gulf', 'Northwest Europe', '1 cargo (~70k)', 'MT', NULL, 'EXECUTION', 'public', 7)
     ON CONFLICT DO NOTHING`
  ).catch(() => {})

  // Seed market data reference records
  await query(
    `INSERT INTO market_data (instrument, symbol, price, change_value, change_percent, currency, is_live) VALUES
     ('Brent', 'BRENT', 83.27, 0.82, 0.99, 'USD', FALSE),
     ('WTI', 'WTI', 78.00, -0.12, -0.15, 'USD', FALSE),
     ('Gold', 'GOLD', 2386.24, 4.76, 0.20, 'USD', FALSE),
     ('Silver', 'SILVER', 28.92, 0.00, 0.01, 'USD', FALSE),
     ('Copper', 'COPPER', 4.317, -0.003, -0.08, 'USD', FALSE),
     ('Wheat', 'WHEAT', 607.73, -4.75, -0.78, 'USD', FALSE),
     ('Corn', 'CORN', 438.26, 0.00, 0.00, 'USD', FALSE),
     ('Natural Gas', 'NGAS', 2.841, 0.001, 0.04, 'USD', FALSE),
     ('Platinum', 'PLAT', 992.40, 7.15, 0.72, 'USD', FALSE),
     ('Cocoa', 'COCOA', 7224.66, -15.28, -0.21, 'USD', FALSE),
     ('Coffee', 'COFFEE', 223.60, -1.22, -0.54, 'USD', FALSE),
     ('Soybean', 'SOYBN', 1149.06, 6.55, 0.57, 'USD', FALSE)
     ON CONFLICT (symbol) DO NOTHING`
  ).catch(() => {})

  // Seed freight rates
  await query(
    `INSERT INTO freight_rates
     (route, origin, destination, commodity_relevance, rate, rate_unit, direction, source, is_indicative) VALUES
     ('Durban → Rotterdam', 'Durban', 'Rotterdam', 'General Cargo', 38.20, 'USD/MT', 'import', 'Reference', TRUE),
     ('Singapore → ARA (Europe)', 'Singapore', 'ARA', 'Petroleum Products', 41.70, 'USD/MT', 'import', 'Reference', TRUE),
     ('Black Sea → MENA', 'Black Sea', 'MENA', 'Grains/Bulk', 28.17, 'USD/MT', 'export', 'Reference', TRUE),
     ('US Gulf → Asia', 'US Gulf', 'Asia', 'Energy/Petrochemicals', 50.96, 'USD/MT', 'export', 'Reference', TRUE),
     ('West Africa → China', 'West Africa', 'China', 'Dry Bulk/Ore', 34.17, 'USD/MT', 'export', 'Reference', TRUE),
     ('Middle East Gulf → Japan', 'Middle East Gulf', 'Japan', 'Energy/LNG', 24.91, 'USD/MT', 'export', 'Reference', TRUE)
     ON CONFLICT DO NOTHING`
  ).catch(() => {})

  console.log('Database seeded successfully')
}

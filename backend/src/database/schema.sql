-- Users and Roles
CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'viewer',
  status VARCHAR(20) NOT NULL DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Commodity Categories and Commodities
CREATE TABLE IF NOT EXISTS commodity_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  display_order INT DEFAULT 0,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS commodities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category_id INT REFERENCES commodity_categories(id) ON DELETE SET NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'active',
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Mandates
CREATE TABLE IF NOT EXISTS mandate_statuses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  sort_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS mandates (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255),
  contact_email VARCHAR(255),
  company VARCHAR(255),
  party_type VARCHAR(50),
  commodity VARCHAR(255) NOT NULL,
  origin VARCHAR(255),
  destination VARCHAR(255),
  volume VARCHAR(255),
  unit VARCHAR(50),
  specification TEXT,
  delivery_window VARCHAR(255),
  incoterms VARCHAR(50),
  target_price VARCHAR(255),
  additional_info TEXT,
  status VARCHAR(50) DEFAULT 'PENDING',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Active Desk
CREATE TABLE IF NOT EXISTS active_desk (
  id SERIAL PRIMARY KEY,
  commodity VARCHAR(255) NOT NULL,
  origin VARCHAR(255),
  destination VARCHAR(255),
  volume VARCHAR(255),
  unit VARCHAR(50),
  specification TEXT,
  status VARCHAR(50) DEFAULT 'RESEARCH',
  visibility VARCHAR(20) DEFAULT 'public',
  display_order INT DEFAULT 0,
  vehicle_type VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Market Data
CREATE TABLE IF NOT EXISTS market_data (
  id SERIAL PRIMARY KEY,
  instrument VARCHAR(255) NOT NULL,
  symbol VARCHAR(50) UNIQUE,
  price NUMERIC(20, 4),
  change_value NUMERIC(20, 4),
  change_percent NUMERIC(10, 4),
  currency VARCHAR(10) DEFAULT 'USD',
  data_source VARCHAR(255),
  is_live BOOLEAN DEFAULT FALSE,
  last_update TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Freight Rates
CREATE TABLE IF NOT EXISTS freight_rates (
  id SERIAL PRIMARY KEY,
  route VARCHAR(255) NOT NULL,
  origin VARCHAR(255),
  destination VARCHAR(255),
  commodity_relevance VARCHAR(255),
  rate NUMERIC(20, 2),
  rate_unit VARCHAR(50),
  direction VARCHAR(20),
  source VARCHAR(255),
  is_indicative BOOLEAN DEFAULT TRUE,
  last_updated TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insights
CREATE TABLE IF NOT EXISTS insights (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(100),
  summary TEXT,
  content TEXT,
  author VARCHAR(255),
  status VARCHAR(20) DEFAULT 'draft',
  image_url VARCHAR(500),
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Contacts
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  organisation VARCHAR(255),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Uploaded Documents
CREATE TABLE IF NOT EXISTS uploaded_documents (
  id SERIAL PRIMARY KEY,
  mandate_id INT REFERENCES mandates(id) ON DELETE SET NULL,
  filename VARCHAR(500) NOT NULL,
  original_name VARCHAR(500),
  mime_type VARCHAR(100),
  size INT,
  storage_path VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Audit Logs
CREATE TABLE IF NOT EXISTS audit_logs (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE SET NULL,
  action VARCHAR(100) NOT NULL,
  entity VARCHAR(100),
  entity_id INT,
  ip_address VARCHAR(50),
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- System Settings
CREATE TABLE IF NOT EXISTS system_settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(255) UNIQUE NOT NULL,
  value JSONB,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_active_desk_visibility ON active_desk(visibility);
CREATE INDEX IF NOT EXISTS idx_active_desk_status ON active_desk(status);
CREATE INDEX IF NOT EXISTS idx_mandates_status ON mandates(status);
CREATE INDEX IF NOT EXISTS idx_insights_status ON insights(status);
CREATE INDEX IF NOT EXISTS idx_insights_category ON insights(category);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_commodities_category ON commodities(category_id);

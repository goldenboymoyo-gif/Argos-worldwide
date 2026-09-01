import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPool, query } from '../config/database.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const schemaSQL = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8')

async function migrate() {
  const pool = getPool()
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    await client.query(schemaSQL)
    await client.query('COMMIT')
    console.log('Database migration completed successfully')
  } catch (error) {
    await client.query('ROLLBACK')
    console.error('Migration failed:', error)
    process.exit(1)
  } finally {
    client.release()
  }
}

migrate()

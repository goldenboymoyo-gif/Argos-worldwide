import { seed } from './seed.js'
import { getPool } from '../config/database.js'

async function run() {
  try {
    await seed()
    await getPool().end()
  } catch (error) {
    console.error('Seed failed:', error)
    process.exit(1)
  }
}

run()

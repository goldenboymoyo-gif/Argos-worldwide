import { query } from '../config/database.js'

export class SanitizedPublicService {
  static async activeDeskPublic() {
    const result = await query(
      `SELECT id, commodity, origin, destination, volume, unit, status, display_order, updated_at
       FROM active_desk
       WHERE visibility = 'public'
       ORDER BY display_order ASC, created_at DESC`
    )
    return result.rows
  }

  static async marketDataPublic() {
    const result = await query(
      `SELECT instrument, symbol, price, change_value, change_percent, currency, is_live, last_update
       FROM market_data
       ORDER BY id ASC`
    )
    return result.rows
  }

  static async freightRatesPublic() {
    const result = await query(
      `SELECT route, origin, destination, commodity_relevance, rate, rate_unit, direction, is_indicative, last_updated
       FROM freight_rates
       ORDER BY id ASC`
    )
    return result.rows
  }

  static async insightsPublic() {
    const result = await query(
      `SELECT id, title, slug, category, summary, author, published_at
       FROM insights
       WHERE status = 'published'
       ORDER BY published_at DESC`
    )
    return result.rows
  }
}

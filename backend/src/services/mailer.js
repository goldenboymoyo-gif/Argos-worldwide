import nodemailer from 'nodemailer'
import { config } from '../config/index.js'

let transporter = null
let warned = false

function getTransporter() {
  if (transporter) return transporter
  const { host, port, user, pass } = config.mail

  if (!host || !user || !pass) {
    if (!warned) {
      console.warn(
        '[mailer] SMTP is not configured (set SMTP_HOST / SMTP_USER / SMTP_PASS in .env). ' +
        'Contact and mandate notifications will be logged only, not emailed.'
      )
      warned = true
    }
    return null
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
  return transporter
}

// Best-effort notification email. Never throws — a mail failure must not
// block the public contact/mandate submission response.
export async function sendNotification({ subject, text, html }) {
  const to = config.mail.notifyEmail
  const t = getTransporter()

  if (!t) {
    console.log(`[mailer] (not sent — SMTP unconfigured) To: ${to} | Subject: ${subject}`)
    return { sent: false, reason: 'smtp_not_configured' }
  }

  try {
    await t.sendMail({
      from: config.mail.from,
      to,
      subject,
      text,
      html,
    })
    return { sent: true }
  } catch (error) {
    console.error('[mailer] Failed to send notification email:', error.message)
    return { sent: false, reason: error.message }
  }
}

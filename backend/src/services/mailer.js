import nodemailer from 'nodemailer'
import { config } from '../config/index.js'

// --- Resend (HTTPS API) path ---------------------------------------------
// Render (like most PaaS hosts) blocks outbound SMTP ports to prevent
// spam abuse, so raw SMTP below will time out in production no matter
// whose SMTP server or credentials are used. Resend sends over plain
// HTTPS instead, which is not blocked. Set RESEND_API_KEY to use it —
// it takes priority over SMTP when present.
async function sendViaResend({ subject, text, html }) {
  const to = config.mail.notifyEmail
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.mail.resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: config.mail.from,
      to,
      subject,
      text,
      html,
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Resend API ${res.status}: ${body || res.statusText}`)
  }

  return res.json()
}

// --- SMTP (nodemailer) fallback path --------------------------------------
// Works for local dev. Often blocked outbound on PaaS hosts (Render,
// Heroku, Railway, etc.) — kept only as a fallback when RESEND_API_KEY
// isn't set.
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

  // Prefer Resend (HTTPS) when configured — this is the path that
  // actually works on Render. SMTP below is a local-dev-only fallback.
  if (config.mail.resendApiKey) {
    try {
      await sendViaResend({ subject, text, html })
      return { sent: true, via: 'resend' }
    } catch (error) {
      console.error('[mailer] Resend send failed:', error.message)
      return { sent: false, reason: error.message }
    }
  }

  const t = getTransporter()

  if (!t) {
    console.log(`[mailer] (not sent — no RESEND_API_KEY or SMTP configured) To: ${to} | Subject: ${subject}`)
    return { sent: false, reason: 'not_configured' }
  }

  try {
    await t.sendMail({
      from: config.mail.from,
      to,
      subject,
      text,
      html,
    })
    return { sent: true, via: 'smtp' }
  } catch (error) {
    console.error('[mailer] Failed to send notification email:', error.message)
    return { sent: false, reason: error.message }
  }
}

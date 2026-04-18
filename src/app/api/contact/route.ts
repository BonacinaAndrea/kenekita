import { NextRequest, NextResponse } from 'next/server'
import { sendContactNotification } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Support both old field names (name/message/subject) and new ones (nome/messaggio/oggetto)
    const name    = body.name    || body.nome      || ''
    const email   = body.email   || ''
    const phone   = body.phone   || ''
    const subject = body.subject || body.oggetto   || ''
    const message = body.message || body.messaggio || ''
    const gdpr1   = body.gdpr1   ?? true
    const locale  = body.locale  || 'it'

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti.' }, { status: 400 })
    }

    if (!gdpr1) {
      return NextResponse.json({ error: 'Consenso Privacy Policy obbligatorio.' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email non valida.' }, { status: 400 })
    }

    await sendContactNotification({
      name,
      email,
      phone,
      message: subject ? `[${subject}]\n\n${message}` : message,
      locale,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Errore interno. Riprova più tardi.' }, { status: 500 })
  }
}

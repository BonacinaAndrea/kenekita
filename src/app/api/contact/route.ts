import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, oggetto, messaggio, gdpr1 } = body

    if (!nome || !email || !oggetto || !messaggio || !gdpr1) {
      return NextResponse.json({ error: 'Campi mancanti' }, { status: 400 })
    }

    // TODO: collegare Supabase + Resend
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Errore server' }, { status: 500 })
  }
}

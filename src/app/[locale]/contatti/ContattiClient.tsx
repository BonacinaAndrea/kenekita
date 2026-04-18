'use client'
import { useState } from 'react'

export default function ContattiClient() {
  const [form, setForm] = useState({ nome:'', email:'', oggetto:'', messaggio:'', gdpr1:false, gdpr2:false })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.gdpr1) { setError('Devi accettare la Privacy Policy per procedere.'); return }
    setSending(true); setError('')
    try {
      const res = await fetch('/api/contact', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form),
      })
      if (res.ok) { setSent(true) }
      else { setError("Errore nell'invio. Riprova più tardi.") }
    } catch {
      setError('Errore di connessione. Riprova più tardi.')
    }
    setSending(false)
  }

  const inputStyle: React.CSSProperties = {
    width:'100%', padding:'14px 18px',
    background:'rgba(245,242,238,0.05)',
    border:'1px solid rgba(245,242,238,0.12)',
    borderRadius:6, color:'#F5F2EE',
    fontSize:14, fontFamily:'var(--font-raleway)',
    outline:'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    fontSize:11, fontWeight:600, letterSpacing:'0.15em',
    textTransform:'uppercase', color:'rgba(245,242,238,0.5)',
    fontFamily:'var(--font-raleway)', marginBottom:8, display:'block',
  }

  return (
    <main style={{ background:'#0F0F0E', minHeight:'100vh' }}>

      {/* Hero video */}
      <div style={{ position:'relative', height:'60vh', minHeight:400, overflow:'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0 }}>
          <source src="/videos/contatti.mp4" type="video/mp4" />
        </video>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(15,15,14,0.85) 100%)', zIndex:1 }} />
        <div style={{ position:'absolute', inset:0, zIndex:2, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'0 5%' }}>
          <p style={{ fontSize:11, fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'#B8965A', marginBottom:20, fontFamily:'var(--font-raleway)' }}>Kenekita</p>
          <h1 style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(36px,6vw,72px)', fontWeight:400, color:'#F5F2EE', lineHeight:1.1, marginBottom:16 }}>Contattaci</h1>
          <p style={{ fontSize:17, color:'rgba(245,242,238,0.65)', fontFamily:'var(--font-raleway)', fontWeight:300 }}>Siamo qui per rispondere a tutte le tue domande</p>
        </div>
      </div>

      {/* Contenuto */}
      <section style={{ padding:'100px 5%' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80 }}>

          {/* Info contatti */}
          <div>
            <div style={{ marginBottom:48 }}>
              <p style={{ fontSize:10, fontWeight:600, letterSpacing:'0.3em', textTransform:'uppercase', color:'#B8965A', marginBottom:12, fontFamily:'var(--font-raleway)' }}>Telefono</p>
              <a href="tel:+393791502073" style={{ display:'block', fontSize:18, color:'#F5F2EE', textDecoration:'none', fontFamily:'var(--font-raleway)', marginBottom:4 }}>+39 379 150 2073</a>
              <a href="tel:+393793061937" style={{ display:'block', fontSize:18, color:'#F5F2EE', textDecoration:'none', fontFamily:'var(--font-raleway)', marginBottom:8 }}>+39 379 306 1937</a>
              <p style={{ fontSize:13, color:'rgba(245,242,238,0.4)', fontFamily:'var(--font-raleway)' }}>Lun-Ven: 9:00 - 19:00</p>
            </div>

            <div style={{ marginBottom:48 }}>
              <p style={{ fontSize:10, fontWeight:600, letterSpacing:'0.3em', textTransform:'uppercase', color:'#B8965A', marginBottom:12, fontFamily:'var(--font-raleway)' }}>Email</p>
              <a href="mailto:sardinia.g.service@tiscali.it" style={{ display:'block', fontSize:16, color:'#F5F2EE', textDecoration:'none', fontFamily:'var(--font-raleway)', marginBottom:8 }}>sardinia.g.service@tiscali.it</a>
              <p style={{ fontSize:13, color:'rgba(245,242,238,0.4)', fontFamily:'var(--font-raleway)' }}>Risposta entro 24h</p>
            </div>

            <div style={{ marginBottom:48 }}>
              <p style={{ fontSize:10, fontWeight:600, letterSpacing:'0.3em', textTransform:'uppercase', color:'#B8965A', marginBottom:12, fontFamily:'var(--font-raleway)' }}>Indirizzo</p>
              <p style={{ fontSize:14, color:'rgba(245,242,238,0.7)', fontFamily:'var(--font-raleway)', lineHeight:1.7, marginBottom:4 }}>Sede legale: Via Gallura 10C, 07026 Olbia (SS)</p>
              <p style={{ fontSize:14, color:'rgba(245,242,238,0.7)', fontFamily:'var(--font-raleway)', lineHeight:1.7 }}>Uff./Reception: Corso Vittorio Veneto 88a, Olbia (SS)</p>
            </div>

            <div>
              <p style={{ fontSize:10, fontWeight:600, letterSpacing:'0.3em', textTransform:'uppercase', color:'#B8965A', marginBottom:12, fontFamily:'var(--font-raleway)' }}>Orari</p>
              <p style={{ fontSize:14, color:'rgba(245,242,238,0.7)', fontFamily:'var(--font-raleway)', lineHeight:1.7 }}>Lun-Ven: 9:00 - 18:00</p>
              <p style={{ fontSize:14, color:'rgba(245,242,238,0.7)', fontFamily:'var(--font-raleway)', lineHeight:1.7 }}>Sab-Dom: su appuntamento</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ background:'#141412', padding:'52px 48px', borderRadius:10 }}>
            <h2 style={{ fontFamily:'var(--font-playfair)', fontSize:32, fontWeight:400, color:'#F5F2EE', marginBottom:36, lineHeight:1.2 }}>Inviaci un Messaggio</h2>

            {sent ? (
              <div style={{ textAlign:'center', padding:'60px 0' }}>
                <div style={{ width:48, height:48, borderRadius:'50%', background:'rgba(184,150,90,0.15)', border:'1px solid #B8965A', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 24px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 style={{ fontFamily:'var(--font-playfair)', fontSize:24, fontWeight:400, color:'#F5F2EE', marginBottom:12 }}>Messaggio inviato</h3>
                <p style={{ fontSize:15, color:'rgba(245,242,238,0.55)', fontFamily:'var(--font-raleway)' }}>Ti risponderemo entro 24 ore.</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:20 }}>
                  <div>
                    <label style={labelStyle}>Nome *</label>
                    <input name="nome" value={form.nome} onChange={handle} required style={inputStyle} placeholder="Mario Rossi" />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required style={inputStyle} placeholder="mario@email.com" />
                  </div>
                </div>

                <div style={{ marginBottom:20 }}>
                  <label style={labelStyle}>Oggetto *</label>
                  <input name="oggetto" value={form.oggetto} onChange={handle} required style={inputStyle} placeholder="Come possiamo aiutarti?" />
                </div>

                <div style={{ marginBottom:28 }}>
                  <label style={labelStyle}>Messaggio *</label>
                  <textarea name="messaggio" value={form.messaggio} onChange={handle} required rows={5} style={{ ...inputStyle, resize:'vertical' }} placeholder="Scrivi il tuo messaggio..." />
                </div>

                {/* GDPR */}
                <div style={{ marginBottom:16 }}>
                  <label style={{ display:'flex', gap:12, alignItems:'flex-start', cursor:'pointer' }}>
                    <input type="checkbox" name="gdpr1" checked={form.gdpr1} onChange={handle} style={{ marginTop:3, flexShrink:0, accentColor:'#B8965A' }} />
                    <span style={{ fontSize:12, color:'rgba(245,242,238,0.5)', fontFamily:'var(--font-raleway)', lineHeight:1.6 }}>
                      Acconsento al trattamento dei miei dati e dichiaro di aver preso visione della <a href="/privacy-policy" style={{ color:'#B8965A', textDecoration:'none' }}>Privacy Policy</a> *
                    </span>
                  </label>
                </div>

                <div style={{ marginBottom:32 }}>
                  <label style={{ display:'flex', gap:12, alignItems:'flex-start', cursor:'pointer' }}>
                    <input type="checkbox" name="gdpr2" checked={form.gdpr2} onChange={handle} style={{ marginTop:3, flexShrink:0, accentColor:'#B8965A' }} />
                    <span style={{ fontSize:12, color:'rgba(245,242,238,0.5)', fontFamily:'var(--font-raleway)', lineHeight:1.6 }}>
                      Acconsento al trattamento dei miei dati personali per attività di marketing, newsletter e informazioni promozionali
                    </span>
                  </label>
                </div>

                {error && <p style={{ fontSize:13, color:'#E24B4A', marginBottom:16, fontFamily:'var(--font-raleway)' }}>{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  style={{ width:'100%', background: sending ? 'rgba(184,150,90,0.5)' : '#B8965A', color:'#0F0F0E', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', padding:'16px 32px', border:'none', borderRadius:6, cursor: sending ? 'not-allowed' : 'pointer', fontFamily:'var(--font-raleway)' }}
                >
                  {sending ? 'Invio in corso...' : 'Invia Messaggio'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  )
}

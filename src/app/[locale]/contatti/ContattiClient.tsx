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

  const inputCls = [
    'w-full px-[18px] py-[14px] rounded-[6px] text-[14px] text-[#F5F2EE] font-raleway outline-none',
    'bg-[rgba(245,242,238,0.05)] border border-[rgba(245,242,238,0.12)]',
    'focus:border-[rgba(184,150,90,0.5)] transition-colors duration-200',
  ].join(' ')

  const labelCls = 'block text-[11px] font-semibold tracking-[0.15em] uppercase text-[rgba(245,242,238,0.5)] font-raleway mb-2'

  return (
    <main className="bg-[#0F0F0E] min-h-screen">

      {/* Hero video */}
      <div className="relative overflow-hidden" style={{ height: '60vh', minHeight: 360 }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/contatti.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(15,15,14,0.85) 100%)' }} />
        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-[5%]">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#B8965A] mb-5 font-raleway">Kenekita</p>
          <h1 className="font-playfair font-normal text-[#F5F2EE] leading-[1.1] mb-4 text-[clamp(32px,6vw,72px)]">
            Contattaci
          </h1>
          <p className="text-[16px] md:text-[17px] text-[rgba(245,242,238,0.65)] font-raleway font-light">
            Siamo qui per rispondere a tutte le tue domande
          </p>
        </div>
      </div>

      {/* Content — mobile: info top, form below; md+: 2-col side by side */}
      <section className="px-[5%] py-[80px] md:py-[100px]">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-[1fr_1.4fr] md:gap-20">

          {/* Info column */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#B8965A] mb-3 font-raleway">Telefono</p>
              <a href="tel:+393791502073" className="block text-[17px] md:text-[18px] text-[#F5F2EE] no-underline font-raleway mb-1 transition-colors hover:text-[#B8965A]">
                +39 379 150 2073
              </a>
              <a href="tel:+393793061937" className="block text-[17px] md:text-[18px] text-[#F5F2EE] no-underline font-raleway mb-2 transition-colors hover:text-[#B8965A]">
                +39 379 306 1937
              </a>
              <p className="text-[13px] text-[rgba(245,242,238,0.4)] font-raleway">Lun-Ven: 9:00 - 19:00</p>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#B8965A] mb-3 font-raleway">Email</p>
              <a href="mailto:sardinia.g.service@tiscali.it" className="block text-[15px] md:text-[16px] text-[#F5F2EE] no-underline font-raleway mb-2 transition-colors hover:text-[#B8965A]">
                sardinia.g.service@tiscali.it
              </a>
              <p className="text-[13px] text-[rgba(245,242,238,0.4)] font-raleway">Risposta entro 24h</p>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#B8965A] mb-3 font-raleway">Indirizzo</p>
              <p className="text-[14px] text-[rgba(245,242,238,0.7)] font-raleway leading-[1.7] mb-1">
                Sede legale: Via Gallura 10C, 07026 Olbia (SS)
              </p>
              <p className="text-[14px] text-[rgba(245,242,238,0.7)] font-raleway leading-[1.7]">
                Uff./Reception: Corso Vittorio Veneto 88a, Olbia (SS)
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#B8965A] mb-3 font-raleway">Orari</p>
              <p className="text-[14px] text-[rgba(245,242,238,0.7)] font-raleway leading-[1.7]">Lun-Ven: 9:00 - 18:00</p>
              <p className="text-[14px] text-[rgba(245,242,238,0.7)] font-raleway leading-[1.7]">Sab-Dom: su appuntamento</p>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-[#141412] px-6 py-10 md:px-12 md:py-[52px] rounded-[10px]">
            <h2 className="font-playfair text-[28px] md:text-[32px] font-normal text-[#F5F2EE] mb-9 leading-[1.2]">
              Inviaci un Messaggio
            </h2>

            {sent ? (
              <div className="text-center py-16">
                <div className="w-12 h-12 rounded-full bg-[rgba(184,150,90,0.15)] border border-[#B8965A] flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="font-playfair text-[24px] font-normal text-[#F5F2EE] mb-3">Messaggio inviato</h3>
                <p className="text-[15px] text-[rgba(245,242,238,0.55)] font-raleway">Ti risponderemo entro 24 ore.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                {/* Nome + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Nome *</label>
                    <input name="nome" value={form.nome} onChange={handle} required className={inputCls} placeholder="Mario Rossi" />
                  </div>
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required className={inputCls} placeholder="mario@email.com" />
                  </div>
                </div>

                {/* Oggetto */}
                <div>
                  <label className={labelCls}>Oggetto *</label>
                  <input name="oggetto" value={form.oggetto} onChange={handle} required className={inputCls} placeholder="Come possiamo aiutarti?" />
                </div>

                {/* Messaggio */}
                <div>
                  <label className={labelCls}>Messaggio *</label>
                  <textarea
                    name="messaggio" value={form.messaggio} onChange={handle} required rows={5}
                    className={`${inputCls} resize-y`}
                    placeholder="Scrivi il tuo messaggio..."
                  />
                </div>

                {/* GDPR */}
                <label className="flex gap-3 items-start cursor-pointer">
                  <input
                    type="checkbox" name="gdpr1" checked={form.gdpr1} onChange={handle}
                    className="mt-[3px] flex-shrink-0 accent-[#B8965A]"
                  />
                  <span className="text-[12px] text-[rgba(245,242,238,0.5)] font-raleway leading-[1.6]">
                    Acconsento al trattamento dei miei dati e dichiaro di aver preso visione della{' '}
                    <a href="/privacy-policy" className="text-[#B8965A] no-underline">Privacy Policy</a> *
                  </span>
                </label>

                <label className="flex gap-3 items-start cursor-pointer">
                  <input
                    type="checkbox" name="gdpr2" checked={form.gdpr2} onChange={handle}
                    className="mt-[3px] flex-shrink-0 accent-[#B8965A]"
                  />
                  <span className="text-[12px] text-[rgba(245,242,238,0.5)] font-raleway leading-[1.6]">
                    Acconsento al trattamento dei miei dati personali per attività di marketing, newsletter e informazioni promozionali
                  </span>
                </label>

                {error && (
                  <p className="text-[13px] text-[#E24B4A] font-raleway">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className={[
                    'w-full text-[#0F0F0E] text-[12px] font-semibold tracking-[0.2em] uppercase py-4 border-none rounded-[6px] font-raleway transition-opacity',
                    sending ? 'bg-[rgba(184,150,90,0.5)] cursor-not-allowed' : 'bg-[#B8965A] cursor-pointer hover:opacity-90',
                  ].join(' ')}
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

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const services = [
  {
    n: '01',
    title: 'Gestione Prenotazioni',
    text: 'Ottimizziamo le tue entrate con strategie di pricing dinamico, gestione dei calendari su tutti i portali e comunicazione professionale con gli ospiti.',
    img: '/images/og/01.jpg',
  },
  {
    n: '02',
    title: 'Check-in & Check-out',
    text: 'Accogliamo personalmente ogni ospite, consegniamo le chiavi e gestiamo il check-out con ispezione finale della struttura.',
    img: '/images/og/02.jpg',
  },
  {
    n: '03',
    title: 'Pulizie & Manutenzione',
    text: 'Team di pulizie professionale dopo ogni soggiorno. Piccole riparazioni, cambio biancheria e rifornimento kit di benvenuto inclusi.',
    img: '/images/og/03.jpg',
  },
  {
    n: '04',
    title: 'Marketing & Visibilità',
    text: 'Foto professionali, testi ottimizzati SEO e presenza su Airbnb, Booking.com, VRBO e portali di lusso. Il tuo immobile al massimo della visibilità.',
    img: '/images/og/04.jpg',
  },
  {
    n: '05',
    title: 'Burocrazia & Compliance',
    text: 'Gestiamo contratti, tasse di soggiorno, comunicazioni alle autorità e conformità alle normative regionali. Zero preoccupazioni legali.',
    img: '/images/strutture/villa-i-lecci/02.jpg',
  },
  {
    n: '06',
    title: 'Rendicontazione Trasparente',
    text: 'Report mensili dettagliati con entrate, spese e occupazione. Accesso al portale proprietari in tempo reale. Nessuna sorpresa.',
    img: '/images/strutture/gardenia-luxury/02.jpg',
  },
]

const steps = [
  { n: '01', title: 'Sopralluogo Gratuito', text: 'Valutiamo il tuo immobile, il potenziale di rendita e ti proponiamo un piano personalizzato senza impegno.' },
  { n: '02', title: 'Onboarding & Setup', text: 'Fotografiamo la struttura, creiamo gli annunci, configuriamo i prezzi e attiviamo i canali di distribuzione.' },
  { n: '03', title: 'Gestione Operativa', text: 'Ci occupiamo di tutto: prenotazioni, ospiti, pulizie, manutenzione. Tu ricevi il pagamento ogni mese.' },
  { n: '04', title: 'Report & Ottimizzazione', text: 'Analizziamo le performance, ottimizziamo i prezzi stagionalmente e ti teniamo aggiornato con report chiari.' },
]

const faqs = [
  { q: 'Quanto guadagnerò con il mio immobile?', a: 'Dipende dalla posizione, dimensioni e periodo. In media i nostri proprietari vedono un aumento del 30-45% rispetto alla gestione autonoma. Ti forniremo una stima personalizzata durante il sopralluogo gratuito.' },
  { q: 'Posso usare il mio immobile quando voglio?', a: 'Assolutamente sì. Puoi bloccare le date che preferisci in qualsiasi momento tramite il portale proprietari. Il tuo immobile rimane tuo.' },
  { q: 'Quali sono i costi del servizio?', a: 'Lavoriamo a commissione sul fatturato generato: nessun costo fisso, nessun rischio. Guadagniamo solo quando guadagni tu.' },
  { q: 'Cosa succede in caso di danni?', a: 'Gestiamo le pratiche assicurative e il recupero danni dagli ospiti. Collaboriamo con le principali piattaforme per la tutela dei proprietari.' },
  { q: 'In quali zone operate?', a: 'Operiamo in tutta la Sardegna nord-orientale: Palau, Porto Rotondo, Porto Cervo, Costa Smeralda, Olbia, Stintino e dintorni.' },
]

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', immobile: '', messaggio: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire to Resend/Supabase
    setSent(true)
  }

  if (sent) return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(184,150,90,0.15)', border: '1px solid #B8965A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 24, fontWeight: 400, color: '#F5F2EE', marginBottom: 12 }}>Messaggio inviato</h3>
      <p style={{ fontSize: 14, color: 'rgba(245,242,238,0.55)', fontFamily: 'var(--font-raleway)' }}>Ti contatteremo entro 24 ore per fissare il sopralluogo gratuito.</p>
    </div>
  )

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,242,238,0.12)',
    color: '#F5F2EE', fontSize: 14, padding: '14px 16px', fontFamily: 'var(--font-raleway)',
    outline: 'none', boxSizing: 'border-box',
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <input name="nome" placeholder="Nome e Cognome *" required value={form.nome} onChange={handleChange} style={inputStyle} />
        <input name="email" type="email" placeholder="Email *" required value={form.email} onChange={handleChange} style={inputStyle} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <input name="telefono" placeholder="Telefono" value={form.telefono} onChange={handleChange} style={inputStyle} />
        <select name="immobile" value={form.immobile} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
          <option value="">Tipo di immobile</option>
          <option>Villa</option>
          <option>Appartamento</option>
          <option>Villino</option>
          <option>Altro</option>
        </select>
      </div>
      <textarea name="messaggio" placeholder="Raccontaci del tuo immobile (posizione, dimensioni, disponibilità...)" rows={4} value={form.messaggio} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
      <button type="submit" style={{ background: '#B8965A', color: '#0F0F0E', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '16px 32px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-raleway)', alignSelf: 'flex-start' }}>
        Richiedi Sopralluogo Gratuito
      </button>
      <p style={{ fontSize: 11, color: 'rgba(245,242,238,0.3)', fontFamily: 'var(--font-raleway)' }}>* Campi obbligatori. I tuoi dati sono trattati nel rispetto del GDPR.</p>
    </form>
  )
}

export default function ProprietariClient() {
  const { ref: servRef, inView: servInView } = useInView()
  const { ref: stepsRef, inView: stepsInView } = useInView()
  const { ref: statsRef, inView: statsInView } = useInView()
  const { ref: faqRef, inView: faqInView } = useInView()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main style={{ background: '#0F0F0E', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <Image src="/images/hero-proprietari.jpg" alt="Gestione immobili Sardegna" fill unoptimized style={{ objectFit: 'cover', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(5,5,4,0.92) 0%, rgba(5,5,4,0.7) 50%, rgba(5,5,4,0.3) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 5%', maxWidth: 700 }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 24, fontFamily: 'var(--font-raleway)' }}>Per i Proprietari</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.1, marginBottom: 24 }}>
            Il tuo immobile lavora<br /><em style={{ fontStyle: 'italic', color: '#E8DDD0' }}>per te</em>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(245,242,238,0.65)', lineHeight: 1.8, marginBottom: 40, fontFamily: 'var(--font-raleway)', maxWidth: 520 }}>
            Gestione completa degli affitti turistici in Sardegna. Massimizziamo i tuoi guadagni mentre tu ti godi la vita.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <a href="#contatto" style={{ background: '#B8965A', color: '#0F0F0E', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '15px 36px', textDecoration: 'none', fontFamily: 'var(--font-raleway)' }}>
              Sopralluogo Gratuito
            </a>
            <a href="#come-funziona" style={{ background: 'transparent', color: '#F5F2EE', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '15px 36px', textDecoration: 'none', border: '1px solid rgba(245,242,238,0.25)', fontFamily: 'var(--font-raleway)' }}>
              Come Funziona
            </a>
          </div>
        </div>
        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,238,0.35)' }}>Scopri</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #B8965A, transparent)' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <div ref={statsRef} style={{ background: '#1a1917', borderTop: '1px solid rgba(184,150,90,0.15)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 5%', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
          {[
            { n: '100+', l: 'Immobili Gestiti' },
            { n: '50+', l: 'Proprietari Soddisfatti' },
            { n: '+40%', l: 'Aumento Medio Rendita' },
            { n: '4.9/5', l: 'Recensioni Medie' },
          ].map((s, i) => (
            <div key={s.l} style={{
              textAlign: 'center', padding: '32px 16px',
              opacity: statsInView ? 1 : 0,
              transform: statsInView ? 'translateY(0)' : 'translateY(24px)',
              transition: `opacity 0.6s ${i * 0.1}s, transform 0.6s ${i * 0.1}s`,
            }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 44, fontWeight: 300, color: '#F5F2EE', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,242,238,0.4)', marginTop: 10, fontFamily: 'var(--font-raleway)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── COME FUNZIONA ── */}
      <section id="come-funziona" ref={stepsRef} style={{ padding: '110px 5%', background: '#0F0F0E' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 64, opacity: stepsInView ? 1 : 0, transform: stepsInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>Il Processo</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>Come funziona<br /><em style={{ fontStyle: 'italic' }}>la nostra gestione</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 3 }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{
                background: '#1a1917', padding: '36px 28px',
                borderTop: '2px solid rgba(184,150,90,0.3)',
                opacity: stepsInView ? 1 : 0,
                transform: stepsInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ${i * 0.12}s, transform 0.7s ${i * 0.12}s`,
              }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 48, fontWeight: 300, color: 'rgba(184,150,90,0.25)', lineHeight: 1, marginBottom: 20 }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 18, fontWeight: 400, color: '#F5F2EE', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(245,242,238,0.5)', lineHeight: 1.75, fontFamily: 'var(--font-raleway)' }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIZI ── */}
      <section ref={servRef} style={{ padding: '110px 5%', background: '#0a0d0c' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 64, opacity: servInView ? 1 : 0, transform: servInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>Cosa Includiamo</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>Gestione completa,<br /><em style={{ fontStyle: 'italic' }}>zero preoccupazioni</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
            {services.map((s, i) => (
              <div key={s.n} style={{
                background: '#141412', overflow: 'hidden',
                opacity: servInView ? 1 : 0,
                transform: servInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ${i * 0.1}s, transform 0.7s ${i * 0.1}s`,
              }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image src={s.img} alt={s.title} fill unoptimized style={{ objectFit: 'cover', transition: 'transform 0.6s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)', zIndex: 1 }} />
                  <span style={{ position: 'absolute', top: 14, left: 14, zIndex: 2, fontFamily: 'var(--font-playfair)', fontSize: 28, fontWeight: 300, color: 'rgba(184,150,90,0.6)' }}>{s.n}</span>
                </div>
                <div style={{ padding: '22px 24px 28px' }}>
                  <div style={{ width: 24, height: 1, background: '#B8965A', marginBottom: 14 }} />
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 18, fontWeight: 400, color: '#F5F2EE', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(245,242,238,0.5)', lineHeight: 1.75, fontFamily: 'var(--font-raleway)' }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section style={{ padding: '100px 5%', background: '#111009' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: 40, height: 1, background: '#B8965A', margin: '0 auto 40px' }} />
          <blockquote style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(18px,2.5vw,26px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(245,242,238,0.85)', lineHeight: 1.7, marginBottom: 36 }}>
            &ldquo;Affidare la mia villa a Kenekita è stata la scelta migliore. Le mie entrate sono aumentate del 40% rispetto all&apos;anno scorso e non devo preoccuparmi di nulla. Il team è professionale, puntuale e sempre disponibile.&rdquo;
          </blockquote>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 4, fontFamily: 'var(--font-raleway)' }}>Giovanni Rossi</div>
          <div style={{ fontSize: 12, color: 'rgba(245,242,238,0.35)', fontFamily: 'var(--font-raleway)' }}>Proprietario — Villa a Porto Rotondo</div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section ref={faqRef} style={{ padding: '100px 5%', background: '#0F0F0E' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ marginBottom: 56, opacity: faqInView ? 1 : 0, transform: faqInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>Domande Frequenti</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(26px,3vw,42px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>Tutto quello che<br /><em style={{ fontStyle: 'italic' }}>vuoi sapere</em></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{
                background: '#1a1917',
                opacity: faqInView ? 1 : 0,
                transform: faqInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${i * 0.08}s, transform 0.6s ${i * 0.08}s`,
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', background: 'none', border: 'none', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                >
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: 16, fontWeight: 400, color: '#F5F2EE', lineHeight: 1.4 }}>{f.q}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 28px 22px' }}>
                    <p style={{ fontSize: 14, color: 'rgba(245,242,238,0.55)', lineHeight: 1.8, fontFamily: 'var(--font-raleway)' }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contatto" style={{ padding: '110px 5%', background: '#111009' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left */}
          <div style={{ position: 'sticky', top: 100 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 20, fontFamily: 'var(--font-raleway)' }}>Inizia Oggi</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2, marginBottom: 24 }}>
              Richiedi il tuo<br /><em style={{ fontStyle: 'italic' }}>sopralluogo gratuito</em>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(245,242,238,0.55)', lineHeight: 1.8, fontFamily: 'var(--font-raleway)', marginBottom: 36 }}>
              Valutiamo il tuo immobile, stimiamo il potenziale di rendita e ti proponiamo un piano su misura. Senza impegno, senza costi.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Sopralluogo gratuito entro 48h',
                'Stima personalizzata della rendita',
                'Nessun costo fisso — solo commissione',
                'Contratto flessibile senza vincoli',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span style={{ fontSize: 14, color: 'rgba(245,242,238,0.7)', fontFamily: 'var(--font-raleway)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right — Form */}
          <div style={{ background: '#1a1917', padding: '44px 40px', borderTop: '2px solid #B8965A' }}>
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  )
}

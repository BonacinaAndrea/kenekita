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

const values = [
  {
    n: '01',
    title: 'Autenticità',
    text: 'Crediamo nell\'ospitalità genuina. Ogni immobile che gestiamo racconta una storia sarda autentica, lontana dall\'omologazione dei grandi portali.',
  },
  {
    n: '02',
    title: 'Eccellenza',
    text: 'Standard elevati in ogni dettaglio: dalla pulizia alla comunicazione, dalla fotografia alla gestione delle emergenze. Non accettiamo compromessi.',
  },
  {
    n: '03',
    title: 'Trasparenza',
    text: 'Rapporto chiaro e onesto con ogni proprietario. Report mensili dettagliati, nessun costo nascosto, comunicazione diretta sempre.',
  },
  {
    n: '04',
    title: 'Cura',
    text: 'Trattiamo ogni immobile come se fosse il nostro. Ogni ospite come se fosse un amico. Questa è la filosofia che ci distingue dal 2015.',
  },
]

const team = [
  {
    name: 'Andrea Bonacina',
    role: 'Founder & CEO',
    bio: 'Appassionato di Sardegna e ospitalità, Andrea ha fondato Kenekita con la visione di portare un servizio di property management di livello internazionale nell\'isola.',
    img: '/images/og/01.jpg',
  },
  {
    name: 'Il Team Operativo',
    role: 'Gestione & Ospitalità',
    bio: 'Un team di professionisti locali dedicati al check-in, alle pulizie e alla manutenzione. Conoscono ogni angolo della Sardegna e ogni esigenza degli ospiti.',
    img: '/images/og/02.jpg',
  },
  {
    name: 'Marketing & Digitale',
    role: 'Visibilità & Revenue',
    bio: 'Specialisti in fotografia professionale, copywriting, SEO e revenue management. Massimizziamo la visibilità e i guadagni di ogni struttura.',
    img: '/images/og/03.jpg',
  },
]

const milestones = [
  { year: '2015', title: 'La Fondazione', text: 'Kenekita nasce a Palau con il primo immobile gestito. Una villa, un sogno, una missione.' },
  { year: '2017', title: 'Espansione Costa Smeralda', text: 'Arriviamo a Porto Rotondo e Porto Cervo. Il portfolio cresce a 15 immobili.' },
  { year: '2019', title: 'Piattaforma Digitale', text: 'Lanciamo il portale proprietari e integriamo i principali canali di distribuzione internazionali.' },
  { year: '2022', title: 'Stintino & Olbia', text: 'Espandiamo le operazioni in tutta la Sardegna nord-occidentale e orientale.' },
  { year: '2024', title: 'Oggi', text: 'Oltre 100 immobili gestiti, 50+ proprietari soddisfatti, 4.9/5 di media recensioni.' },
]

export default function ChiSiamoClient() {
  const { ref: valRef, inView: valInView } = useInView()
  const { ref: teamRef, inView: teamInView } = useInView()
  const { ref: milRef, inView: milInView } = useInView()
  const { ref: ctaRef, inView: ctaInView } = useInView()

  return (
    <main style={{ background: '#0F0F0E', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '80vh', minHeight: 560, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <Image src="/images/hero-chi-siamo.jpg" alt="Kenekita team Sardegna" fill unoptimized style={{ objectFit: 'cover', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(10,9,8,0.92) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 5% 80px', maxWidth: 800 }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 20, fontFamily: 'var(--font-raleway)' }}>La Nostra Storia</p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.1, marginBottom: 24 }}>
            Nati in Sardegna,<br /><em style={{ fontStyle: 'italic', color: '#E8DDD0' }}>cresciuti con passione</em>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(245,242,238,0.65)', lineHeight: 1.8, fontFamily: 'var(--font-raleway)', maxWidth: 560 }}>
            Dal 2015 gestiamo ville e appartamenti in Sardegna con un approccio che mette al centro le persone: proprietari, ospiti e territorio.
          </p>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section style={{ padding: '110px 5%', background: '#0a0908' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ width: 32, height: 1, background: '#B8965A', marginBottom: 32 }} />
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2, marginBottom: 28 }}>
              Non siamo solo<br /><em style={{ fontStyle: 'italic' }}>un servizio di gestione</em>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(245,242,238,0.65)', lineHeight: 1.85, fontFamily: 'var(--font-raleway)', fontWeight: 300, marginBottom: 20 }}>
              Siamo custodi di esperienze. Ogni immobile che gestiamo è una storia da raccontare, un luogo da preservare, un&apos;opportunità da valorizzare.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(245,242,238,0.55)', lineHeight: 1.85, fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
              La Sardegna non è solo una destinazione turistica: è un&apos;identità, un profumo, una luce. Il nostro lavoro è fare in modo che ogni ospite la senta davvero, e che ogni proprietario possa condividerla con orgoglio.
            </p>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden' }}>
            <Image src="/images/strutture/villa-i-lecci/hero.jpg" alt="Villa in Sardegna" fill unoptimized style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(184,150,90,0.12) 0%, transparent 60%)' }} />
          </div>
        </div>
      </section>

      {/* ── VALORI ── */}
      <section ref={valRef} style={{ padding: '110px 5%', background: '#0F0F0E' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 64, opacity: valInView ? 1 : 0, transform: valInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>I Nostri Valori</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>
              Ciò che ci guida<br /><em style={{ fontStyle: 'italic' }}>ogni giorno</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 3 }}>
            {values.map((v, i) => (
              <div key={v.n} style={{
                background: '#1a1917', padding: '36px 28px',
                borderTop: '2px solid rgba(184,150,90,0.25)',
                opacity: valInView ? 1 : 0,
                transform: valInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ${i * 0.12}s, transform 0.7s ${i * 0.12}s`,
              }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 52, fontWeight: 300, color: 'rgba(184,150,90,0.2)', lineHeight: 1, marginBottom: 20 }}>{v.n}</div>
                <div style={{ width: 20, height: 1, background: '#B8965A', marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, fontWeight: 400, color: '#F5F2EE', marginBottom: 12, lineHeight: 1.3 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(245,242,238,0.5)', lineHeight: 1.75, fontFamily: 'var(--font-raleway)' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section ref={milRef} style={{ padding: '110px 5%', background: '#0a0d0c' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ marginBottom: 64, opacity: milInView ? 1 : 0, transform: milInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>La Nostra Storia</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>
              Dieci anni di<br /><em style={{ fontStyle: 'italic' }}>crescita in Sardegna</em>
            </h2>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 80, top: 0, bottom: 0, width: 1, background: 'rgba(184,150,90,0.2)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {milestones.map((m, i) => (
                <div key={m.year} style={{
                  display: 'grid', gridTemplateColumns: '160px 1fr', gap: 40,
                  padding: '32px 0',
                  borderBottom: i < milestones.length - 1 ? '1px solid rgba(245,242,238,0.05)' : 'none',
                  opacity: milInView ? 1 : 0,
                  transform: milInView ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `opacity 0.6s ${i * 0.1}s, transform 0.6s ${i * 0.1}s`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, paddingTop: 4 }}>
                    <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, fontWeight: 300, color: '#B8965A', lineHeight: 1, flexShrink: 0 }}>{m.year}</div>
                    {/* Dot on line */}
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#B8965A', marginTop: 8, flexShrink: 0, position: 'relative', left: 4 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 18, fontWeight: 400, color: '#F5F2EE', marginBottom: 8, lineHeight: 1.3 }}>{m.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(245,242,238,0.5)', lineHeight: 1.75, fontFamily: 'var(--font-raleway)' }}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section ref={teamRef} style={{ padding: '110px 5%', background: '#0F0F0E' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 64, opacity: teamInView ? 1 : 0, transform: teamInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>Le Persone</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>
              Il team che rende<br /><em style={{ fontStyle: 'italic' }}>tutto possibile</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
            {team.map((t, i) => (
              <div key={t.name} style={{
                background: '#1a1917', overflow: 'hidden',
                opacity: teamInView ? 1 : 0,
                transform: teamInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ${i * 0.12}s, transform 0.7s ${i * 0.12}s`,
              }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image src={t.img} alt={t.name} fill unoptimized style={{ objectFit: 'cover', transition: 'transform 0.6s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', zIndex: 1 }} />
                </div>
                <div style={{ padding: '24px 26px 30px' }}>
                  <div style={{ width: 20, height: 1, background: '#B8965A', marginBottom: 14 }} />
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 20, fontWeight: 400, color: '#F5F2EE', marginBottom: 4, lineHeight: 1.2 }}>{t.name}</h3>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 14, fontFamily: 'var(--font-raleway)' }}>{t.role}</p>
                  <p style={{ fontSize: 13, color: 'rgba(245,242,238,0.5)', lineHeight: 1.75, fontFamily: 'var(--font-raleway)' }}>{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} style={{ padding: '110px 5%', background: '#111009', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ width: 40, height: 1, background: '#B8965A', margin: '0 auto 40px' }} />
          <h2 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 400,
            color: '#F5F2EE', lineHeight: 1.2, marginBottom: 20,
            opacity: ctaInView ? 1 : 0, transform: ctaInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s, transform 0.7s',
          }}>
            Lavoriamo insieme<br /><em style={{ fontStyle: 'italic', color: '#E8DDD0' }}>per la tua Sardegna</em>
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(245,242,238,0.55)', lineHeight: 1.8, fontFamily: 'var(--font-raleway)',
            fontWeight: 300, marginBottom: 44,
            opacity: ctaInView ? 1 : 0, transform: ctaInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
          }}>
            Che tu sia un ospite in cerca della vacanza perfetta o un proprietario che vuole valorizzare il suo immobile, siamo qui per te.
          </p>
          <div style={{
            display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap',
            opacity: ctaInView ? 1 : 0, transform: ctaInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
          }}>
            <Link href="/strutture" style={{ background: '#B8965A', color: '#0F0F0E', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '15px 36px', textDecoration: 'none', fontFamily: 'var(--font-raleway)' }}>
              Esplora gli Immobili
            </Link>
            <Link href="/proprietari" style={{ background: 'transparent', color: '#F5F2EE', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '15px 36px', textDecoration: 'none', border: '1px solid rgba(245,242,238,0.25)', fontFamily: 'var(--font-raleway)' }}>
              Sei un Proprietario?
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

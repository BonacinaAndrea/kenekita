'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'

const servizi = [
  { title:'Gestione prenotazioni e promozione', text:'Gestiamo la visibilità sui principali portali OTA con strategie avanzate di posizionamento e marketing digitale per massimizzare le prenotazioni.' },
  { title:'Adeguamento costante dei prezzi', text:'Monitoriamo e adeguiamo costantemente i prezzi del mercato turistico con tecniche di Revenue Management, garantendoti il miglior rendimento possibile.' },
  { title:'Accoglienza e assistenza ospiti', text:'Check-in e check-out fluido e cordiale, con assistenza professionale H24 per garantire un\'esperienza positiva e recensioni eccellenti.' },
  { title:'Burocrazia e registrazione ospiti', text:'Gestiamo tutti gli adempimenti normativi delle locazioni brevi, inclusa la registrazione online. Zero pensieri per te.' },
  { title:'Riassetto igienico-sanitario', text:'Pulizie professionali certificate da società specializzate e servizio completo di cambio biancheria per garantire standard elevati di igiene.' },
  { title:'Gestione fiscalità e contabilità', text:'Ci occupiamo di tutta la parte contabile e fiscale: calcolo, dichiarazione e versamento imposte. Tu non devi preoccuparti di nulla.' },
  { title:'Contratti su misura', text:'Elaboriamo contratti personalizzati in base alle tue necessità, garantendo termini sempre allineati con i tuoi interessi.' },
  { title:'Foto professionali', text:'Servizio fotografico professionale che cattura la bellezza e l\'unicità della tua proprietà per attrarre più ospiti.' },
  { title:'Homestage della locazione', text:'Consulenza di interior design per valorizzare l\'aspetto estetico della tua proprietà e renderla più attraente per gli ospiti.' },
  { title:'Manutenzione ordinaria e straordinaria', text:'Rete di professionisti qualificati pronti a intervenire rapidamente per qualsiasi esigenza.' },
]

const steps = [
  { n:'1', title:'Registrati nel portale', text:'Avviare la collaborazione con noi è semplice e diretto. Inizia compilando il form di contatto sul nostro sito.', img:'/images/proprietari/step-01.jpg' },
  { n:'2', title:'Proponi il tuo immobile', text:'Fornisci alcuni dettagli essenziali sulla tua proprietà e il nostro team valuterà come possiamo collaborare al meglio.', img:'/images/proprietari/step-02.jpg' },
  { n:'3', title:'Stimiamo la redditività', text:'Utilizziamo dati di mercato aggiornati e strategie di Revenue Management per stimare accuratamente la redditività del tuo immobile.', img:'/images/proprietari/step-03.jpg' },
  { n:'4', title:'Inizia a guadagnare', text:'Una volta stabilita la strategia migliore, è il momento di iniziare a guadagnare con una gestione professionale ed efficiente.', img:'/images/proprietari/step-04.jpg' },
]

const perche = [
  { title:'Guadagna di Più', text:'Aumenta le tue entrate fino al 40% con la nostra strategia di pricing dinamico e marketing professionale.', img:'/images/proprietari/guadagna.jpg' },
  { title:'Risparmia Tempo', text:'Ci occupiamo di tutto noi: gestione prenotazioni, pulizie, check-in/out e manutenzione.', img:'/images/proprietari/tempo.jpg' },
  { title:'Zero Pensieri', text:'Gestione completa degli aspetti burocratici, assicurazioni e conformità alle normative.', img:'/images/proprietari/pensieri.jpg' },
  { title:'Ospiti Verificati', text:'Selezioniamo con cura ogni ospite per proteggere il tuo immobile.', img:'/images/proprietari/ospiti.jpg' },
]

function MagneticCard({ p, index }: { p: typeof perche[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [entered, setEntered] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [mag, setMag] = useState({ x: 0, y: 0 })
  const animRef = useRef<number>(0)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        setTimeout(() => setEntered(true), 1200 + index * 150)
      }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [index])

  const loop = useCallback(() => {
    current.current.x += (target.current.x - current.current.x) * 0.08
    current.current.y += (target.current.y - current.current.y) * 0.08
    setMag({ x: current.current.x, y: current.current.y })
    animRef.current = requestAnimationFrame(loop)
  }, [])

  const handleMouseEnter = () => {
    if (!entered) return
    setHovered(true)
    cancelAnimationFrame(animRef.current)
    animRef.current = requestAnimationFrame(loop)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!entered) return
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    target.current.x = (e.clientX - cx) / rect.width * 20
    target.current.y = (e.clientY - cy) / rect.height * 20
  }

  const handleMouseLeave = () => {
    setHovered(false)
    target.current = { x: 0, y: 0 }
    setTimeout(() => {
      cancelAnimationFrame(animRef.current)
      setMag({ x: 0, y: 0 })
    }, 500)
  }

  const entryTransform = !inView
    ? `translateY(60px) rotate(${index % 2 === 0 ? '-4deg' : '4deg'})`
    : 'translateY(0) rotate(0deg)'

  const magnetTransform = `translateX(${mag.x}px) translateY(${mag.y}px) scale(${hovered ? 1.03 : 1})`

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        height: 380,
        overflow: 'hidden',
        borderRadius: 12,
        cursor: 'default',
        opacity: inView ? 1 : 0,
        transform: entered ? magnetTransform : entryTransform,
        transition: entered
          ? 'transform 0.06s linear, opacity 0.3s'
          : `opacity 1s ${index * 0.15}s ease, transform 1s ${index * 0.15}s cubic-bezier(0.34,1.2,0.64,1)`,
        willChange: 'transform',
      }}
    >
      <Image
        src={p.img}
        alt={p.title}
        fill
        unoptimized
        style={{
          objectFit: 'cover',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          filter: hovered ? 'brightness(0.35)' : 'brightness(0.6)',
          transition: 'transform 0.6s ease, filter 0.4s ease',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(5,5,4,0.98) 0%, rgba(5,5,4,0.7) 100%)'
          : 'linear-gradient(to top, rgba(5,5,4,0.92) 0%, rgba(5,5,4,0.3) 60%, rgba(5,5,4,0.1) 100%)',
        transition: 'background 0.4s ease',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '32px 36px',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'transform 0.4s ease',
      }}>
        <div style={{ width: 24, height: 1, background: '#B8965A', marginBottom: 14 }} />
        <h3 style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 26,
          fontWeight: 400,
          color: '#F5F2EE',
          marginBottom: 12,
          lineHeight: 1.2,
        }}>{p.title}</h3>
        <p style={{
          fontSize: 14,
          color: hovered ? 'rgba(245,242,238,0.85)' : 'rgba(245,242,238,0.55)',
          lineHeight: 1.75,
          fontFamily: 'var(--font-raleway)',
          fontWeight: 300,
          transition: 'color 0.3s ease',
        }}>{p.text}</p>
      </div>
    </div>
  )
}

function ExpandableServiceCard({ s, index, inView }: { s: { title: string, text: string }, index: number, inView: boolean }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        position: 'relative',
        padding: expanded ? '48px 52px' : '32px 36px',
        background: expanded ? '#1f1d1a' : '#141412',
        borderLeft: `2px solid ${expanded ? '#B8965A' : 'rgba(184,150,90,0.25)'}`,
        cursor: 'default',
        opacity: inView ? 1 : 0,
        transform: inView ? expanded ? 'scale(1.02)' : 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.4s cubic-bezier(0.34,1.2,0.64,1)',
        zIndex: expanded ? 10 : 1,
        boxShadow: expanded ? '0 0 60px rgba(184,150,90,0.12), 0 20px 60px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div style={{ position:'absolute', top:12, right:20, fontFamily:'var(--font-playfair)', fontSize:80, fontWeight:400, color: expanded ? 'rgba(184,150,90,0.12)' : 'rgba(245,242,238,0.04)', lineHeight:1, transition:'color 0.4s', userSelect:'none' }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      {expanded && <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(to right, #B8965A, transparent)' }} />}
      <h3 style={{ fontFamily:'var(--font-playfair)', fontSize: expanded ? 22 : 17, fontWeight:400, color: expanded ? '#F5F2EE' : 'rgba(245,242,238,0.8)', marginBottom: expanded ? 16 : 10, lineHeight:1.3, transition:'all 0.4s', textShadow: expanded ? '0 0 40px rgba(184,150,90,0.4)' : 'none', position:'relative', zIndex:1 }}>{s.title}</h3>
      <p style={{ fontSize: expanded ? 15 : 13, color: expanded ? 'rgba(245,242,238,0.8)' : 'rgba(245,242,238,0.4)', lineHeight:1.75, fontFamily:'var(--font-raleway)', fontWeight:300, transition:'all 0.4s', position:'relative', zIndex:1 }}>{s.text}</p>
    </div>
  )
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

export default function ProprietariPage() {
  const { ref: heroRef, inView: heroInView } = useInView()
  const { ref: serviziRef, inView: serviziInView } = useInView(0.1)
  const { ref: stepsRef, inView: stepsInView } = useInView(0.1)

  return (
    <main style={{ background: '#0F0F0E', minHeight: '100vh', paddingTop: 100 }}>

      {/* Intro — foto sx, testo dx */}
      <section ref={heroRef} style={{ padding: '80px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{
            position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 10,
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 1s, transform 1s',
          }}>
            <Image src="/images/proprietari/hero.jpg" alt="Proprietari Kenekita" fill unoptimized style={{ objectFit: 'cover' }} />
          </div>
          <div style={{
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? 'translateX(0)' : 'translateX(60px)',
            transition: 'opacity 1s 0.2s, transform 1s 0.2s',
          }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 20, fontFamily: 'var(--font-raleway)' }}>Per i Proprietari</p>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px,4vw,56px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.15, marginBottom: 28 }}>
              Affida la Tua Casa<br /><em style={{ fontStyle: 'italic', color: '#E8DDD0' }}>alle Mani Giuste</em>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(245,242,238,0.6)', lineHeight: 1.9, fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
              Trasforma la tua proprietà in una fonte di reddito sicura e costante. Noi ci occupiamo di tutto, tu ti godi i guadagni.
            </p>
          </div>
        </div>
      </section>

      {/* Perché Kenekita — 4 card magnetiche */}
      <section style={{ padding: '80px 5%', background: '#0a0908' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>Perché Scegliere Kenekita</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>I vantaggi di lavorare con noi</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {perche.map((p, i) => <MagneticCard key={p.title} p={p} index={i} />)}
        </div>
      </section>

      {/* Servizi */}
      <section ref={serviziRef} style={{ padding: '100px 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: 60, opacity: serviziInView ? 1 : 0, transform: serviziInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>I Nostri Servizi</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2, marginBottom: 16 }}>Gestione completa della tua proprietà</h2>
          <p style={{ fontSize: 16, color: 'rgba(245,242,238,0.5)', fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>Affida a noi la gestione e goditi i guadagni senza pensieri</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:2 }}>
          {servizi.map((s, i) => (
            <ExpandableServiceCard key={s.title} s={s} index={i} inView={serviziInView} />
          ))}
        </div>
      </section>

      {/* Come funziona */}
      <section ref={stepsRef} style={{ padding: '100px 5%', background: '#0a0908' }}>
        <div style={{ textAlign: 'center', marginBottom: 60, opacity: stepsInView ? 1 : 0, transform: stepsInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>Come Funziona</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>Collabora con noi alla valorizzazione<br />della tua proprietà</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {steps.map((s, i) => {
            const fromRight = i % 2 === 0
            return (
              <div key={s.n} style={{
                background: '#141412', padding: '40px 32px',
                opacity: stepsInView ? 1 : 0,
                transform: stepsInView ? 'translateX(0)' : `translateX(${fromRight ? '80px' : '-80px'})`,
                transition: `opacity 1.4s ${i * 0.25}s, transform 1.4s ${i * 0.25}s cubic-bezier(0.34,1.2,0.64,1)`,
              }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: 6, marginBottom: 24 }}>
                  <Image src={`/images/proprietari/step-0${i + 1}.jpg`} alt={s.title} fill unoptimized style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)', zIndex: 1 }} />
                  <div style={{ position: 'absolute', bottom: 12, left: 16, zIndex: 2, fontFamily: 'var(--font-playfair)', fontSize: 40, fontWeight: 400, color: 'rgba(184,150,90,0.6)', lineHeight: 1 }}>{s.n}</div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 18, fontWeight: 400, color: '#F5F2EE', marginBottom: 14, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(245,242,238,0.55)', lineHeight: 1.75, fontFamily: 'var(--font-raleway)' }}>{s.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 5%', textAlign: 'center' }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>Inizia Subito</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2, marginBottom: 16 }}>Compila il form e ti ricontatteremo<br />entro 24 ore</h2>
          <p style={{ fontSize: 16, color: 'rgba(245,242,238,0.5)', fontFamily: 'var(--font-raleway)', fontWeight: 300, marginBottom: 40 }}>Consulenza gratuita e senza impegno</p>
          <Link href="/contatti" style={{ background: '#B8965A', color: '#0F0F0E', fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none', display: 'inline-block', fontFamily: 'var(--font-raleway)' }}>
            Richiedi Consulenza Gratuita
          </Link>
        </div>
      </section>

    </main>
  )
}

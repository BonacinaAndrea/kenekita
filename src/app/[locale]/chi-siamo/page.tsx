'use client'
import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'

const valori = [
  { title:'Autenticità', text:'Vivere la Sardegna autentica è il cuore della nostra offerta. Selezioniamo alloggi che riflettono il vero spirito dell\'isola, offrendoti un\'immersione profonda nella sua cultura, tradizioni e paesaggi mozzafiato.', img:'/images/chi-siamo/autenticita.jpg', from:'left' },
  { title:'Comfort', text:'I tuoi comfort e la tua soddisfazione sono la nostra priorità. Gli alloggi che proponiamo sono curati nei minimi dettagli, garantendo standard elevati di qualità e convenienza.', img:'/images/chi-siamo/comfort.jpg', from:'right' },
  { title:'Supporto', text:'La nostra assistenza clienti è sempre pronta e disponibile. Dalla pianificazione del tuo viaggio alla fine del tuo soggiorno, siamo qui per aiutarti in ogni momento.', img:'/images/chi-siamo/supporto.jpg', from:'left' },
  { title:'Esclusività', text:'Offriamo esperienze che non troverai altrove. Dai tour guidati in luoghi nascosti dell\'isola a esperienze culinarie locali, ci impegniamo a fornire attività esclusive e indimenticabili.', img:'/images/chi-siamo/esclusivita.jpg', from:'right' },
  { title:'Pulizia', text:'La tua sicurezza è fondamentale. Seguiamo rigorosi standard di pulizia e manutenzione per garantire che ogni alloggio sia non solo confortevole, ma anche sicuro e igienico.', img:'/images/chi-siamo/pulizia.jpg', from:'left' },
  { title:'Personalizzazione', text:'Ogni viaggio è unico, proprio come i nostri clienti. Offriamo servizi personalizzati per adattarci perfettamente alle tue esigenze e preferenze.', img:'/images/chi-siamo/personalizzazione.jpg', from:'right' },
]

function ValoreCard({ v, index }: { v: typeof valori[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [entered, setEntered] = useState(false)
  const [magX, setMagX] = useState(0)
  const [magY, setMagY] = useState(0)
  const animRef = useRef<number>(0)
  const targetX = useRef(0)
  const targetY = useRef(0)
  const currentX = useRef(0)
  const currentY = useRef(0)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        setTimeout(() => setEntered(true), 1400 + index * 150)
      }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [index])

  const loop = useCallback(() => {
    currentX.current += (targetX.current - currentX.current) * 0.08
    currentY.current += (targetY.current - currentY.current) * 0.08
    setMagX(currentX.current)
    setMagY(currentY.current)
    animRef.current = requestAnimationFrame(loop)
  }, [])

  const handleMouseEnter = () => {
    if (!entered) return
    cancelAnimationFrame(animRef.current)
    animRef.current = requestAnimationFrame(loop)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!entered) return
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    targetX.current = (e.clientX - cx) / rect.width * 22
    targetY.current = (e.clientY - cy) / rect.height * 22
  }

  const handleMouseLeave = () => {
    targetX.current = 0
    targetY.current = 0
    setTimeout(() => {
      cancelAnimationFrame(animRef.current)
      setMagX(0)
      setMagY(0)
    }, 500)
  }

  const fromLeft = v.from === 'left'

  const entryTransform = !inView
    ? `translateX(${fromLeft ? '-100px' : '100px'}) rotate(${fromLeft ? '-5deg' : '5deg'})`
    : 'translateX(0) rotate(0deg)'

  const magnetTransform = entered
    ? `translateX(${magX}px) translateY(${magY}px)`
    : 'translateX(0) translateY(0)'

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        height: 440,
        overflow: 'hidden',
        borderRadius: 10,
        cursor: 'default',
        opacity: inView ? 1 : 0,
        transform: entered ? magnetTransform : entryTransform,
        transition: entered
          ? 'transform 0.05s linear'
          : `opacity 1.2s ${index * 0.15}s ease, transform 1.2s ${index * 0.15}s cubic-bezier(0.34,1.2,0.64,1)`,
        willChange: 'transform',
      }}
    >
      <Image src={v.img} alt={v.title} fill unoptimized style={{ objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,4,0.96) 0%, rgba(5,5,4,0.45) 55%, rgba(5,5,4,0.1) 100%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, padding: '28px 32px' }}>
        <div style={{ width: 24, height: 1, background: '#B8965A', marginBottom: 12 }} />
        <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 26, fontWeight: 400, color: '#F5F2EE', marginBottom: 10, lineHeight: 1.2 }}>{v.title}</h3>
        <p style={{ fontSize: 13, color: 'rgba(245,242,238,0.65)', lineHeight: 1.75, fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>{v.text}</p>
      </div>
    </div>
  )
}

export default function ChiSiamoPage() {
  const storyRef = useRef<HTMLDivElement>(null)
  const [storyInView, setStoryInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStoryInView(true) }, { threshold: 0.2 })
    if (storyRef.current) obs.observe(storyRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <main style={{ background: '#0F0F0E', minHeight: '100vh', paddingTop: 100 }}>

      {/* Storia — foto sx, testo dx */}
      <section ref={storyRef} style={{ padding: '80px 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', maxWidth: 1300, margin: '0 auto' }}>
          <div style={{
            position: 'relative',
            aspectRatio: '4/5',
            overflow: 'hidden',
            borderRadius: 10,
            opacity: storyInView ? 1 : 0,
            transform: storyInView ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 1s, transform 1s',
          }}>
            <Image src="/images/chi-siamo/team.jpg" alt="Il Team Kenekita" fill unoptimized style={{ objectFit: 'cover' }} />
          </div>
          <div style={{
            opacity: storyInView ? 1 : 0,
            transform: storyInView ? 'translateX(0)' : 'translateX(60px)',
            transition: 'opacity 1s 0.2s, transform 1s 0.2s',
          }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 20, fontFamily: 'var(--font-raleway)' }}>La Nostra Storia</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px,4vw,56px)', fontWeight: 400, color: '#F5F2EE', marginBottom: 32, lineHeight: 1.15 }}>Nata nel 2019</h2>
            <p style={{ fontSize: 17, color: 'rgba(245,242,238,0.6)', lineHeight: 1.9, marginBottom: 24, fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
              Nata nel 2019, la nostra azienda trae origine dall'esperienza decennale dei suoi fondatori nel campo della gestione immobiliare. Siamo specializzati nella gestione di proprietà immobiliari di terzi, concentrando il nostro expertise sulle locazioni turistiche brevi.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(245,242,238,0.6)', lineHeight: 1.9, fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
              Dalle affascinanti ville con vista sul mare cristallino, agli accoglienti appartamenti nel cuore delle storiche cittadine sarde, offriamo una gamma di opzioni per adattarsi ad ogni esigenza e desiderio.
            </p>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section style={{ padding: '60px 5% 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, fontFamily: 'var(--font-raleway)' }}>Perché prenotare con noi</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>
            Ogni dettaglio è pensato per offrirti<br />un'esperienza unica e indimenticabile
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1300, margin: '0 auto' }}>
          {valori.map((v, i) => <ValoreCard key={v.title} v={v} index={i} />)}
        </div>
      </section>

      {/* Missione */}
      <section style={{ padding: '100px 5%', background: '#0a0908', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 20, fontFamily: 'var(--font-raleway)' }}>La nostra Missione</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px,4vw,52px)', fontWeight: 400, color: '#F5F2EE', marginBottom: 32, lineHeight: 1.2 }}>
            Rendere ogni soggiorno in Sardegna<br /><em style={{ fontStyle: 'italic', color: '#E8DDD0' }}>un'esperienza eccezionale</em>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(245,242,238,0.6)', lineHeight: 1.9, marginBottom: 24, fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
            In KeneKita, la nostra missione è semplice ma fondamentale: rendere ogni soggiorno in Sardegna un'esperienza eccezionale e indimenticabile.
          </p>
          <p style={{ fontSize: 17, color: 'rgba(245,242,238,0.6)', lineHeight: 1.9, fontFamily: 'var(--font-raleway)', fontWeight: 300 }}>
            Crediamo fermamente nel potere di un viaggio di trasformare non solo il modo in cui vediamo il mondo, ma anche come viviamo la nostra vita.
          </p>
        </div>
      </section>

    </main>
  )
}

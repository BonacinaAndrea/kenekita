'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

const ospiti = [
  { title:'Accoglienza Premium', text:'Ti accogliamo personalmente e ti accompagniamo alla scoperta della tua casa vacanza e dei dintorni.', img:'/images/servizi/01.jpg' },
  { title:'Pulizie Impeccabili', text:'Ogni immobile è preparato con cura maniacale per garantirti il massimo comfort e igiene.', img:'/images/servizi/02.jpg' },
  { title:'Assistenza 24/7', text:'Un team dedicato sempre disponibile per qualsiasi necessità durante il tuo soggiorno.', img:'/images/servizi/03.jpg' },
  { title:'Sicurezza Garantita', text:'Immobili certificati e verificati per una vacanza senza pensieri.', img:'/images/servizi/04.jpg' },
]

const proprietari = [
  { title:'Gestione Prenotazioni', text:'Ottimizziamo le tue entrate con strategie di pricing dinamico e marketing professionale.', img:'/images/og/01.jpg' },
  { title:'Manutenzione Completa', text:'Pulizie, check-in/out, piccole riparazioni e gestione delle emergenze.', img:'/images/og/02.jpg' },
  { title:'Burocrazia Semplificata', text:'Gestiamo contratti, tasse turistiche e conformità alle normative locali.', img:'/images/og/03.jpg' },
  { title:'Marketing Professionale', text:'Foto professionali, testi accattivanti e presenza sui migliori portali turistici.', img:'/images/og/04.jpg' },
]

function ServiceCard({ s, delay, inView, fromLeft }: { s:typeof ospiti[0], delay:number, inView:boolean, fromLeft:boolean }) {
  return (
    <div style={{
      background:'#1a1917',
      borderRadius:10,
      overflow:'hidden',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : `translateX(${fromLeft ? '-60px' : '60px'})`,
      transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s`,
    }}>
      <div style={{ position:'relative', width:'100%', aspectRatio:'4/3', overflow:'hidden' }}>
        <Image src={s.img} alt={s.title} fill unoptimized style={{ objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)', zIndex:1 }} />
      </div>
      <div style={{ padding:'18px 20px 22px' }}>
        <div style={{ width:24, height:1, background:'#B8965A', marginBottom:12 }} />
        <h3 style={{ fontFamily:'var(--font-playfair)', fontSize:16, fontWeight:400, color:'#F5F2EE', marginBottom:8, lineHeight:1.3 }}>{s.title}</h3>
        <p style={{ fontSize:12, color:'rgba(245,242,238,0.5)', lineHeight:1.7, fontFamily:'var(--font-raleway)' }}>{s.text}</p>
      </div>
    </div>
  )
}

function ServiceBlock({ tag, title, sub, services, bg, mirror }: {
  tag:string, title:string, sub:string, services:typeof ospiti, bg:string, mirror:boolean
}) {
  const { ref, inView } = useInView()

  const textBlock = (
    <div style={{
      position:'sticky', top:120,
      opacity: inView?1:0,
      transform: inView?'translateY(0)':'translateY(30px)',
      transition:'opacity 0.7s, transform 0.7s',
    }}>
      <p style={{ fontSize:10, fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'#B8965A', marginBottom:18 }}>{tag}</p>
      <h2 style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(26px,2.8vw,42px)', fontWeight:400, lineHeight:1.2, color:'#F5F2EE', marginBottom:20 }}>{title}</h2>
      <p style={{ fontSize:14, color:'rgba(245,242,238,0.5)', lineHeight:1.8, fontFamily:'var(--font-raleway)' }}>{sub}</p>
    </div>
  )

  // Layout sfalsato: colonna sx card 0,2 — colonna dx card 1,3 shiftata giù di 50%
  const cardsBlock = (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, alignItems:'start' }}>
      {/* Colonna sinistra */}
      <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
        <ServiceCard s={services[0]} delay={0.1} inView={inView} fromLeft={!mirror} />
        <ServiceCard s={services[2]} delay={0.3} inView={inView} fromLeft={!mirror} />
      </div>
      {/* Colonna destra — sfalsata verso il basso */}
      <div style={{ display:'flex', flexDirection:'column', gap:20, marginTop:120 }}>
        <ServiceCard s={services[1]} delay={0.2} inView={inView} fromLeft={mirror} />
        <ServiceCard s={services[3]} delay={0.4} inView={inView} fromLeft={mirror} />
      </div>
    </div>
  )

  return (
    <section ref={ref} style={{ background:bg, padding:'110px 5%' }}>
      <div style={{
        display:'grid',
        gridTemplateColumns: mirror ? '1.6fr 1fr' : '1fr 1.6fr',
        gap:80,
        alignItems:'start',
      }}>
        {mirror ? <>{cardsBlock}{textBlock}</> : <>{textBlock}{cardsBlock}</>}
      </div>
    </section>
  )
}

export default function ServicesSection() {
  return (
    <>
      <ServiceBlock
        tag="Servizi per Ospiti"
        title="La tua vacanza perfetta inizia con la nostra attenzione"
        sub="Ogni dettaglio è curato per garantirti un'esperienza autentica e indimenticabile in Sardegna."
        services={ospiti}
        bg="#0F0F0E"
        mirror={false}
      />
      <ServiceBlock
        tag="Servizi per Proprietari"
        title="Affidaci il tuo immobile e rilassati"
        sub="Massimizziamo i tuoi guadagni mentre gestiamo ogni aspetto della tua proprietà."
        services={proprietari}
        bg="#111009"
        mirror={true}
      />
    </>
  )
}

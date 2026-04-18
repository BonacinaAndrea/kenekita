'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

export default function DualCtaSection() {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3, background:'#0a0908' }}>
      <Card
        tag="Per gli Ospiti"
        title={'Trova la Tua\nCasa Vacanza'}
        sub="Scopri ville e appartamenti selezionati per un'esperienza indimenticabile in Sardegna."
        items={['Immobili verificati e curati','Assistenza 24/7 durante il soggiorno','Migliori tariffe garantite']}
        cta="Esplora gli Immobili"
        href="/strutture"
        image="/images/og/card-ospiti.jpg"
        delay={0}
        inView={inView}
      />
      <Card
        tag="Per i Proprietari"
        title={'Affidaci il Tuo\nImmobile'}
        sub="Gestione completa e rendita garantita per la tua proprieta. Zero preoccupazioni."
        items={['Gestione chiavi in mano','Marketing su tutte le piattaforme','Rendicontazione trasparente']}
        cta="Diventa Partner"
        href="/proprietari"
        image="/images/og/card-proprietari.jpg"
        delay={0.15}
        inView={inView}
      />
    </div>
  )
}

function Card({ tag,title,sub,items,cta,href,image,delay,inView }: {
  tag:string, title:string, sub:string, items:string[], cta:string, href:string, image:string, delay:number, inView:boolean
}) {
  return (
    <div style={{
      position:'relative',
      minHeight:580,
      overflow:'hidden',
      display:'flex',
      alignItems:'flex-end',
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(40px)',
      transition: 'opacity 0.8s ' + delay + 's, transform 0.8s ' + delay + 's',
    }}>
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'url(' + image + ')',
        backgroundSize:'cover',
        backgroundPosition:'center',
        zIndex:0,
      }} />
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(to top, rgba(5,5,4,0.97) 0%, rgba(5,5,4,0.75) 45%, rgba(5,5,4,0.3) 75%, rgba(5,5,4,0.15) 100%)',
        zIndex:1,
      }} />
      <div style={{ position:'relative', zIndex:2, padding:'64px 56px', width:'100%' }}>
        <span style={{
          display:'inline-block', fontSize:10, fontWeight:600, letterSpacing:'0.25em',
          textTransform:'uppercase', color:'#B8965A', border:'1px solid rgba(184,150,90,0.4)',
          padding:'5px 14px', marginBottom:28,
        }}>{tag}</span>
        <h2 style={{
          fontFamily:'var(--font-playfair)', fontSize:'clamp(30px,3.5vw,48px)',
          fontWeight:400, lineHeight:1.2, marginBottom:16, color:'#F5F2EE', whiteSpace:'pre-line',
        }}>{title}</h2>
        <p style={{ fontSize:14, color:'rgba(245,242,238,0.55)', lineHeight:1.75, marginBottom:32, maxWidth:400 }}>{sub}</p>
        <ul style={{ listStyle:'none', padding:0, marginBottom:40 }}>
          {items.map(item => (
            <li key={item} style={{
              fontSize:13, color:'rgba(245,242,238,0.75)', padding:'8px 0',
              display:'flex', alignItems:'center', gap:12,
              borderBottom:'1px solid rgba(245,242,238,0.07)',
            }}>
              <span style={{ width:16, height:1, background:'#B8965A', display:'inline-block', flexShrink:0 }} />
              {item}
            </li>
          ))}
        </ul>
        <Link href={href} style={{
          background:'#B8965A', color:'#0F0F0E', fontSize:11, fontWeight:600,
          letterSpacing:'0.2em', textTransform:'uppercase', padding:'15px 36px',
          textDecoration:'none', display:'inline-block',
        }}>{cta}</Link>
      </div>
    </div>
  )
}

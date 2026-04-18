'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'

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

const BEDDY_URL = 'https://kenekita.beddy.io/#/(beddy:home)?lang=it'

const BASE = [
  {
    slug:'villa-i-lecci', name:'Villa I Lecci', location:'Palau, Vicino Porto Pollo', tag:'Villa',
    desc:'Splendida villa con vista giardino, inserita nel contesto naturale tipico sardo. Gli ospiti saranno immersi nei suoni e silenzi della campagna gallurese.',
    services:['3 Camere da Letto','Giardino con Arredamento','Barbecue','Doccia Esterna','WiFi Gratuito','Parcheggio Privato'],
    tags:['Aria Condizionata','45 min da Olbia'],
    images:['/images/strutture/villa-i-lecci/hero.jpg','/images/strutture/villa-i-lecci/01.jpg','/images/strutture/villa-i-lecci/02.jpg','/images/strutture/villa-i-lecci/03.jpg'],
  },
  {
    slug:'gardenia-luxury', name:'Gardenia Luxury', location:'Palau', tag:'Appartamento',
    desc:'Splendido appartamento con patio bordo piscina e giardino, inserito in un residence di pregio nella citta di Palau. Contesto di lusso e raffinatezza.',
    services:['2 Camere da Letto','2 Bagni','Piscina','Vasca Idromassaggio','Patio Privato','Aria Condizionata'],
    tags:['WiFi Gratuito','Vicino alla Spiaggia'],
    images:['/images/strutture/gardenia-luxury/hero.jpg','/images/strutture/gardenia-luxury/01.jpg','/images/strutture/gardenia-luxury/02.jpg','/images/strutture/gardenia-luxury/03.jpg'],
  },
  {
    slug:'dream-the-sea', name:'Dream the Sea', location:'Porto Rotondo, Punta Lada', tag:'Villa',
    desc:'Appartamento di lusso con patio esterno arredato e vista mare, inserito nel residence di pregio Il Poggio nella zona esclusiva di Punta Lada.',
    services:['2 Camere da Letto','2 Bagni','Vista Mare','Piscina','Campo da Tennis','Parcheggio Privato'],
    tags:['WiFi Gratuito','20 min da Olbia'],
    images:['/images/strutture/dream-the-sea/hero.jpg','/images/strutture/dream-the-sea/01.jpg','/images/strutture/dream-the-sea/02.jpg','/images/strutture/dream-the-sea/03.jpg'],
  },
  {
    slug:'haven-of-harbour', name:'Haven of Harbour', location:'Porto Rotondo Centro', tag:'Appartamento',
    desc:'Elegante appartamento al centro di Porto Rotondo con veranda esterna arredata e superba vista sul porto turistico.',
    services:['2 Camere da Letto','1 Bagno','Vista Porto','Veranda Arredata','Aria Condizionata','WiFi Gratuito'],
    tags:['Parcheggio Privato','Design Moderno'],
    images:['/images/strutture/haven-of-harbour/hero.jpg','/images/strutture/haven-of-harbour/01.jpg','/images/strutture/haven-of-harbour/02.jpg','/images/strutture/haven-of-harbour/03.jpg'],
  },
  {
    slug:'sunset-blu-house', name:'Sunset Blu House', location:'Porto Rotondo, Punta Lada', tag:'Appartamento',
    desc:'Appartamento di lusso con veranda esterna arredata e superba vista su Porto Rotondo e mare, nel residence di pregio Il Poggio.',
    services:['2 Camere da Letto','2 Bagni','Vista Mare Panoramica','Piscina','Campo da Tennis','Veranda Arredata'],
    tags:['WiFi Gratuito','20 min da Olbia'],
    images:['/images/strutture/la-perla-bianca/hero.jpg','/images/strutture/la-perla-bianca/01.jpg','/images/strutture/la-perla-bianca/02.jpg','/images/strutture/la-perla-bianca/03.jpg'],
  },
  {
    slug:'maison-des-arches', name:'Maison des Arches', location:'Porto Cervo Centro', tag:'Villa',
    desc:'Luminoso appartamento con ampia veranda inserito nel contesto esclusivo della Piazzetta degli Archi di Porto Cervo.',
    services:['1 Camera da Letto','1 Bagno Design','Veranda Ampia','Centro Porto Cervo','Aria Condizionata','WiFi Gratuito'],
    tags:['Shopping & Movida','45 min da Olbia'],
    images:['/images/strutture/maison-des-arches/hero.jpg','/images/strutture/maison-des-arches/01.jpg','/images/strutture/maison-des-arches/02.jpg','/images/strutture/maison-des-arches/03.jpg'],
  },
  {
    slug:'dream-on-the-sea-stintino', name:'Dream on the Sea Stintino', location:'Stintino, La Pelosa', tag:'Villa',
    desc:'Appartamento nei pressi della famosa spiaggia della Pelosa, con veranda esterna e pregevole vista mare e torre.',
    services:['2 Camere da Letto','1 Bagno','Vista Mare','100m dal Mare','Patio Coperto','Aria Condizionata'],
    tags:['WiFi Gratuito','Vicino La Pelosa'],
    images:['/images/strutture/villa-i-lecci/02.jpg','/images/strutture/villa-i-lecci/03.jpg','/images/strutture/villa-i-lecci/04.jpg','/images/strutture/villa-i-lecci/01.jpg'],
  },
  {
    slug:'profumo-di-sardegna', name:'Profumo di Sardegna', location:'Porto Istana, Olbia', tag:'Appartamento',
    desc:'Splendido villino indipendente immerso nella vegetazione mediterranea, a pochi minuti dalla spiaggia di Porto Istana.',
    services:['2 Camere da Letto','2 Bagni','Doccia Esterna','Aria Condizionata','WiFi Gratuito','Giardino Mediterraneo'],
    tags:['Vicino alla Spiaggia','Vicino a Olbia'],
    images:['/images/strutture/gardenia-luxury/02.jpg','/images/strutture/gardenia-luxury/03.jpg','/images/strutture/gardenia-luxury/01.jpg','/images/strutture/gardenia-luxury/hero.jpg'],
  },
]

function ServiceIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2" style={{flexShrink:0}}>
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  )
}

function PropertyCard({ p }: { p: typeof BASE[0] }) {
  const [imgIndex, setImgIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [cardHovered, setCardHovered] = useState(false)
  const next = useCallback(() => setImgIndex(i => (i+1) % p.images.length), [p.images.length])
  const prev = useCallback(() => setImgIndex(i => (i-1+p.images.length) % p.images.length), [p.images.length])

  useEffect(() => {
    if (cardHovered) return
    const t = setInterval(next, 3200)
    return () => clearInterval(t)
  }, [cardHovered, next])

  return (
    <div
      style={{ flexShrink:0, width:'calc(33.333% - 11px)', background:'#1a1917', borderRadius:12, overflow:'hidden', display:'flex', flexDirection:'column' }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => { setCardHovered(false); setHovered(false) }}
    >
      <div
        style={{ position:'relative', width:'100%', aspectRatio:'16/10', overflow:'hidden', background:'#111', flexShrink:0 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {p.images.map((img,i) => (
          <div key={i} style={{ position:'absolute', inset:0, opacity:i===imgIndex?1:0, transition:'opacity 0.9s ease', zIndex:i===imgIndex?1:0 }}>
            <Image src={img} alt={p.name} fill unoptimized style={{ objectFit:'cover' }} />
          </div>
        ))}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)', zIndex:2 }} />
        <span style={{ position:'absolute', top:12, left:12, zIndex:4, fontSize:9, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#F5F2EE', background:'rgba(184,150,90,0.9)', padding:'4px 10px', borderRadius:4 }}>{p.tag}</span>
        <div style={{ position:'absolute', bottom:10, left:'50%', transform:'translateX(-50%)', zIndex:4, display:'flex', gap:4 }}>
          {p.images.map((_,i) => (
            <div key={i} style={{ width:i===imgIndex?14:4, height:4, borderRadius:2, background:i===imgIndex?'#B8965A':'rgba(255,255,255,0.5)', transition:'all 0.3s' }} />
          ))}
        </div>
        <button onClick={e=>{e.preventDefault();prev()}} style={{ position:'absolute', left:10, top:'50%', transform:'translateY(-50%)', zIndex:5, background:'rgba(0,0,0,0.55)', border:'none', borderRadius:'50%', width:32, height:32, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', opacity:hovered?1:0, transition:'opacity 0.3s' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={e=>{e.preventDefault();next()}} style={{ position:'absolute', right:10, top:'50%', transform:'translateY(-50%)', zIndex:5, background:'rgba(0,0,0,0.55)', border:'none', borderRadius:'50%', width:32, height:32, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', opacity:hovered?1:0, transition:'opacity 0.3s' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      <div style={{ padding:'20px 20px 24px', display:'flex', flexDirection:'column', flex:1 }}>
        <h3 style={{ fontFamily:'var(--font-playfair)', fontSize:20, fontWeight:400, color:'#F5F2EE', marginBottom:6, lineHeight:1.2 }}>{p.name}</h3>
        <div style={{ display:'flex', alignItems:'center', gap:5, marginBottom:12 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span style={{ fontSize:12, color:'rgba(245,242,238,0.55)', letterSpacing:'0.05em' }}>{p.location}</span>
        </div>
        <p style={{ fontSize:13, color:'rgba(245,242,238,0.55)', lineHeight:1.7, marginBottom:16, fontFamily:'var(--font-raleway)' }}>{p.desc}</p>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6px 12px', marginBottom:16 }}>
          {p.services.map(s => (
            <div key={s} style={{ display:'flex', alignItems:'center', gap:6 }}>
              <ServiceIcon />
              <span style={{ fontSize:12, color:'rgba(245,242,238,0.7)', fontFamily:'var(--font-raleway)' }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
          {p.tags.map(t => (
            <span key={t} style={{ fontSize:11, padding:'3px 10px', borderRadius:20, border:'1px solid rgba(184,150,90,0.35)', color:'#B8965A', fontFamily:'var(--font-raleway)', letterSpacing:'0.05em' }}>{t}</span>
          ))}
        </div>
        <a
          href={BEDDY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display:'block', textAlign:'center', background:'#B8965A', color:'#0F0F0E', fontSize:12, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', padding:'13px 20px', textDecoration:'none', borderRadius:6, fontFamily:'var(--font-raleway)', marginTop:'auto' }}
        >
          Verifica Disponibilita
        </a>
      </div>
    </div>
  )
}

export default function PropertiesSection() {
  const { ref, inView } = useInView()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animate, setAnimate] = useState(true)
  const touchStartX = useRef(0)
  const VISIBLE = 3
  const total = BASE.length
  const items = [...BASE.slice(-VISIBLE), ...BASE, ...BASE.slice(0, VISIBLE)]
  const offset = (current + VISIBLE) * (100 / VISIBLE)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => { setAnimate(true); setCurrent(c => c + 1) }, 2500)
    return () => clearInterval(t)
  }, [paused])

  useEffect(() => {
    if (current >= total) { setTimeout(() => { setAnimate(false); setCurrent(0) }, 900) }
    if (current < 0) { setTimeout(() => { setAnimate(false); setCurrent(total - 1) }, 900) }
  }, [current, total])

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) { setAnimate(true); setCurrent(c => diff > 0 ? c + 1 : c - 1) }
  }

  return (
    <section ref={ref} style={{ background:'linear-gradient(to bottom, #0a0d0c, #0F0F0E)', padding:'110px 0' }}>
      <div style={{ padding:'0 5%', display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:50, opacity:inView?1:0, transform:inView?'translateY(0)':'translateY(30px)', transition:'opacity 0.7s, transform 0.7s' }}>
        <div>
          <p style={{ fontSize:10, fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'#B8965A', marginBottom:16 }}>Le Nostre Proprieta</p>
          <h2 style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(28px,3.5vw,46px)', fontWeight:400, lineHeight:1.2, color:'#F5F2EE' }}>Ville e Appartamenti<br/>selezionati in Sardegna</h2>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <button onClick={() => { setAnimate(true); setCurrent(c => c-1) }} style={{ background:'transparent', border:'1px solid rgba(245,242,238,0.2)', borderRadius:'50%', width:44, height:44, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F2EE" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={() => { setAnimate(true); setCurrent(c => c+1) }} style={{ background:'transparent', border:'1px solid rgba(245,242,238,0.2)', borderRadius:'50%', width:44, height:44, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F2EE" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <Link href="/strutture" style={{ fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#B8965A', textDecoration:'none', border:'1px solid rgba(184,150,90,0.35)', padding:'12px 28px' }}>Vedi Tutti</Link>
        </div>
      </div>
      <div style={{ overflow:'hidden', padding:'0 5%' }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div style={{ display:'flex', gap:16, transform:'translateX(calc(-' + offset + '% - ' + ((current + VISIBLE) * 16 / VISIBLE) + 'px))', transition: animate ? 'transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none', opacity: inView ? 1 : 0, alignItems:'stretch' }}>
          {items.map((p, i) => <PropertyCard key={p.slug + '-' + i} p={p} />)}
        </div>
      </div>
    </section>
  )
}

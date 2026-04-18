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
    desc:'Splendido appartamento con patio bordo piscina e giardino, inserito in un residence di pregio nella città di Palau. Contesto di lusso e raffinatezza.',
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
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2" className="flex-shrink-0">
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
      /* Mobile: full width. md: 1/2. lg: 1/3 minus gap */
      className="flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] bg-[#1a1917] rounded-[12px] overflow-hidden flex flex-col"
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => { setCardHovered(false); setHovered(false) }}
    >
      {/* Image carousel */}
      <div
        className="relative w-full overflow-hidden bg-[#111] flex-shrink-0"
        style={{ aspectRatio: '16/10' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {p.images.map((img, i) => (
          <div key={i} className="absolute inset-0" style={{ opacity: i === imgIndex ? 1 : 0, transition: 'opacity 0.9s ease', zIndex: i === imgIndex ? 1 : 0 }}>
            <Image src={img} alt={p.name} fill unoptimized className="object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
        <span className="absolute top-3 left-3 z-[4] text-[9px] font-bold tracking-[0.18em] uppercase text-[#F5F2EE] bg-[rgba(184,150,90,0.9)] px-2.5 py-1 rounded-[4px]">
          {p.tag}
        </span>
        {/* Dots */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-[4] flex gap-1">
          {p.images.map((_, i) => (
            <div key={i} className="h-1 rounded-[2px] transition-all duration-300"
              style={{ width: i === imgIndex ? 14 : 4, background: i === imgIndex ? '#B8965A' : 'rgba(255,255,255,0.5)' }} />
          ))}
        </div>
        {/* Prev/Next */}
        <button onClick={e => { e.preventDefault(); prev() }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-[5] bg-[rgba(0,0,0,0.55)] border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={e => { e.preventDefault(); next() }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-[5] bg-[rgba(0,0,0,0.55)] border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      {/* Card body */}
      <div className="px-5 pt-5 pb-6 flex flex-col flex-1">
        <h3 className="font-playfair text-[20px] font-normal text-[#F5F2EE] mb-1.5 leading-[1.2]">{p.name}</h3>
        <div className="flex items-center gap-1.5 mb-3">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-[12px] text-[rgba(245,242,238,0.55)] tracking-[0.05em] font-raleway">{p.location}</span>
        </div>
        <p className="text-[13px] text-[rgba(245,242,238,0.55)] leading-[1.7] mb-4 font-raleway">{p.desc}</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-4">
          {p.services.map(s => (
            <div key={s} className="flex items-center gap-1.5">
              <ServiceIcon />
              <span className="text-[12px] text-[rgba(245,242,238,0.7)] font-raleway">{s}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tags.map(t => (
            <span key={t} className="text-[11px] px-2.5 py-[3px] rounded-[20px] border border-[rgba(184,150,90,0.35)] text-[#B8965A] font-raleway tracking-[0.05em]">{t}</span>
          ))}
        </div>
        <a
          href={BEDDY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#B8965A] text-[#0F0F0E] text-[12px] font-semibold tracking-[0.15em] uppercase px-5 py-[13px] no-underline rounded-[6px] font-raleway mt-auto transition-opacity hover:opacity-90"
        >
          Verifica Disponibilità
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
  const [isMobile, setIsMobile] = useState(false)
  const touchStartX = useRef(0)

  // Detect mobile for visible count
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const VISIBLE = isMobile ? 1 : 3
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
    <section ref={ref} className="py-[110px]" style={{ background: 'linear-gradient(to bottom, #0a0d0c, #0F0F0E)' }}>
      {/* Header */}
      <div
        className="px-[5%] flex flex-col gap-5 mb-12 md:flex-row md:justify-between md:items-end"
        style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}
      >
        <div>
          <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#B8965A] mb-4 font-raleway">Le Nostre Proprietà</p>
          <h2 className="font-playfair font-normal leading-[1.2] text-[#F5F2EE] text-[clamp(28px,3.5vw,46px)]">
            Ville e Appartamenti<br />selezionati in Sardegna
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setAnimate(true); setCurrent(c => c - 1) }}
            className="bg-transparent border border-[rgba(245,242,238,0.2)] rounded-full w-11 h-11 flex items-center justify-center cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F2EE" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => { setAnimate(true); setCurrent(c => c + 1) }}
            className="bg-transparent border border-[rgba(245,242,238,0.2)] rounded-full w-11 h-11 flex items-center justify-center cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F2EE" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <Link
            href="/strutture"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B8965A] no-underline border border-[rgba(184,150,90,0.35)] px-7 py-3 font-raleway"
          >
            Vedi Tutti
          </Link>
        </div>
      </div>

      {/* Slider */}
      <div
        className="overflow-hidden px-[5%]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex gap-4 items-stretch"
          style={{
            transform: `translateX(calc(-${offset}% - ${(current + VISIBLE) * 16 / VISIBLE}px))`,
            transition: animate ? 'transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none',
            opacity: inView ? 1 : 0,
          }}
        >
          {items.map((p, i) => <PropertyCard key={p.slug + '-' + i} p={p} />)}
        </div>
      </div>
    </section>
  )
}

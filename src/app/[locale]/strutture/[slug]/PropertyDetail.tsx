'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const BEDDY_URL = 'https://kenekita.beddy.io/#/(beddy:home)?lang=it'

type Property = {
  slug: string
  name: string
  location: string
  tag: string
  desc: string
  longDesc: string
  services: string[]
  tags: string[]
  images: string[]
  guests: number
  bedrooms: number
  bathrooms: number
  sqm: number
}

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

export default function PropertyDetail({ property: p, related }: { property: Property, related: Property[] }) {
  const [activeImg, setActiveImg] = useState(0)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const { ref: statsRef, inView: statsInView } = useInView()
  const { ref: relRef, inView: relInView } = useInView()

  // Keyboard nav for lightbox
  useEffect(() => {
    if (!galleryOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setActiveImg(i => (i + 1) % p.images.length)
      if (e.key === 'ArrowLeft') setActiveImg(i => (i - 1 + p.images.length) % p.images.length)
      if (e.key === 'Escape') setGalleryOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [galleryOpen, p.images.length])

  return (
    <main style={{ background: '#0F0F0E', minHeight: '100vh' }}>

      {/* ── Breadcrumb ── */}
      <div style={{ padding: '100px 5% 0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Link href="/strutture" style={{ fontSize: 11, color: 'rgba(245,242,238,0.4)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Strutture</Link>
        <span style={{ color: 'rgba(245,242,238,0.2)', fontSize: 11 }}>/</span>
        <span style={{ fontSize: 11, color: '#B8965A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.name}</span>
      </div>

      {/* ── Hero Gallery ── */}
      <div style={{ padding: '24px 5% 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '340px 200px', gap: 3, borderRadius: 12, overflow: 'hidden' }}>
          {/* Main image */}
          <div
            style={{ gridRow: '1 / 3', position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
            onClick={() => { setActiveImg(0); setGalleryOpen(true) }}
          >
            <Image src={p.images[0]} alt={p.name} fill unoptimized style={{ objectFit: 'cover', transition: 'transform 0.6s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <span style={{ position: 'absolute', top: 16, left: 16, zIndex: 2, fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5F2EE', background: 'rgba(184,150,90,0.9)', padding: '5px 12px' }}>{p.tag}</span>
          </div>
          {/* Thumbnails */}
          {p.images.slice(1, 5).map((img, i) => (
            <div
              key={i}
              style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => { setActiveImg(i + 1); setGalleryOpen(true) }}
            >
              <Image src={img} alt={`${p.name} ${i + 2}`} fill unoptimized style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {i === 3 && p.images.length > 5 && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#F5F2EE', letterSpacing: '0.1em' }}>+{p.images.length - 5} foto</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content + Sidebar ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 5% 120px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 64, alignItems: 'start' }}>

        {/* LEFT — Content */}
        <div>
          {/* Title block */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              <span style={{ fontSize: 12, color: '#B8965A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{p.location}</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.1, marginBottom: 20 }}>{p.name}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tags.map(t => (
                <span key={t} style={{ fontSize: 11, padding: '4px 12px', borderRadius: 20, border: '1px solid rgba(184,150,90,0.35)', color: '#B8965A', fontFamily: 'var(--font-raleway)', letterSpacing: '0.05em' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, marginBottom: 48 }}>
            {[
              { n: p.guests, l: 'Ospiti' },
              { n: p.bedrooms, l: 'Camere' },
              { n: p.bathrooms, l: 'Bagni' },
              { n: `${p.sqm}m²`, l: 'Superficie' },
            ].map((s, i) => (
              <div key={s.l} style={{
                background: '#1a1917', padding: '20px 16px', textAlign: 'center',
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${i * 0.1}s, transform 0.6s ${i * 0.1}s`,
              }}>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 28, fontWeight: 300, color: '#F5F2EE', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,242,238,0.4)', marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ width: 32, height: 1, background: '#B8965A', marginBottom: 24 }} />
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, fontWeight: 400, color: '#F5F2EE', marginBottom: 16 }}>La Struttura</h2>
            <p style={{ fontSize: 15, color: 'rgba(245,242,238,0.65)', lineHeight: 1.85, fontFamily: 'var(--font-raleway)', marginBottom: 16 }}>{p.desc}</p>
            <p style={{ fontSize: 15, color: 'rgba(245,242,238,0.55)', lineHeight: 1.85, fontFamily: 'var(--font-raleway)' }}>{p.longDesc}</p>
          </div>

          {/* Services */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ width: 32, height: 1, background: '#B8965A', marginBottom: 24 }} />
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, fontWeight: 400, color: '#F5F2EE', marginBottom: 24 }}>Servizi & Dotazioni</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
              {p.services.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid rgba(245,242,238,0.06)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(245,242,238,0.75)', fontFamily: 'var(--font-raleway)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Sticky Booking Sidebar */}
        <div style={{ position: 'sticky', top: 100 }}>
          <div style={{ background: '#1a1917', padding: '36px 32px', borderTop: '2px solid #B8965A' }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 8 }}>Prenota ora</p>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 24, fontWeight: 400, color: '#F5F2EE', marginBottom: 24, lineHeight: 1.2 }}>{p.name}</h3>

            <div style={{ borderTop: '1px solid rgba(245,242,238,0.08)', borderBottom: '1px solid rgba(245,242,238,0.08)', padding: '16px 0', marginBottom: 24 }}>
              {[
                { icon: '👥', label: `Fino a ${p.guests} ospiti` },
                { icon: '🛏', label: `${p.bedrooms} camere da letto` },
                { icon: '🚿', label: `${p.bathrooms} bagni` },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
                  <span style={{ fontSize: 14 }}>{item.icon}</span>
                  <span style={{ fontSize: 13, color: 'rgba(245,242,238,0.6)', fontFamily: 'var(--font-raleway)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            <a
              href={BEDDY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', background: '#B8965A', color: '#0F0F0E', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 24px', textDecoration: 'none', marginBottom: 12, fontFamily: 'var(--font-raleway)' }}
            >
              Verifica Disponibilità
            </a>
            <Link
              href="/contatti"
              style={{ display: 'block', textAlign: 'center', background: 'transparent', color: '#F5F2EE', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '14px 24px', textDecoration: 'none', border: '1px solid rgba(245,242,238,0.2)', fontFamily: 'var(--font-raleway)' }}
            >
              Richiedi Informazioni
            </Link>

            <p style={{ fontSize: 11, color: 'rgba(245,242,238,0.3)', textAlign: 'center', marginTop: 20, lineHeight: 1.6, fontFamily: 'var(--font-raleway)' }}>
              Assistenza 24/7 durante il soggiorno.<br />Migliori tariffe garantite.
            </p>
          </div>
        </div>
      </div>

      {/* ── Related Properties ── */}
      <div ref={relRef} style={{ background: '#111009', padding: '80px 5% 100px' }}>
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 16, opacity: relInView ? 1 : 0, transition: 'opacity 0.6s' }}>Potrebbero Interessarti</p>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px,3vw,38px)', fontWeight: 400, color: '#F5F2EE', marginBottom: 40, opacity: relInView ? 1 : 0, transform: relInView ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s, transform 0.6s' }}>
          Altre Strutture in Sardegna
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {related.map((r, i) => (
            <Link key={r.slug} href={`/strutture/${r.slug}`} style={{
              textDecoration: 'none', background: '#1a1917', borderRadius: 10, overflow: 'hidden', display: 'block',
              opacity: relInView ? 1 : 0,
              transform: relInView ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s ${i * 0.12}s, transform 0.6s ${i * 0.12}s`,
            }}>
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <Image src={r.images[0]} alt={r.name} fill unoptimized style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <span style={{ position: 'absolute', top: 12, left: 12, zIndex: 2, fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F5F2EE', background: 'rgba(184,150,90,0.9)', padding: '4px 10px' }}>{r.tag}</span>
              </div>
              <div style={{ padding: '18px 20px 22px' }}>
                <div style={{ fontSize: 11, color: '#B8965A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{r.location}</div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: 18, fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>{r.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {galleryOpen && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setGalleryOpen(false)}
        >
          <button
            onClick={e => { e.stopPropagation(); setActiveImg(i => (i - 1 + p.images.length) % p.images.length) }}
            style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div style={{ position: 'relative', width: '80vw', height: '80vh', maxWidth: 1100 }} onClick={e => e.stopPropagation()}>
            <Image src={p.images[activeImg]} alt={p.name} fill unoptimized style={{ objectFit: 'contain' }} />
          </div>
          <button
            onClick={e => { e.stopPropagation(); setActiveImg(i => (i + 1) % p.images.length) }}
            style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <button
            onClick={() => setGalleryOpen(false)}
            style={{ position: 'absolute', top: 24, right: 24, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6 }}>
            {p.images.map((_, i) => (
              <button key={i} onClick={e => { e.stopPropagation(); setActiveImg(i) }}
                style={{ width: i === activeImg ? 20 : 6, height: 6, borderRadius: 3, background: i === activeImg ? '#B8965A' : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

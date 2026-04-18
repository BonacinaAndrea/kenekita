'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Immobili', href: '/strutture' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Proprietari', href: '/proprietari' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isActive = (href: string) => pathname.includes(href)

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 200,
        padding: scrolled ? '16px 5%' : '28px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,9,8,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,242,238,0.06)' : '1px solid transparent',
        transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease',
      }}>
        {/* Logo */}
        <Link href="/" style={{ fontFamily: 'var(--font-bbh)', fontSize: 20, fontWeight: 400, letterSpacing: '0.08em', color: '#F5F2EE', textDecoration: 'none' }}>
          KeneKita
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: isActive(href) ? '#B8965A' : 'rgba(245,242,238,0.75)',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: 2,
                  transition: 'color 0.2s',
                }}
              >
                {label}
                {isActive(href) && (
                  <span style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1, background: '#B8965A' }} />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="nav-desktop">
          <Link
            href="/contatti"
            style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#B8965A', textDecoration: 'none',
              border: '1px solid rgba(184,150,90,0.4)', padding: '10px 20px',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#B8965A'; (e.currentTarget as HTMLElement).style.color = '#0F0F0E' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#B8965A' }}
          >
            Contatti
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          className="nav-mobile"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, display: 'flex', flexDirection: 'column',
            gap: 5, alignItems: 'flex-end',
          }}
        >
          <span style={{
            display: 'block', height: 1.5, background: '#F5F2EE',
            width: menuOpen ? 24 : 24,
            transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
            transition: 'transform 0.3s ease',
          }} />
          <span style={{
            display: 'block', height: 1.5, background: '#F5F2EE',
            width: menuOpen ? 0 : 18,
            opacity: menuOpen ? 0 : 1,
            transition: 'width 0.3s ease, opacity 0.2s ease',
          }} />
          <span style={{
            display: 'block', height: 1.5, background: '#F5F2EE',
            width: menuOpen ? 24 : 24,
            transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            transition: 'transform 0.3s ease',
          }} />
        </button>
      </header>

      {/* Mobile overlay menu */}
      <div
        className="nav-mobile"
        style={{
          position: 'fixed', inset: 0, zIndex: 190,
          background: 'rgba(10,9,8,0.98)',
          backdropFilter: 'blur(16px)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          gap: 0,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.4s ease',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: '100%', padding: '0 5%' }}>
          {links.map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(28px, 8vw, 48px)',
                fontWeight: 400,
                color: isActive(href) ? '#B8965A' : '#F5F2EE',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                lineHeight: 1.4,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ${0.1 + i * 0.07}s, transform 0.5s ${0.1 + i * 0.07}s`,
                display: 'block',
                textAlign: 'center',
                padding: '8px 0',
              }}
            >
              {label}
            </Link>
          ))}
          <div style={{
            width: 40, height: 1, background: 'rgba(184,150,90,0.4)', margin: '24px 0',
            opacity: menuOpen ? 1 : 0, transition: 'opacity 0.5s 0.4s',
          }} />
          <Link
            href="/contatti"
            style={{
              background: '#B8965A', color: '#0F0F0E',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              padding: '16px 48px', textDecoration: 'none',
              fontFamily: 'var(--font-raleway)',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s 0.42s, transform 0.5s 0.42s',
            }}
          >
            Contatti
          </Link>
        </nav>
      </div>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}

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
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[200] flex items-center justify-between transition-all duration-400',
          scrolled ? 'px-[5%] py-4 bg-[rgba(10,9,8,0.96)] backdrop-blur-[12px] border-b border-[rgba(245,242,238,0.06)]' : 'px-[5%] py-7 bg-transparent border-b border-transparent',
        ].join(' ')}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-bbh text-[20px] font-normal tracking-[0.08em] text-[#F5F2EE] no-underline"
        >
          KeneKita
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={[
                  'text-[11px] font-medium tracking-[0.15em] uppercase no-underline relative pb-0.5 transition-colors duration-200 font-raleway',
                  isActive(href) ? 'text-[#B8965A]' : 'text-[rgba(245,242,238,0.75)] hover:text-[#F5F2EE]',
                ].join(' ')}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#B8965A]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contatti"
            className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#B8965A] no-underline border border-[rgba(184,150,90,0.4)] px-5 py-[10px] transition-all duration-200 hover:bg-[#B8965A] hover:text-[#0F0F0E] font-raleway"
          >
            Contatti
          </Link>
        </div>

        {/* Hamburger — visible only on mobile */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-[5px] items-end p-2 bg-transparent border-none cursor-pointer"
        >
          <span className={[
            'block h-[1.5px] w-6 bg-[#F5F2EE] transition-transform duration-300',
            menuOpen ? 'translate-y-[6.5px] rotate-45' : '',
          ].join(' ')} />
          <span className={[
            'block h-[1.5px] bg-[#F5F2EE] transition-all duration-300',
            menuOpen ? 'w-0 opacity-0' : 'w-[18px] opacity-100',
          ].join(' ')} />
          <span className={[
            'block h-[1.5px] w-6 bg-[#F5F2EE] transition-transform duration-300',
            menuOpen ? '-translate-y-[6.5px] -rotate-45' : '',
          ].join(' ')} />
        </button>
      </header>

      {/* Mobile fullscreen overlay — visible only on mobile */}
      <div
        className={[
          'md:hidden fixed inset-0 z-[190] flex flex-col justify-center items-center transition-opacity duration-400',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        style={{ background: 'rgba(10,9,8,0.98)', backdropFilter: 'blur(16px)' }}
      >
        <nav className="flex flex-col items-center gap-2 w-full px-[5%]">
          {links.map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              className={[
                'font-playfair font-normal text-[clamp(28px,8vw,48px)] no-underline tracking-[0.02em] leading-[1.4] text-center block py-2 transition-all duration-500',
                isActive(href) ? 'text-[#B8965A]' : 'text-[#F5F2EE]',
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
              ].join(' ')}
              style={{ transitionDelay: menuOpen ? `${0.1 + i * 0.07}s` : '0s' }}
            >
              {label}
            </Link>
          ))}

          <div
            className={[
              'w-10 h-px bg-[rgba(184,150,90,0.4)] my-6 transition-opacity duration-500',
              menuOpen ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            style={{ transitionDelay: menuOpen ? '0.4s' : '0s' }}
          />

          <Link
            href="/contatti"
            className={[
              'bg-[#B8965A] text-[#0F0F0E] text-[11px] font-bold tracking-[0.22em] uppercase px-12 py-4 no-underline font-raleway transition-all duration-500',
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
            ].join(' ')}
            style={{ transitionDelay: menuOpen ? '0.42s' : '0s' }}
          >
            Contatti
          </Link>
        </nav>
      </div>
    </>
  )
}

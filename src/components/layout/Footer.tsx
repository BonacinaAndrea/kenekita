'use client'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Ville e Appartamenti', href: '/strutture' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Contatti', href: '/contatti' },
]

const proprietariLinks = [
  { label: 'Sei un Proprietario?', href: '/proprietari' },
  { label: 'Come Funziona', href: '/proprietari#come-funziona' },
  { label: 'I Nostri Servizi', href: '/proprietari#servizi' },
  { label: 'Richiedi Sopralluogo', href: '/proprietari#contatto' },
  { label: 'FAQ', href: '/proprietari#faq' },
]

const locationLinks = [
  { label: 'Palau', href: '/strutture' },
  { label: 'Porto Rotondo', href: '/strutture' },
  { label: 'Porto Cervo', href: '/strutture' },
  { label: 'Stintino', href: '/strutture' },
  { label: 'Olbia & Porto Istana', href: '/strutture' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/kenekita',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/kenekita',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/393791502073',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'Airbnb',
    href: 'https://airbnb.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0908', borderTop: '1px solid rgba(245,242,238,0.06)' }}>

      {/* ── CTA Strip ── */}
      <div style={{ borderBottom: '1px solid rgba(245,242,238,0.06)', padding: '56px 5%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 10, fontFamily: 'var(--font-raleway)' }}>Hai un immobile in Sardegna?</p>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(22px,2.5vw,34px)', fontWeight: 400, color: '#F5F2EE', lineHeight: 1.2 }}>
              Affidacelo. Pensiamo a tutto noi.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
            <Link href="/proprietari#contatto" style={{ background: '#B8965A', color: '#0F0F0E', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '13px 28px', textDecoration: 'none', fontFamily: 'var(--font-raleway)', whiteSpace: 'nowrap' }}>
              Sopralluogo Gratuito
            </Link>
            <Link href="/strutture" style={{ background: 'transparent', color: '#F5F2EE', fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '13px 28px', textDecoration: 'none', border: '1px solid rgba(245,242,238,0.2)', fontFamily: 'var(--font-raleway)', whiteSpace: 'nowrap' }}>
              Esplora gli Immobili
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div style={{ padding: '72px 5% 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 60, marginBottom: 64 }}>

          {/* Brand column */}
          <div>
            <div style={{ fontFamily: 'var(--font-bbh)', fontSize: 22, fontWeight: 400, letterSpacing: '0.08em', color: '#F5F2EE', marginBottom: 6 }}>KeneKita</div>
            <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#B8965A', marginBottom: 20, fontFamily: 'var(--font-raleway)' }}>Co-Hosting &amp; Property Management</div>
            <p style={{ fontSize: 13, color: 'rgba(245,242,238,0.4)', lineHeight: 1.75, marginBottom: 28, fontFamily: 'var(--font-raleway)' }}>
              Il tuo partner di fiducia per affitti turistici in Sardegna. Professionalità, esperienza e passione dal 2015.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
              {[
                { href: 'tel:+393791502073', label: '+39 379 150 2073' },
                { href: 'tel:+393793061937', label: '+39 379 306 1937' },
                { href: 'mailto:info@kenekita.com', label: 'info@kenekita.com' },
              ].map(c => (
                <a key={c.href} href={c.href} style={{ fontSize: 13, color: 'rgba(245,242,238,0.4)', textDecoration: 'none', fontFamily: 'var(--font-raleway)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#B8965A')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,242,238,0.4)')}
                >{c.label}</a>
              ))}
              <span style={{ fontSize: 13, color: 'rgba(245,242,238,0.3)', fontFamily: 'var(--font-raleway)' }}>Via Gallura 10C, 07026 Olbia (SS)</span>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 38, height: 38, border: '1px solid rgba(245,242,238,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,242,238,0.4)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,150,90,0.5)'; (e.currentTarget as HTMLElement).style.color = '#B8965A' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,242,238,0.12)'; (e.currentTarget as HTMLElement).style.color = 'rgba(245,242,238,0.4)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <FooterCol title="Link Rapidi" links={navLinks} />
          <FooterCol title="Proprietari" links={proprietariLinks} />
          <FooterCol title="Dove Siamo" links={locationLinks} />
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(245,242,238,0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 11, color: 'rgba(245,242,238,0.2)', lineHeight: 1.8, fontFamily: 'var(--font-raleway)' }}>
            Kenekita è un marchio di SGS Sardinia Global Service — P.I. 02789830904<br />
            Sede legale: Via Gallura 10C, Olbia (SS) &nbsp;|&nbsp; Uffici: Corso Vittorio Veneto 88/A, Olbia (SS)<br />
            © {new Date().getFullYear()} Kenekita. Tutti i diritti riservati.
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
              { label: 'Termini di Servizio', href: '/termini' },
            ].map(item => (
              <Link key={item.label} href={item.href}
                style={{ fontSize: 11, color: 'rgba(245,242,238,0.2)', textDecoration: 'none', fontFamily: 'var(--font-raleway)', transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,242,238,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,242,238,0.2)')}
              >{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,242,238,0.6)', marginBottom: 20, fontFamily: 'var(--font-raleway)' }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map(l => (
          <li key={l.label} style={{ marginBottom: 10 }}>
            <Link href={l.href}
              style={{ fontSize: 13, color: 'rgba(245,242,238,0.35)', textDecoration: 'none', fontFamily: 'var(--font-raleway)', transition: 'color 0.2s', display: 'inline-block' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#B8965A')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,242,238,0.35)')}
            >{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

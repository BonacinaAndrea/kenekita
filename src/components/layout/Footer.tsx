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
    <footer className="bg-[#0a0908] border-t border-[rgba(245,242,238,0.06)]">

      {/* CTA Strip */}
      <div className="border-b border-[rgba(245,242,238,0.06)] px-[5%] py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#B8965A] mb-2.5 font-raleway">
              Hai un immobile in Sardegna?
            </p>
            <h2 className="font-playfair font-normal text-[#F5F2EE] leading-[1.2] text-[clamp(22px,2.5vw,34px)]">
              Affidacelo. Pensiamo a tutto noi.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-shrink-0">
            <Link
              href="/proprietari#contatto"
              className="bg-[#B8965A] text-[#0F0F0E] text-[11px] font-bold tracking-[0.2em] uppercase px-7 py-[13px] no-underline font-raleway whitespace-nowrap text-center"
            >
              Sopralluogo Gratuito
            </Link>
            <Link
              href="/strutture"
              className="bg-transparent text-[#F5F2EE] text-[11px] font-medium tracking-[0.2em] uppercase px-7 py-[13px] no-underline border border-[rgba(245,242,238,0.2)] font-raleway whitespace-nowrap text-center"
            >
              Esplora gli Immobili
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-[5%] pt-16 pb-12">
        {/* Grid: 1 col mobile → 2 col sm → 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-[60px] mb-16">

          {/* Brand column */}
          <div>
            <div className="font-bbh text-[22px] font-normal tracking-[0.08em] text-[#F5F2EE] mb-1.5">KeneKita</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#B8965A] mb-5 font-raleway">
              Co-Hosting &amp; Property Management
            </div>
            <p className="text-[13px] text-[rgba(245,242,238,0.4)] leading-[1.75] mb-7 font-raleway">
              Il tuo partner di fiducia per affitti turistici in Sardegna. Professionalità, esperienza e passione dal 2015.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2 mb-7">
              {[
                { href: 'tel:+393791502073', label: '+39 379 150 2073' },
                { href: 'tel:+393793061937', label: '+39 379 306 1937' },
                { href: 'mailto:info@kenekita.com', label: 'info@kenekita.com' },
              ].map(c => (
                <a
                  key={c.href} href={c.href}
                  className="text-[13px] text-[rgba(245,242,238,0.4)] no-underline font-raleway transition-colors duration-200 hover:text-[#B8965A]"
                >{c.label}</a>
              ))}
              <span className="text-[13px] text-[rgba(245,242,238,0.3)] font-raleway">Via Gallura 10C, 07026 Olbia (SS)</span>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map(s => (
                <a
                  key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-[38px] h-[38px] border border-[rgba(245,242,238,0.12)] flex items-center justify-center text-[rgba(245,242,238,0.4)] no-underline transition-all duration-200 hover:border-[rgba(184,150,90,0.5)] hover:text-[#B8965A]"
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

        {/* Bottom bar */}
        <div className="border-t border-[rgba(245,242,238,0.06)] pt-7 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div className="text-[11px] text-[rgba(245,242,238,0.2)] leading-[1.8] font-raleway">
            Kenekita è un marchio di SGS Sardinia Global Service — P.I. 02789830904<br />
            Sede legale: Via Gallura 10C, Olbia (SS) &nbsp;|&nbsp; Uffici: Corso Vittorio Veneto 88/A, Olbia (SS)<br />
            © {new Date().getFullYear()} Kenekita. Tutti i diritti riservati.
          </div>
          <div className="flex flex-wrap gap-5">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
              { label: 'Termini di Servizio', href: '/termini' },
            ].map(item => (
              <Link
                key={item.label} href={item.href}
                className="text-[11px] text-[rgba(245,242,238,0.2)] no-underline font-raleway whitespace-nowrap transition-colors duration-200 hover:text-[rgba(245,242,238,0.5)]"
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
      <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[rgba(245,242,238,0.6)] mb-5 font-raleway">{title}</div>
      <ul className="list-none p-0 m-0">
        {links.map(l => (
          <li key={l.label} className="mb-2.5">
            <Link
              href={l.href}
              className="text-[13px] text-[rgba(245,242,238,0.35)] no-underline font-raleway transition-colors duration-200 hover:text-[#B8965A] inline-block"
            >{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

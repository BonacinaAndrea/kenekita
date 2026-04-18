'use client'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Main gradient overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.7) 100%)' }}
      />

      {/* Gold tint bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(184,150,90,0.08) 0%, transparent 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[5] text-center px-5 pt-28 md:pt-32">
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#B8965A] mb-5 md:mb-6 font-raleway">
          Co-Hosting &amp; Property Management
        </p>
        <h1 className="font-playfair font-normal leading-[1.1] text-[#F5F2EE] mb-4 md:mb-5 text-[clamp(36px,6vw,78px)]">
          Ville e Appartamenti<br />
          <em className="italic text-[#E8DDD0]">in Sardegna</em>
        </h1>
        <p className="text-[14px] font-light text-[rgba(245,242,238,0.55)] max-w-[480px] mx-auto mb-8 md:mb-9 leading-[1.7] font-raleway">
          Per chi cerca la vacanza ideale, per chi vuole trasformare la propria casa in un&apos;opportunità.
        </p>

        {/* CTA buttons — column on mobile, row on md+ */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
          <Link
            href="/strutture"
            className="bg-[#B8965A] text-[#0F0F0E] text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-[14px] no-underline w-[220px] md:w-auto text-center font-raleway transition-opacity hover:opacity-90"
          >
            Prenota
          </Link>
          <Link
            href="/strutture"
            className="bg-transparent text-[#F5F2EE] text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-[14px] border border-[rgba(245,242,238,0.3)] no-underline w-[220px] md:w-auto text-center font-raleway transition-colors hover:border-[rgba(245,242,238,0.6)]"
          >
            Scopri gli Immobili
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[rgba(245,242,238,0.4)] font-raleway">Scorri</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #B8965A, transparent)' }} />
      </div>
    </section>
  )
}

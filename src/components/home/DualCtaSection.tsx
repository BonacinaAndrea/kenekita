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
    /* Mobile: single column stack; md+: 2-col side by side */
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-[3px] bg-[#0a0908]">
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
        sub="Gestione completa e rendita garantita per la tua proprietà. Zero preoccupazioni."
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

function Card({ tag, title, sub, items, cta, href, image, delay, inView }: {
  tag: string; title: string; sub: string; items: string[]; cta: string;
  href: string; image: string; delay: number; inView: boolean
}) {
  return (
    <div
      className="relative min-h-[480px] md:min-h-[580px] overflow-hidden flex items-end"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s ${delay}s, transform 0.8s ${delay}s`,
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to top, rgba(5,5,4,0.97) 0%, rgba(5,5,4,0.75) 45%, rgba(5,5,4,0.3) 75%, rgba(5,5,4,0.15) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] w-full px-8 py-14 md:px-14 md:py-16">
        <span className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase text-[#B8965A] border border-[rgba(184,150,90,0.4)] px-3.5 py-[5px] mb-7 font-raleway">
          {tag}
        </span>
        <h2 className="font-playfair font-normal leading-[1.2] mb-4 text-[#F5F2EE] whitespace-pre-line text-[clamp(28px,3.5vw,48px)]">
          {title}
        </h2>
        <p className="text-[14px] text-[rgba(245,242,238,0.55)] leading-[1.75] mb-8 max-w-[400px] font-raleway">
          {sub}
        </p>
        <ul className="list-none p-0 mb-10">
          {items.map(item => (
            <li
              key={item}
              className="text-[13px] text-[rgba(245,242,238,0.75)] py-2 flex items-center gap-3 border-b border-[rgba(245,242,238,0.07)] font-raleway"
            >
              <span className="w-4 h-px bg-[#B8965A] inline-block flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="bg-[#B8965A] text-[#0F0F0E] text-[11px] font-semibold tracking-[0.2em] uppercase px-9 py-[15px] no-underline inline-block font-raleway transition-opacity hover:opacity-90"
        >
          {cta}
        </Link>
      </div>
    </div>
  )
}

'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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

const ospiti = [
  { title:'Accoglienza Premium', text:'Ti accogliamo personalmente e ti accompagniamo alla scoperta della tua casa vacanza e dei dintorni.', img:'/images/servizi/01.jpg' },
  { title:'Pulizie Impeccabili', text:'Ogni immobile è preparato con cura maniacale per garantirti il massimo comfort e igiene.', img:'/images/servizi/02.jpg' },
  { title:'Assistenza 24/7', text:'Un team dedicato sempre disponibile per qualsiasi necessità durante il tuo soggiorno.', img:'/images/servizi/03.jpg' },
  { title:'Sicurezza Garantita', text:'Immobili certificati e verificati per una vacanza senza pensieri.', img:'/images/servizi/04.jpg' },
]

const proprietari = [
  { title:'Gestione Prenotazioni', text:'Ottimizziamo le tue entrate con strategie di pricing dinamico e marketing professionale.', img:'/images/og/01.jpg' },
  { title:'Manutenzione Completa', text:'Pulizie, check-in/out, piccole riparazioni e gestione delle emergenze.', img:'/images/og/02.jpg' },
  { title:'Burocrazia Semplificata', text:'Gestiamo contratti, tasse turistiche e conformità alle normative locali.', img:'/images/og/03.jpg' },
  { title:'Marketing Professionale', text:'Foto professionali, testi accattivanti e presenza sui migliori portali turistici.', img:'/images/og/04.jpg' },
]

function ServiceCard({ s, delay, inView, fromLeft }: { s: typeof ospiti[0]; delay: number; inView: boolean; fromLeft: boolean }) {
  return (
    <div
      className="bg-[#1a1917] rounded-[10px] overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : `translateX(${fromLeft ? '-60px' : '60px'})`,
        transition: `opacity 0.7s ${delay}s, transform 0.7s ${delay}s`,
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image src={s.img} alt={s.title} fill unoptimized className="object-cover" />
        <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }} />
      </div>
      <div className="px-5 pt-[18px] pb-[22px]">
        <div className="w-6 h-px bg-[#B8965A] mb-3" />
        <h3 className="font-playfair text-[16px] font-normal text-[#F5F2EE] mb-2 leading-[1.3]">{s.title}</h3>
        <p className="text-[12px] text-[rgba(245,242,238,0.5)] leading-[1.7] font-raleway">{s.text}</p>
      </div>
    </div>
  )
}

function ServiceBlock({ tag, title, sub, services, bg, mirror }: {
  tag: string; title: string; sub: string; services: typeof ospiti; bg: string; mirror: boolean
}) {
  const { ref, inView } = useInView()

  const textBlock = (
    <div
      className="md:sticky md:top-[120px]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.7s, transform 0.7s',
      }}
    >
      <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#B8965A] mb-[18px] font-raleway">{tag}</p>
      <h2 className="font-playfair font-normal leading-[1.2] text-[#F5F2EE] mb-5 text-[clamp(26px,2.8vw,42px)]">{title}</h2>
      <p className="text-[14px] text-[rgba(245,242,238,0.5)] leading-[1.8] font-raleway">{sub}</p>
    </div>
  )

  /* On mobile: single column, all 4 cards stacked. On md+: 2-col staggered layout */
  const cardsBlock = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
      {/* Left column */}
      <div className="flex flex-col gap-5">
        <ServiceCard s={services[0]} delay={0.1} inView={inView} fromLeft={!mirror} />
        <ServiceCard s={services[2]} delay={0.3} inView={inView} fromLeft={!mirror} />
      </div>
      {/* Right column — offset down on md+ */}
      <div className="flex flex-col gap-5 sm:mt-[120px]">
        <ServiceCard s={services[1]} delay={0.2} inView={inView} fromLeft={mirror} />
        <ServiceCard s={services[3]} delay={0.4} inView={inView} fromLeft={mirror} />
      </div>
    </div>
  )

  return (
    <section ref={ref} className="px-[5%] py-[110px]" style={{ background: bg }}>
      {/* Mobile: text first, then cards. md+: side-by-side (mirrored or not) */}
      <div className={[
        'flex flex-col gap-12 md:grid md:gap-20 md:items-start',
        mirror ? 'md:grid-cols-[1.6fr_1fr]' : 'md:grid-cols-[1fr_1.6fr]',
      ].join(' ')}>
        {mirror
          ? <>{cardsBlock}{textBlock}</>
          : <>{textBlock}{cardsBlock}</>
        }
      </div>
    </section>
  )
}

export default function ServicesSection() {
  return (
    <>
      <ServiceBlock
        tag="Servizi per Ospiti"
        title="La tua vacanza perfetta inizia con la nostra attenzione"
        sub="Ogni dettaglio è curato per garantirti un'esperienza autentica e indimenticabile in Sardegna."
        services={ospiti}
        bg="#0F0F0E"
        mirror={false}
      />
      <ServiceBlock
        tag="Servizi per Proprietari"
        title="Affidaci il tuo immobile e rilassati"
        sub="Massimizziamo i tuoi guadagni mentre gestiamo ogni aspetto della tua proprietà."
        services={proprietari}
        bg="#0a0908"
        mirror={true}
      />
    </>
  )
}

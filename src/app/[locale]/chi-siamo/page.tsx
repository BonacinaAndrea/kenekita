'use client'
import Image from 'next/image'
import { useEffect, useRef, useState, useCallback } from 'react'

const valori = [
  { title:'Autenticità', text:'Vivere la Sardegna autentica è il cuore della nostra offerta. Selezioniamo alloggi che riflettono il vero spirito dell\'isola, offrendoti un\'immersione profonda nella sua cultura, tradizioni e paesaggi mozzafiato.', img:'/images/chi-siamo/autenticita.jpg', from:'left' },
  { title:'Comfort', text:'I tuoi comfort e la tua soddisfazione sono la nostra priorità. Gli alloggi che proponiamo sono curati nei minimi dettagli, garantendo standard elevati di qualità e convenienza.', img:'/images/chi-siamo/comfort.jpg', from:'right' },
  { title:'Supporto', text:'La nostra assistenza clienti è sempre pronta e disponibile. Dalla pianificazione del tuo viaggio alla fine del tuo soggiorno, siamo qui per aiutarti in ogni momento.', img:'/images/chi-siamo/supporto.jpg', from:'left' },
  { title:'Esclusività', text:'Offriamo esperienze che non troverai altrove. Dai tour guidati in luoghi nascosti dell\'isola a esperienze culinarie locali, ci impegniamo a fornire attività esclusive e indimenticabili.', img:'/images/chi-siamo/esclusivita.jpg', from:'right' },
  { title:'Pulizia', text:'La tua sicurezza è fondamentale. Seguiamo rigorosi standard di pulizia e manutenzione per garantire che ogni alloggio sia non solo confortevole, ma anche sicuro e igienico.', img:'/images/chi-siamo/pulizia.jpg', from:'left' },
  { title:'Personalizzazione', text:'Ogni viaggio è unico, proprio come i nostri clienti. Offriamo servizi personalizzati per adattarci perfettamente alle tue esigenze e preferenze.', img:'/images/chi-siamo/personalizzazione.jpg', from:'right' },
]

function ValoreCard({ v, index }: { v: typeof valori[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [entered, setEntered] = useState(false)
  const [magX, setMagX] = useState(0)
  const [magY, setMagY] = useState(0)
  const animRef = useRef<number>(0)
  const targetX = useRef(0)
  const targetY = useRef(0)
  const currentX = useRef(0)
  const currentY = useRef(0)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true)
        setTimeout(() => setEntered(true), 1400 + index * 150)
      }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [index])

  const loop = useCallback(() => {
    currentX.current += (targetX.current - currentX.current) * 0.08
    currentY.current += (targetY.current - currentY.current) * 0.08
    setMagX(currentX.current)
    setMagY(currentY.current)
    animRef.current = requestAnimationFrame(loop)
  }, [])

  const handleMouseEnter = () => {
    if (!entered) return
    cancelAnimationFrame(animRef.current)
    animRef.current = requestAnimationFrame(loop)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!entered) return
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    targetX.current = (e.clientX - cx) / rect.width * 22
    targetY.current = (e.clientY - cy) / rect.height * 22
  }

  const handleMouseLeave = () => {
    targetX.current = 0
    targetY.current = 0
    setTimeout(() => {
      cancelAnimationFrame(animRef.current)
      setMagX(0)
      setMagY(0)
    }, 500)
  }

  const fromLeft = v.from === 'left'

  const entryTransform = !inView
    ? `translateX(${fromLeft ? '-100px' : '100px'}) rotate(${fromLeft ? '-5deg' : '5deg'})`
    : 'translateX(0) rotate(0deg)'

  const magnetTransform = entered
    ? `translateX(${magX}px) translateY(${magY}px)`
    : 'translateX(0) translateY(0)'

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-[10px] cursor-default"
      style={{
        height: 440,
        opacity: inView ? 1 : 0,
        transform: entered ? magnetTransform : entryTransform,
        transition: entered
          ? 'transform 0.05s linear'
          : `opacity 1.2s ${index * 0.15}s ease, transform 1.2s ${index * 0.15}s cubic-bezier(0.34,1.2,0.64,1)`,
        willChange: 'transform',
      }}
    >
      <Image src={v.img} alt={v.title} fill unoptimized className="object-cover" />
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to top, rgba(5,5,4,0.96) 0%, rgba(5,5,4,0.45) 55%, rgba(5,5,4,0.1) 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 z-[2] px-8 py-7">
        <div className="w-6 h-px bg-[#B8965A] mb-3" />
        <h3 className="font-playfair text-[26px] font-normal text-[#F5F2EE] mb-2.5 leading-[1.2]">{v.title}</h3>
        <p className="text-[13px] text-[rgba(245,242,238,0.65)] leading-[1.75] font-raleway font-light">{v.text}</p>
      </div>
    </div>
  )
}

export default function ChiSiamoPage() {
  const storyRef = useRef<HTMLDivElement>(null)
  const [storyInView, setStoryInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStoryInView(true) }, { threshold: 0.2 })
    if (storyRef.current) obs.observe(storyRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <main className="bg-[#0F0F0E] min-h-screen pt-[100px]">

      {/* Storia — mobile: photo top, text below; md+: 2-col side by side */}
      <section ref={storyRef} className="px-[5%] py-[80px]">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-20 md:items-center max-w-[1300px] mx-auto">
          {/* Photo */}
          <div
            className="relative overflow-hidden rounded-[10px] w-full"
            style={{
              aspectRatio: '4/5',
              opacity: storyInView ? 1 : 0,
              transform: storyInView ? 'translateX(0)' : 'translateX(-60px)',
              transition: 'opacity 1s, transform 1s',
            }}
          >
            <Image src="/images/chi-siamo/team.jpg" alt="Il Team Kenekita" fill unoptimized className="object-cover" />
          </div>

          {/* Text */}
          <div
            style={{
              opacity: storyInView ? 1 : 0,
              transform: storyInView ? 'translateX(0)' : 'translateX(60px)',
              transition: 'opacity 1s 0.2s, transform 1s 0.2s',
            }}
          >
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#B8965A] mb-5 font-raleway">
              La Nostra Storia
            </p>
            <h2 className="font-playfair font-normal text-[#F5F2EE] mb-8 leading-[1.15] text-[clamp(28px,4vw,56px)]">
              Nata nel 2019
            </h2>
            <p className="text-[16px] md:text-[17px] text-[rgba(245,242,238,0.6)] leading-[1.9] mb-6 font-raleway font-light">
              Nata nel 2019, la nostra azienda trae origine dall&apos;esperienza decennale dei suoi fondatori nel campo della gestione immobiliare. Siamo specializzati nella gestione di proprietà immobiliari di terzi, concentrando il nostro expertise sulle locazioni turistiche brevi.
            </p>
            <p className="text-[16px] md:text-[17px] text-[rgba(245,242,238,0.6)] leading-[1.9] font-raleway font-light">
              Dalle affascinanti ville con vista sul mare cristallino, agli accoglienti appartamenti nel cuore delle storiche cittadine sarde, offriamo una gamma di opzioni per adattarsi ad ogni esigenza e desiderio.
            </p>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="px-[5%] pt-[60px] pb-[100px]">
        <div className="text-center mb-[70px]">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#B8965A] mb-4 font-raleway">
            Perché prenotare con noi
          </p>
          <h2 className="font-playfair font-normal text-[#F5F2EE] leading-[1.2] text-[clamp(24px,4vw,52px)]">
            Ogni dettaglio è pensato per offrirti<br className="hidden sm:block" />
            un&apos;esperienza unica e indimenticabile
          </h2>
        </div>
        {/* Mobile: 1 col; sm: 2 col; lg: 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1300px] mx-auto">
          {valori.map((v, i) => <ValoreCard key={v.title} v={v} index={i} />)}
        </div>
      </section>

      {/* Missione */}
      <section className="px-[5%] py-[100px] bg-[#0a0908] text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#B8965A] mb-5 font-raleway">
            La nostra Missione
          </p>
          <h2 className="font-playfair font-normal text-[#F5F2EE] mb-8 leading-[1.2] text-[clamp(24px,4vw,52px)]">
            Rendere ogni soggiorno in Sardegna<br />
            <em className="italic text-[#E8DDD0]">un&apos;esperienza eccezionale</em>
          </h2>
          <p className="text-[16px] md:text-[17px] text-[rgba(245,242,238,0.6)] leading-[1.9] mb-6 font-raleway font-light">
            In KeneKita, la nostra missione è semplice ma fondamentale: rendere ogni soggiorno in Sardegna un&apos;esperienza eccezionale e indimenticabile.
          </p>
          <p className="text-[16px] md:text-[17px] text-[rgba(245,242,238,0.6)] leading-[1.9] font-raleway font-light">
            Crediamo fermamente nel potere di un viaggio di trasformare non solo il modo in cui vediamo il mondo, ma anche come viviamo la nostra vita.
          </p>
        </div>
      </section>

    </main>
  )
}

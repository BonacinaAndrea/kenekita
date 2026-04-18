import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ville e Appartamenti in Sardegna — Kenekita',
  description: 'Scopri le nostre ville e appartamenti selezionati in Sardegna. Palau, Porto Rotondo, Porto Cervo, Stintino, Olbia.',
}

const BEDDY_URL = 'https://kenekita.beddy.io/#/(beddy:home)?lang=it'

const properties = [
  { slug:'villa-i-lecci', name:'Villa I Lecci', location:'Palau, Vicino Porto Pollo', tag:'Villa', desc:'Splendida villa con vista giardino, inserita nel contesto naturale tipico sardo. Gli ospiti saranno immersi nei suoni e silenzi della campagna gallurese.', services:['3 Camere da Letto','Giardino con Arredamento','Barbecue','Doccia Esterna','WiFi Gratuito','Parcheggio Privato'], tags:['Aria Condizionata','45 min da Olbia'], img:'/images/strutture/villa-i-lecci/hero.jpg' },
  { slug:'gardenia-luxury', name:'Gardenia Luxury', location:'Palau', tag:'Appartamento', desc:'Splendido appartamento con patio bordo piscina e giardino, inserito in un residence di pregio nella città di Palau. Contesto di lusso e raffinatezza.', services:['2 Camere da Letto','2 Bagni','Piscina','Vasca Idromassaggio','Patio Privato','Aria Condizionata'], tags:['WiFi Gratuito','Vicino alla Spiaggia'], img:'/images/strutture/gardenia-luxury/hero.jpg' },
  { slug:'dream-the-sea', name:'Dream the Sea', location:'Porto Rotondo, Punta Lada', tag:'Villa', desc:'Appartamento di lusso con patio esterno arredato e vista mare, inserito nel residence di pregio Il Poggio nella zona esclusiva di Punta Lada.', services:['2 Camere da Letto','2 Bagni','Vista Mare','Piscina','Campo da Tennis','Parcheggio Privato'], tags:['WiFi Gratuito','20 min da Olbia'], img:'/images/strutture/dream-the-sea/hero.jpg' },
  { slug:'haven-of-harbour', name:'Haven of Harbour', location:'Porto Rotondo Centro', tag:'Appartamento', desc:'Elegante appartamento al centro di Porto Rotondo con veranda esterna arredata e superba vista sul porto turistico.', services:['2 Camere da Letto','1 Bagno','Vista Porto','Veranda Arredata','Aria Condizionata','WiFi Gratuito'], tags:['Parcheggio Privato','Design Moderno'], img:'/images/strutture/haven-of-harbour/hero.jpg' },
  { slug:'sunset-blu-house', name:'Sunset Blu House', location:'Porto Rotondo, Punta Lada', tag:'Appartamento', desc:'Appartamento di lusso con veranda esterna arredata e superba vista su Porto Rotondo e mare, nel residence di pregio Il Poggio.', services:['2 Camere da Letto','2 Bagni','Vista Mare Panoramica','Piscina','Campo da Tennis','Veranda Arredata'], tags:['WiFi Gratuito','20 min da Olbia'], img:'/images/og/01.jpg' },
  { slug:'maison-des-arches', name:'Maison des Arches', location:'Porto Cervo Centro', tag:'Villa', desc:'Luminoso appartamento con ampia veranda inserito nel contesto esclusivo della Piazzetta degli Archi di Porto Cervo.', services:['1 Camera da Letto','1 Bagno Design','Veranda Ampia','Centro Porto Cervo','Aria Condizionata','WiFi Gratuito'], tags:['Shopping & Movida','45 min da Olbia'], img:'/images/strutture/maison-des-arches/hero.jpg' },
  { slug:'dream-on-the-sea-stintino', name:'Dream on the Sea Stintino', location:'Stintino, La Pelosa', tag:'Villa', desc:'Appartamento nei pressi della famosa spiaggia della Pelosa, con veranda esterna e pregevole vista mare e torre.', services:['2 Camere da Letto','1 Bagno','Vista Mare','100m dal Mare','Patio Coperto','Aria Condizionata'], tags:['WiFi Gratuito','Vicino La Pelosa'], img:'/images/og/02.jpg' },
  { slug:'profumo-di-sardegna', name:'Profumo di Sardegna', location:'Porto Istana, Olbia', tag:'Appartamento', desc:'Splendido villino indipendente immerso nella vegetazione mediterranea, a pochi minuti dalla spiaggia di Porto Istana.', services:['2 Camere da Letto','2 Bagni','Doccia Esterna','Aria Condizionata','WiFi Gratuito','Giardino Mediterraneo'], tags:['Vicino alla Spiaggia','Vicino a Olbia'], img:'/images/og/03.jpg' },
]

export default function StrutturePage() {
  return (
    <main className="bg-[#0F0F0E] min-h-screen">

      {/* Hero video */}
      <div className="relative overflow-hidden" style={{ height: '70vh', minHeight: 400 }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/strutture.mp4" type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(15,15,14,0.82) 100%)' }} />
        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-[5%]">
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#B8965A] mb-5 font-raleway">
            Le Nostre Proprietà
          </p>
          <h1 className="font-playfair font-normal text-[#F5F2EE] leading-[1.1] text-[clamp(32px,6vw,80px)]">
            Ville e Appartamenti<br />
            <em className="italic text-[#E8DDD0]">in Sardegna</em>
          </h1>
        </div>
      </div>

      {/* Property list */}
      <div className="flex flex-col gap-[3px]">
        {properties.map((p, i) => {
          const imgLeft = i % 2 === 0
          return (
            <div key={p.slug} className="bg-[#141412]">
              {/*
                Mobile: photo on top, text below (flex-col)
                md+: side-by-side 2-col grid
              */}
              <div className={[
                'flex flex-col md:grid md:grid-cols-2 md:min-h-[520px]',
              ].join(' ')}>

                {/* Image */}
                <div className={[
                  'relative overflow-hidden',
                  'h-[260px] md:h-auto',           // fixed height on mobile, auto on desktop
                  imgLeft ? 'md:order-first' : 'md:order-last',
                ].join(' ')}>
                  <Image
                    src={p.img} alt={p.name} fill unoptimized
                    className="object-cover transition-transform duration-[800ms] ease-out"
                  />
                  {/* Fade edge toward text — desktop only */}
                  <div className="hidden md:block absolute inset-0 z-[1]"
                    style={{ background: imgLeft
                      ? 'linear-gradient(to right, transparent 55%, #141412 100%)'
                      : 'linear-gradient(to left, transparent 55%, #141412 100%)' }}
                  />
                  <span className="absolute top-4 left-4 md:top-6 md:left-6 z-[2] text-[10px] font-bold tracking-[0.2em] uppercase text-[#F5F2EE] bg-[rgba(184,150,90,0.9)] px-3.5 py-1.5">
                    {p.tag}
                  </span>
                </div>

                {/* Content */}
                <div className={[
                  'flex flex-col justify-center px-6 py-10 md:px-16 md:py-16',
                  imgLeft ? 'md:order-last' : 'md:order-first',
                ].join(' ')}>
                  <div className="flex items-center gap-2 mb-3.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-[13px] text-[#B8965A] tracking-[0.12em] uppercase font-raleway">{p.location}</span>
                  </div>
                  <h2 className="font-playfair font-normal text-[#F5F2EE] mb-4 leading-[1.15] text-[clamp(24px,3vw,48px)]">
                    {p.name}
                  </h2>
                  <p className="text-[15px] md:text-[16px] text-[rgba(245,242,238,0.6)] leading-[1.8] mb-7 font-raleway font-light">
                    {p.desc}
                  </p>

                  {/* Services */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 mb-6">
                    {p.services.map(s => (
                      <div key={s} className="flex items-center gap-2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2" className="flex-shrink-0">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-[13px] md:text-[14px] text-[rgba(245,242,238,0.75)] font-raleway">{s}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map(t => (
                      <span key={t} className="text-[12px] px-3.5 py-1 rounded-[20px] border border-[rgba(184,150,90,0.4)] text-[#B8965A] font-raleway">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={BEDDY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#B8965A] text-[#0F0F0E] text-[12px] font-semibold tracking-[0.18em] uppercase px-8 py-[15px] no-underline inline-block font-raleway text-center transition-opacity hover:opacity-90"
                    >
                      Verifica Disponibilità
                    </a>
                    <Link
                      href={`/strutture/${p.slug}`}
                      className="bg-transparent text-[#F5F2EE] text-[12px] font-medium tracking-[0.18em] uppercase px-8 py-[15px] no-underline inline-block border border-[rgba(245,242,238,0.25)] font-raleway text-center transition-colors hover:border-[rgba(245,242,238,0.5)]"
                    >
                      Scopri di più
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </main>
  )
}

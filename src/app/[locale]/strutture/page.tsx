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
    <main style={{ background:'#0F0F0E', minHeight:'100vh' }}>

      {/* Hero video */}
      <div style={{ position:'relative', height:'70vh', minHeight:500, overflow:'hidden' }}>
        <video autoPlay muted loop playsInline style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0 }}>
          <source src="/videos/strutture.mp4" type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(15,15,14,0.82) 100%)', zIndex:1 }} />
        <div style={{ position:'absolute', inset:0, zIndex:2, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'0 5%' }}>
          <p style={{ fontSize:11, fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'#B8965A', marginBottom:20, fontFamily:'var(--font-raleway)' }}>Le Nostre Proprietà</p>
          <h1 style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(40px,6vw,80px)', fontWeight:400, color:'#F5F2EE', lineHeight:1.1 }}>
            Ville e Appartamenti<br/><em style={{ fontStyle:'italic', color:'#E8DDD0' }}>in Sardegna</em>
          </h1>
        </div>
      </div>

      {/* Lista ville */}
      <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
        {properties.map((p, i) => {
          const imgLeft = i % 2 === 0
          return (
            <div key={p.slug} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:520, background:'#141412' }}>

              {/* Immagine */}
              <div style={{ order: imgLeft ? 0 : 1, position:'relative', overflow:'hidden' }}>
                <Image src={p.img} alt={p.name} fill unoptimized style={{ objectFit:'cover', transition:'transform 0.8s ease' }} />
                <div style={{ position:'absolute', inset:0, background: imgLeft ? 'linear-gradient(to right, transparent 55%, #141412 100%)' : 'linear-gradient(to left, transparent 55%, #141412 100%)', zIndex:1 }} />
                <span style={{ position:'absolute', top:24, left:24, zIndex:2, fontSize:10, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'#F5F2EE', background:'rgba(184,150,90,0.9)', padding:'6px 14px' }}>{p.tag}</span>
              </div>

              {/* Contenuto */}
              <div style={{ order: imgLeft ? 1 : 0, padding:'64px 72px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
                <div style={{ display:'flex', alignItems:'center', gap:7, marginBottom:14 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span style={{ fontSize:13, color:'#B8965A', letterSpacing:'0.12em', textTransform:'uppercase', fontFamily:'var(--font-raleway)' }}>{p.location}</span>
                </div>
                <h2 style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(28px,3vw,48px)', fontWeight:400, color:'#F5F2EE', marginBottom:18, lineHeight:1.15 }}>{p.name}</h2>
                <p style={{ fontSize:16, color:'rgba(245,242,238,0.6)', lineHeight:1.8, marginBottom:28, fontFamily:'var(--font-raleway)', fontWeight:300 }}>{p.desc}</p>

                {/* Servizi */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px 20px', marginBottom:24 }}>
                  {p.services.map(s => (
                    <div key={s} style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="2" style={{flexShrink:0}}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      <span style={{ fontSize:14, color:'rgba(245,242,238,0.75)', fontFamily:'var(--font-raleway)' }}>{s}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:32 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize:12, padding:'4px 14px', borderRadius:20, border:'1px solid rgba(184,150,90,0.4)', color:'#B8965A', fontFamily:'var(--font-raleway)' }}>{t}</span>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                  <a
                    href={BEDDY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background:'#B8965A', color:'#0F0F0E', fontSize:12, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', padding:'15px 32px', textDecoration:'none', display:'inline-block', fontFamily:'var(--font-raleway)' }}
                  >
                    Verifica Disponibilità
                  </a>
                  <Link
                    href={`/strutture/${p.slug}`}
                    style={{ background:'transparent', color:'#F5F2EE', fontSize:12, fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', padding:'15px 32px', textDecoration:'none', display:'inline-block', border:'1px solid rgba(245,242,238,0.25)', fontFamily:'var(--font-raleway)' }}
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>

            </div>
          )
        })}
      </div>

    </main>
  )
}

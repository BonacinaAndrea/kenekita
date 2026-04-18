import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PropertyDetail from './PropertyDetail'

const properties = [
  {
    slug:'villa-i-lecci', name:'Villa I Lecci', location:'Palau, Vicino Porto Pollo', tag:'Villa',
    desc:'Splendida villa con vista giardino, inserita nel contesto naturale tipico sardo. Gli ospiti saranno immersi nei suoni e silenzi della campagna gallurese. La villa dispone di ampi spazi esterni con giardino curato, zona barbecue e doccia esterna, perfetti per le calde serate sarde.',
    longDesc:'Immersa nella macchia mediterranea della Gallura, Villa I Lecci è un rifugio autentico a pochi minuti dalle spiagge di Porto Pollo e Palau. La struttura combina il comfort moderno con l\'atmosfera genuina della campagna sarda: profumo di lentisco, canto delle cicale, tramonti infuocati.',
    services:['3 Camere da Letto','2 Bagni','Giardino con Arredamento','Barbecue','Doccia Esterna','WiFi Gratuito','Parcheggio Privato','Aria Condizionata'],
    tags:['Aria Condizionata','45 min da Olbia','Vicino Porto Pollo'],
    images:['/images/strutture/villa-i-lecci/hero.jpg','/images/strutture/villa-i-lecci/01.jpg','/images/strutture/villa-i-lecci/02.jpg','/images/strutture/villa-i-lecci/03.jpg','/images/strutture/villa-i-lecci/04.jpg'],
    guests:6, bedrooms:3, bathrooms:2, sqm:120,
  },
  {
    slug:'gardenia-luxury', name:'Gardenia Luxury', location:'Palau', tag:'Appartamento',
    desc:'Splendido appartamento con patio bordo piscina e giardino, inserito in un residence di pregio nella città di Palau. Contesto di lusso e raffinatezza.',
    longDesc:'Nel cuore di Palau, Gardenia Luxury offre un\'esperienza di soggiorno esclusiva con accesso diretto alla piscina del residence. Il patio privato bordo piscina è il luogo ideale per colazioni al sole e aperitivi al tramonto, a pochi passi dal centro e dal porto.',
    services:['2 Camere da Letto','2 Bagni','Piscina','Vasca Idromassaggio','Patio Privato','Aria Condizionata','WiFi Gratuito','Parcheggio'],
    tags:['WiFi Gratuito','Vicino alla Spiaggia','Piscina'],
    images:['/images/strutture/gardenia-luxury/hero.jpg','/images/strutture/gardenia-luxury/01.jpg','/images/strutture/gardenia-luxury/02.jpg','/images/strutture/gardenia-luxury/03.jpg'],
    guests:4, bedrooms:2, bathrooms:2, sqm:85,
  },
  {
    slug:'dream-the-sea', name:'Dream the Sea', location:'Porto Rotondo, Punta Lada', tag:'Villa',
    desc:'Appartamento di lusso con patio esterno arredato e vista mare, inserito nel residence di pregio Il Poggio nella zona esclusiva di Punta Lada.',
    longDesc:'Nel residence Il Poggio di Punta Lada, Dream the Sea è un appartamento di alto livello con vista panoramica sul mare di Porto Rotondo. Il patio esterno arredato è il palcoscenico perfetto per ammirare i colori del tramonto sul Tirreno, mentre la piscina e il campo da tennis completano un\'offerta di lusso senza compromessi.',
    services:['2 Camere da Letto','2 Bagni','Vista Mare','Piscina','Campo da Tennis','Parcheggio Privato','WiFi Gratuito','Aria Condizionata'],
    tags:['WiFi Gratuito','20 min da Olbia','Vista Mare'],
    images:['/images/strutture/dream-the-sea/hero.jpg','/images/strutture/dream-the-sea/01.jpg','/images/strutture/dream-the-sea/02.jpg','/images/strutture/dream-the-sea/03.jpg','/images/strutture/dream-the-sea/04.jpg'],
    guests:4, bedrooms:2, bathrooms:2, sqm:90,
  },
  {
    slug:'haven-of-harbour', name:'Haven of Harbour', location:'Porto Rotondo Centro', tag:'Appartamento',
    desc:'Elegante appartamento al centro di Porto Rotondo con veranda esterna arredata e superba vista sul porto turistico.',
    longDesc:'Affacciato direttamente sul porto turistico di Porto Rotondo, Haven of Harbour è l\'indirizzo ideale per chi vuole vivere la mondanità della Costa Smeralda. La veranda arredata offre una vista privilegiata sulle barche e sul via vai della piazzetta, mentre l\'interno è curato nei minimi dettagli.',
    services:['2 Camere da Letto','1 Bagno','Vista Porto','Veranda Arredata','Aria Condizionata','WiFi Gratuito','Parcheggio Privato'],
    tags:['Parcheggio Privato','Design Moderno','Vista Porto'],
    images:['/images/strutture/haven-of-harbour/hero.jpg','/images/strutture/haven-of-harbour/01.jpg','/images/strutture/haven-of-harbour/02.jpg','/images/strutture/haven-of-harbour/03.jpg'],
    guests:4, bedrooms:2, bathrooms:1, sqm:75,
  },
  {
    slug:'sunset-blu-house', name:'Sunset Blu House', location:'Porto Rotondo, Punta Lada', tag:'Appartamento',
    desc:'Appartamento di lusso con veranda esterna arredata e superba vista su Porto Rotondo e mare, nel residence di pregio Il Poggio.',
    longDesc:'Sunset Blu House prende il nome dai tramonti mozzafiato che si ammirano dalla sua veranda panoramica. Situato nel residence Il Poggio a Punta Lada, offre una vista a 180° su Porto Rotondo e il mare aperto. Piscina, campo da tennis e un\'atmosfera di quiete esclusiva completano l\'esperienza.',
    services:['2 Camere da Letto','2 Bagni','Vista Mare Panoramica','Piscina','Campo da Tennis','Veranda Arredata','WiFi Gratuito','Aria Condizionata'],
    tags:['WiFi Gratuito','20 min da Olbia','Vista Panoramica'],
    images:['/images/strutture/la-perla-bianca/hero.jpg','/images/strutture/la-perla-bianca/01.jpg','/images/strutture/la-perla-bianca/02.jpg','/images/strutture/la-perla-bianca/03.jpg'],
    guests:4, bedrooms:2, bathrooms:2, sqm:88,
  },
  {
    slug:'maison-des-arches', name:'Maison des Arches', location:'Porto Cervo Centro', tag:'Villa',
    desc:'Luminoso appartamento con ampia veranda inserito nel contesto esclusivo della Piazzetta degli Archi di Porto Cervo.',
    longDesc:'Nel cuore pulsante di Porto Cervo, Maison des Arches è un appartamento di charme affacciato sulla celebre Piazzetta degli Archi. Shopping di lusso, ristoranti stellati e la vita notturna della Costa Smeralda sono letteralmente a portata di mano. Un indirizzo unico per chi vuole vivere Porto Cervo dall\'interno.',
    services:['1 Camera da Letto','1 Bagno Design','Veranda Ampia','Centro Porto Cervo','Aria Condizionata','WiFi Gratuito'],
    tags:['Shopping & Movida','45 min da Olbia','Centro Porto Cervo'],
    images:['/images/strutture/maison-des-arches/hero.jpg','/images/strutture/maison-des-arches/01.jpg','/images/strutture/maison-des-arches/02.jpg','/images/strutture/maison-des-arches/03.jpg'],
    guests:2, bedrooms:1, bathrooms:1, sqm:55,
  },
  {
    slug:'dream-on-the-sea-stintino', name:'Dream on the Sea Stintino', location:'Stintino, La Pelosa', tag:'Villa',
    desc:'Appartamento nei pressi della famosa spiaggia della Pelosa, con veranda esterna e pregevole vista mare e torre.',
    longDesc:'A pochi passi dalla spiaggia della Pelosa — una delle più belle del Mediterraneo — Dream on the Sea Stintino è il punto di partenza ideale per esplorare il nord-ovest della Sardegna. La veranda con vista mare e torre aragonese crea un\'atmosfera unica, sospesa tra storia e natura.',
    services:['2 Camere da Letto','1 Bagno','Vista Mare','100m dal Mare','Patio Coperto','Aria Condizionata','WiFi Gratuito'],
    tags:['WiFi Gratuito','Vicino La Pelosa','Vista Torre'],
    images:['/images/strutture/villa-i-lecci/02.jpg','/images/strutture/villa-i-lecci/03.jpg','/images/strutture/villa-i-lecci/04.jpg','/images/strutture/villa-i-lecci/01.jpg'],
    guests:4, bedrooms:2, bathrooms:1, sqm:70,
  },
  {
    slug:'profumo-di-sardegna', name:'Profumo di Sardegna', location:'Porto Istana, Olbia', tag:'Appartamento',
    desc:'Splendido villino indipendente immerso nella vegetazione mediterranea, a pochi minuti dalla spiaggia di Porto Istana.',
    longDesc:'Profumo di Sardegna è un villino indipendente immerso nella macchia mediterranea di Porto Istana, a pochi minuti da Olbia e dalle sue spiagge cristalline. Il giardino mediterraneo profumato di mirto e rosmarino, la doccia esterna e la totale privacy lo rendono un rifugio autentico lontano dalla folla.',
    services:['2 Camere da Letto','2 Bagni','Doccia Esterna','Aria Condizionata','WiFi Gratuito','Giardino Mediterraneo','Parcheggio Privato'],
    tags:['Vicino alla Spiaggia','Vicino a Olbia','Giardino Privato'],
    images:['/images/strutture/gardenia-luxury/02.jpg','/images/strutture/gardenia-luxury/03.jpg','/images/strutture/gardenia-luxury/01.jpg','/images/strutture/gardenia-luxury/hero.jpg'],
    guests:4, bedrooms:2, bathrooms:2, sqm:80,
  },
]

export async function generateStaticParams() {
  return properties.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = properties.find(x => x.slug === slug)
  if (!p) return {}
  return {
    title: `${p.name} — ${p.location} | Kenekita`,
    description: p.desc,
    openGraph: { title: p.name, description: p.desc, images: [p.images[0]] },
  }
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = properties.find(x => x.slug === slug)
  if (!p) notFound()
  const related = properties.filter(x => x.slug !== slug).slice(0, 3)
  return <PropertyDetail property={p} related={related} />
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: number
  img: string
  featured?: boolean
  body: { type: 'p' | 'h2' | 'h3' | 'ul'; content: string | string[] }[]
}

export const posts: Post[] = [
  {
    slug: 'guida-sardegna-nord-estate-2025',
    title: 'Guida alla Sardegna del Nord: le mete imperdibili dell\'estate 2025',
    excerpt: 'Da Palau alla Costa Smeralda, passando per l\'Arcipelago della Maddalena: tutto quello che devi sapere per pianificare la vacanza perfetta nel nord della Sardegna.',
    category: 'Guide di Viaggio',
    date: '2025-04-10',
    readTime: 8,
    img: '/images/hero-homepage.jpg',
    featured: true,
    body: [
      { type: 'p', content: 'Il nord della Sardegna è una delle destinazioni più ambite del Mediterraneo. Acque cristalline, profumi di macchia mediterranea e un\'ospitalità autentica che non si trova altrove. In questa guida ti accompagniamo alla scoperta delle mete imperdibili per l\'estate 2025.' },
      { type: 'h2', content: 'Palau e l\'Arcipelago della Maddalena' },
      { type: 'p', content: 'Palau è il punto di partenza ideale per esplorare l\'Arcipelago della Maddalena, un parco nazionale marino di straordinaria bellezza. Da qui partono i traghetti per La Maddalena e Caprera, dove Garibaldi trascorse gli ultimi anni della sua vita.' },
      { type: 'p', content: 'Le spiagge di Palau — Punta Nera, Talmone, Porto Faro — sono tra le più belle della Gallura. Acque turchesi, granito rosa e vegetazione mediterranea creano paesaggi da cartolina.' },
      { type: 'h2', content: 'Porto Rotondo e la Costa Smeralda' },
      { type: 'p', content: 'Porto Rotondo è una delle perle della Costa Smeralda: un porto turistico esclusivo circondato da ville di lusso e ristoranti di alto livello. La piazzetta è il cuore della vita sociale estiva, con boutique, locali e una vista sul porto che toglie il fiato.' },
      { type: 'h3', content: 'Le spiagge da non perdere' },
      { type: 'ul', content: ['Spiaggia di Punta Lada — sabbia bianca e acque smeraldo', 'Cala di Volpe — la baia più fotografata della Costa Smeralda', 'Spiaggia del Principe — selvaggia e incontaminata', 'Liscia Ruja — la spiaggia più lunga della Costa Smeralda'] },
      { type: 'h2', content: 'Porto Cervo: il cuore della Costa Smeralda' },
      { type: 'p', content: 'Porto Cervo è sinonimo di lusso e mondanità. La Piazzetta degli Archi, lo Yacht Club Costa Smeralda, i ristoranti stellati e le boutique di alta moda fanno di questo borgo uno dei luoghi più esclusivi d\'Europa.' },
      { type: 'p', content: 'Ma Porto Cervo sa anche essere autentica: i vicoli del centro storico, la chiesa di Stella Maris con il suo Miserere di El Greco, i tramonti sul porto raccontano una Sardegna più intima e vera.' },
      { type: 'h2', content: 'Quando andare' },
      { type: 'p', content: 'La stagione ideale va da giugno a settembre. Luglio e agosto sono i mesi più affollati e caldi (fino a 35°C), ma anche i più vivaci. Giugno e settembre offrono un\'esperienza più tranquilla, con prezzi più accessibili e mare ancora caldo.' },
    ],
  },
  {
    slug: 'affitto-turistico-sardegna-guida-proprietari',
    title: 'Affitto turistico in Sardegna: la guida completa per i proprietari',
    excerpt: 'Tutto quello che devi sapere per mettere a reddito il tuo immobile in Sardegna: normative, piattaforme, pricing e gestione operativa.',
    category: 'Consigli per Proprietari',
    date: '2025-03-28',
    readTime: 12,
    img: '/images/hero-proprietari.jpg',
    featured: true,
    body: [
      { type: 'p', content: 'Il mercato degli affitti turistici in Sardegna è in forte crescita. La domanda internazionale è aumentata del 35% negli ultimi tre anni, e i proprietari di immobili ben posizionati possono ottenere rendite significative. Ma come funziona davvero?' },
      { type: 'h2', content: 'Le normative vigenti' },
      { type: 'p', content: 'In Sardegna, le locazioni turistiche brevi (fino a 30 giorni) sono regolate dalla legge regionale n. 16/2017 e successive modifiche. I principali adempimenti riguardano la registrazione dell\'attività, la comunicazione degli ospiti alle autorità di pubblica sicurezza e il versamento della tassa di soggiorno.' },
      { type: 'ul', content: ['Registrazione SCIA (Segnalazione Certificata di Inizio Attività)', 'Comunicazione ospiti tramite portale Alloggiati Web', 'Versamento tassa di soggiorno al Comune', 'Dichiarazione dei redditi da locazione (cedolare secca 21%)'] },
      { type: 'h2', content: 'Le piattaforme di distribuzione' },
      { type: 'p', content: 'Airbnb, Booking.com e VRBO sono le piattaforme principali. Ognuna ha caratteristiche diverse in termini di commissioni, tipologia di ospiti e visibilità. Una strategia multi-canale è sempre la scelta migliore per massimizzare l\'occupazione.' },
      { type: 'h2', content: 'Il pricing dinamico' },
      { type: 'p', content: 'Il pricing dinamico è la chiave per massimizzare i ricavi. I prezzi devono variare in base alla stagione, agli eventi locali, alla domanda del mercato e alla concorrenza. Strumenti come PriceLabs o Wheelhouse permettono di automatizzare questo processo.' },
      { type: 'h2', content: 'Perché affidarsi a un property manager' },
      { type: 'p', content: 'Gestire un affitto turistico richiede tempo, competenze e disponibilità H24. Un property manager professionista come Kenekita si occupa di tutto: dalla fotografia professionale alla gestione degli ospiti, dalla manutenzione alla contabilità. Il risultato? Più guadagni, meno stress.' },
    ],
  },
  {
    slug: 'spiagge-piu-belle-sardegna-nord',
    title: 'Le 10 spiagge più belle della Sardegna del Nord',
    excerpt: 'Una selezione delle spiagge più straordinarie tra Palau, Porto Rotondo, Porto Cervo e Stintino. Con consigli pratici su come raggiungerle.',
    category: 'Guide di Viaggio',
    date: '2025-03-15',
    readTime: 6,
    img: '/images/strutture/dream-the-sea/hero.jpg',
    body: [
      { type: 'p', content: 'La Sardegna del Nord vanta alcune delle spiagge più belle del Mediterraneo. Acque cristalline che vanno dal turchese all\'azzurro intenso, sabbia bianca o granito rosa, vegetazione mediterranea profumata. Ecco la nostra selezione delle 10 spiagge imperdibili.' },
      { type: 'h2', content: '1. Spiaggia della Pelosa — Stintino' },
      { type: 'p', content: 'Considerata una delle spiagge più belle d\'Italia, La Pelosa è un\'oasi di sabbia bianchissima e acque bassissime color smeraldo. La torre aragonese sullo sfondo completa un paesaggio da sogno. Attenzione: l\'accesso è contingentato in alta stagione.' },
      { type: 'h2', content: '2. Cala di Volpe — Costa Smeralda' },
      { type: 'p', content: 'La baia più fotografata della Costa Smeralda. Acque trasparenti, sabbia dorata e il celebre Hotel Carly di Volpe sullo sfondo. Raggiungibile solo via mare o con una lunga camminata.' },
      { type: 'h2', content: '3. Spiaggia del Principe — Costa Smeralda' },
      { type: 'p', content: 'La spiaggia preferita dall\'Aga Khan, che la scelse come sua personale. Selvaggia, incontaminata, raggiungibile solo a piedi attraverso un sentiero di 20 minuti. Ne vale assolutamente la pena.' },
      { type: 'h2', content: '4. Porto Pollo — Palau' },
      { type: 'p', content: 'Il paradiso del kitesurf e del windsurf. Due baie separate da una lingua di sabbia, con venti costanti e acque poco profonde. Ideale per gli sport acquatici ma anche per famiglie con bambini.' },
      { type: 'ul', content: ['5. Liscia Ruja — la più lunga della Costa Smeralda', '6. Capriccioli — tre calette nascoste tra la macchia', '7. Punta Nera — Palau, granito rosa e acque turchesi', '8. Talmone — Palau, spiaggia selvaggia e ventosa', '9. Cala Brandinchi — San Teodoro, la "Tahiti sarda"', '10. Cala Coticcio — Caprera, accessibile solo via mare'] },
    ],
  },
  {
    slug: 'cosa-fare-porto-rotondo',
    title: 'Cosa fare a Porto Rotondo: la guida completa',
    excerpt: 'Ristoranti, spiagge, escursioni e vita notturna a Porto Rotondo. Tutto quello che devi sapere per vivere al meglio questa perla della Costa Smeralda.',
    category: 'Guide di Viaggio',
    date: '2025-02-20',
    readTime: 7,
    img: '/images/strutture/haven-of-harbour/hero.jpg',
    body: [
      { type: 'p', content: 'Porto Rotondo è uno dei borghi più esclusivi della Costa Smeralda. Fondato negli anni \'60 dalla famiglia Donà dalle Rose, è cresciuto fino a diventare uno dei porti turistici più frequentati del Mediterraneo. Ecco la nostra guida completa.' },
      { type: 'h2', content: 'La Piazzetta San Marco' },
      { type: 'p', content: 'Il cuore di Porto Rotondo è la Piazzetta San Marco, con la chiesa di San Lorenzo e i suoi affreschi di Andrea Cascella. Boutique di lusso, bar e ristoranti si affacciano sulla piazza, animata fino a tarda notte in estate.' },
      { type: 'h2', content: 'Le spiagge' },
      { type: 'ul', content: ['Spiaggia di Punta Lada — la più vicina al centro', 'Spiaggia di Ira — sabbia fine e acque cristalline', 'Cala Fico — piccola e raccolta, ideale per lo snorkeling'] },
      { type: 'h2', content: 'I ristoranti' },
      { type: 'p', content: 'Porto Rotondo offre una scelta gastronomica di alto livello. Dal pesce fresco ai piatti della tradizione sarda, passando per la cucina internazionale. I ristoranti sul porto sono i più scenografici, con vista sulle barche e tramonti indimenticabili.' },
      { type: 'h2', content: 'Le escursioni' },
      { type: 'p', content: 'Da Porto Rotondo è facile organizzare escursioni in barca verso le calette più nascoste della Costa Smeralda, verso l\'Arcipelago della Maddalena o verso Tavolara, l\'isola-montagna che si erge dal mare a pochi chilometri dalla costa.' },
    ],
  },
  {
    slug: 'revenue-management-affitti-brevi',
    title: 'Revenue Management per affitti brevi: come massimizzare i guadagni',
    excerpt: 'Strategie di pricing dinamico, gestione della stagionalità e ottimizzazione dei canali di distribuzione per proprietari di immobili turistici in Sardegna.',
    category: 'Consigli per Proprietari',
    date: '2025-02-05',
    readTime: 10,
    img: '/images/strutture/gardenia-luxury/hero.jpg',
    body: [
      { type: 'p', content: 'Il Revenue Management è la disciplina che permette di massimizzare i ricavi di un immobile turistico attraverso una gestione intelligente dei prezzi e della disponibilità. Applicato correttamente, può aumentare i guadagni del 30-50% rispetto a una gestione statica.' },
      { type: 'h2', content: 'I principi base del pricing dinamico' },
      { type: 'p', content: 'Il pricing dinamico si basa su un principio semplice: il prezzo giusto, al momento giusto, per il cliente giusto. In pratica, significa adeguare continuamente i prezzi in base alla domanda, alla concorrenza e agli eventi locali.' },
      { type: 'h2', content: 'La stagionalità in Sardegna' },
      { type: 'ul', content: ['Alta stagione (luglio-agosto): prezzi massimi, occupazione quasi garantita', 'Spalla alta (giugno, settembre): ottimo rapporto qualità-prezzo', 'Bassa stagione (ottobre-maggio): prezzi ridotti, target diverso (smart working, pensionati, coppie)'] },
      { type: 'h2', content: 'Gli strumenti del mestiere' },
      { type: 'p', content: 'Strumenti come PriceLabs, Wheelhouse e Beyond Pricing permettono di automatizzare il pricing dinamico, analizzando in tempo reale i dati di mercato e adeguando i prezzi di conseguenza. L\'investimento si ripaga in pochi mesi.' },
      { type: 'h2', content: 'La gestione dei canali' },
      { type: 'p', content: 'Una strategia multi-canale — Airbnb, Booking.com, VRBO, sito diretto — permette di raggiungere diversi segmenti di mercato e ridurre la dipendenza da una singola piattaforma. Le prenotazioni dirette, in particolare, eliminano le commissioni e permettono un rapporto più diretto con gli ospiti.' },
    ],
  },
  {
    slug: 'villa-i-lecci-palau-recensione',
    title: 'Villa I Lecci a Palau: un\'oasi di pace nella Gallura',
    excerpt: 'Scopri Villa I Lecci, la nostra villa immersa nella macchia mediterranea di Palau. Giardino privato, barbecue e tutto il comfort per una vacanza autentica.',
    category: 'Le Nostre Strutture',
    date: '2025-01-18',
    readTime: 5,
    img: '/images/strutture/villa-i-lecci/hero.jpg',
    body: [
      { type: 'p', content: 'Villa I Lecci è una delle nostre strutture più amate. Immersa nella macchia mediterranea di Palau, a pochi minuti dalle spiagge di Porto Pollo e dall\'Arcipelago della Maddalena, offre un\'esperienza di vacanza autentica e rilassante.' },
      { type: 'h2', content: 'La struttura' },
      { type: 'p', content: 'La villa dispone di tre camere da letto, due bagni e un ampio soggiorno con cucina attrezzata. Il giardino privato con arredamento esterno, barbecue e doccia esterna è il cuore della vita all\'aperto.' },
      { type: 'h2', content: 'I dintorni' },
      { type: 'ul', content: ['Porto Pollo — 5 minuti in auto, paradiso del kitesurf', 'Palau centro — 10 minuti, traghetti per La Maddalena', 'Spiaggia di Talmone — 15 minuti, selvaggia e ventosa', 'Aeroporto di Olbia — 45 minuti'] },
      { type: 'h2', content: 'L\'esperienza degli ospiti' },
      { type: 'p', content: 'Gli ospiti di Villa I Lecci apprezzano soprattutto la tranquillità, la privacy e l\'autenticità del contesto. La campagna gallurese, con i suoi profumi di lentisco e mirto, i tramonti infuocati e il silenzio della notte, regala un\'esperienza che non si dimentica.' },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

export function getRelatedPosts(slug: string, category: string, limit = 3): Post[] {
  return posts.filter(p => p.slug !== slug && p.category === category).slice(0, limit)
}

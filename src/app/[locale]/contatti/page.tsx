import { Metadata } from 'next'
import ContattiClient from './ContattiClient'

export const metadata: Metadata = {
  title: 'Contatti — Kenekita | Co-Hosting & Property Management Sardegna',
  description: 'Contatta Kenekita per informazioni su ville e appartamenti in Sardegna, o per affidarci la gestione del tuo immobile. Rispondiamo entro 24 ore.',
  openGraph: {
    title: 'Contatti — Kenekita',
    description: 'Scrivici per qualsiasi informazione. Siamo qui per te.',
  },
}

export default function ContattiPage() {
  return <ContattiClient />
}

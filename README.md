# Kenekita - Co-hosting & Property Management

Sito web per la gestione di affitti turistici in Sardegna.

## Stack Tecnologico

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Internazionalizzazione**: next-intl (5 lingue: it, en, es, fr, de)
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **CMS**: Sanity (Visual Editing + Live Preview)
- **Database**: Supabase (contact_requests + booking_requests)
- **Email**: Resend
- **Deploy**: Vercel

## Struttura del Progetto

```
kenekita/
├── src/
│   ├── app/
│   │   └── [locale]/          # Routing internazionale
│   ├── components/            # Componenti React
│   ├── i18n/                  # Configurazione next-intl
│   ├── lib/                   # Utility e client (Sanity, Supabase, Resend)
│   └── middleware.ts          # Middleware next-intl
├── messages/                  # File di traduzione JSON
├── public/
│   ├── images/               # Immagini statiche
│   └── videos/               # Video hero
└── .env.local                # Variabili d'ambiente
```

## Setup Locale

1. Installa le dipendenze:
```bash
npm install
```

2. Configura le variabili d'ambiente in `.env.local`:
   - Sanity CMS credentials
   - Supabase URL e keys
   - Resend API key

3. Avvia il server di sviluppo:
```bash
npm run dev
```

4. Apri [http://localhost:3000](http://localhost:3000)

## Lingue Supportate

- 🇮🇹 Italiano (default)
- 🇬🇧 English
- 🇪🇸 Español
- 🇫🇷 Français
- 🇩🇪 Deutsch

## Routing

Tutte le route sono prefissate con il locale:
- `/it` - Italiano
- `/en` - English
- `/es` - Español
- `/fr` - Français
- `/de` - Deutsch

## Deploy su Vercel

1. Connetti il repository a Vercel
2. Configura le variabili d'ambiente
3. Deploy automatico ad ogni push su main

## Strutture Disponibili

- Villa I Lecci
- Gardenia Luxury
- Dream The Sea
- Haven of Harbour
- Sunset Blu House
- Maison des Arches
- Dream on the Sea Stintino
- Profumo di Sardegna

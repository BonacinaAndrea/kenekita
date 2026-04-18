import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Playfair_Display, Raleway } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import './globals.css';

const bbhBartle = localFont({
  src: '../../fonts/BBHBartle-Regular.ttf',
  variable: '--font-bbh',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kenekita — Co-Hosting & Property Management Sardegna',
  description: 'Ville e appartamenti di lusso in Sardegna. Affitti turistici e gestione immobili.',
};

const locales = ['it', 'en', 'es', 'fr', 'de'];

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${bbhBartle.variable} ${playfair.variable} ${raleway.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

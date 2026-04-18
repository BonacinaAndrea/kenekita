import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['it', 'en', 'es', 'fr', 'de'];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as any)) {
    locale = 'it';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const supportedLocales = ['en', 'km'];
  const validLocale = locale && supportedLocales.includes(locale) ? locale : 'en';

  return {
    locale: validLocale,
    messages: (await import(`../locales/${validLocale}/messages.json`)).default,
  };
});

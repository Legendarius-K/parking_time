import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['se', 'no'];

export default getRequestConfig(async ({ locale }) => {
    const baseLocale = new Intl.Locale(locale).baseName;
    if (!locales.includes(baseLocale)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
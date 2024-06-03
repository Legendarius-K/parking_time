// import { notFound } from 'next/navigation';
// import { getRequestConfig } from 'next-intl/server';

// const locales = ['sv', 'no'];

// export default getRequestConfig(async ({ locale }) => {
//     if (!locales.includes(locale as any)) notFound();

//     return {
//         messages: (await import(`../messages/${locale}.json`)).default
//     };
// });

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['se', 'no'];

export default getRequestConfig(async ({ locale }) => {
    const baseLocale = new Intl.Locale(locale).baseName;
    if (!locales.includes(baseLocale)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
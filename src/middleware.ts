// import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from "./utils/navigation";

// export default createMiddleware({
//     locales,

//     localePrefix,

//     defaultLocale: 'sv',


// });

// export const config = {
//     matcher: ['/((?!api|_next|.*\\..*).*)'],
// };

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    // locales: ['sv', 'no'],
    locales,

    localePrefix,

    // Used when no locale matches
    defaultLocale: 'se'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next|.*\\..*).*)']
    // matcher: ['/', '/(sv|no)/:path*']
};
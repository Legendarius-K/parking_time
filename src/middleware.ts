import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from "./utils/navigation";

export default createMiddleware({
    // A list of all locales that are supported
    locales,
    // locales,

    localePrefix,

    // Used when no locale matches
    defaultLocale: 'sv',


});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next|.*\\..*).*)'],
    // matcher: ['/', '/(sv|no)/:path*']
};
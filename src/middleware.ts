import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['se', 'no'],

    // Used when no locale matches
    defaultLocale: 'se'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(se|no)/:path*']
};
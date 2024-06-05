import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
    defaultLocale: 'se',
    localePrefix,
    locales
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(se|no)/:path*']
};
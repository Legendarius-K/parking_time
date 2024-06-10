import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['se', 'no', 'en', 'da', 'de', 'fi'] as const;
export const localePrefix = 'always'; // Default

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales, localePrefix });
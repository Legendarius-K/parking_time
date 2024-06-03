// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withNextIntl(nextConfig);



import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['sv', 'no'],
        defaultLocale: 'sv',
        domains: [
            {
                domain: 'example.com',
                defaultLocale: 'sv',
            },
        ],
    },
};

export default withNextIntl(nextConfig);

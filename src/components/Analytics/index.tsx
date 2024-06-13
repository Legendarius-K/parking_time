'use client';

import { GoogleAnalytics } from 'nextjs-google-analytics';
import { useEffect } from 'react';

const GoogleAnalyticsClient = () => {
    useEffect(() => {
        // Optionally, you can add any additional setup or logging here
        console.log('Google Analytics initialized');
    }, []);

    return <GoogleAnalytics trackPageViews />;
};

export default GoogleAnalyticsClient;







// 'use client';

// import Script from 'next/script';
// import React from 'react';

// const GoogleAnalytics = () => {
//     const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

//     return (
//         <>
//             <Script
//                 strategy="afterInteractive"
//                 src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
//             />
//             <Script
//                 id="google-analytics"
//                 strategy="afterInteractive"
//                 dangerouslySetInnerHTML={{
//                     __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GA_MEASUREMENT_ID}', {
//               page_path: window.location.pathname,
//             });
//           `,
//                 }}
//             />
//         </>
//     );
// };

// export default GoogleAnalytics;

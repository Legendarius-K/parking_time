// 'use client';
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { fetchNewsArticle } from '@/utils/functions';
// import { motion } from 'framer-motion';
// import { useLocale } from 'next-intl';

// interface ArticleContent {
//   title: string;
//   paragraph: string;
//   date: string;
//   image: string;
//   language: string;
//   thumbnail: string;
//   slug: string;
// }

// const Article = ({ params }) => {
//   const originalSlug = params.article;
//   const [article, setArticle] = useState<ArticleContent | null>(null);
//   const [articleExists, setArticleExists] = useState(false);
//   const locale = useLocale();
//   const router = useRouter();

//   // Translation dictionaries
//   const translationDict = {
//     en: {
//       and: 'and',
//       och: 'and',
//       // Add more translations as needed
//     },
//     se: {
//       and: 'och',
//       och: 'och',
//       // Add more translations as needed
//     },
//   };

//   // Function to adjust the slug based on the locale
//   const adjustSlugForLocale = (slug: string, locale: string) => {
//     return slug
//       .split('-')
//       .map((word) => translationDict[locale][word] || word)
//       .join('-');
//   };

//   // Adjust the slug based on the locale
//   const adjustedSlug = adjustSlugForLocale(originalSlug, locale);

//   // Create the new URL
//   const newUrl = `/${locale}/news/${adjustedSlug}`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const articles = await fetchNewsArticle();
//         const filteredArticle = articles.find((article) => article.fields.slug === adjustedSlug);
//         if (filteredArticle) {
//           const formattedArticle: any = {
//             title: filteredArticle.fields.longTitle,
//             paragraph: filteredArticle.fields.longText,
//             date: filteredArticle.fields.date,
//             image: filteredArticle.fields.imageUrl,
//             slug: filteredArticle.fields.slug,
//             language: filteredArticle.fields.language,
//             thumbnail: filteredArticle.fields.thumbnail,
//           };
//           setArticle(formattedArticle);
//           setArticleExists(true);
//         } else {
//           setArticleExists(false);
//         }
//       } catch (error) {
//         console.log('error något gick fel', error);
//       }
//     };

//     fetchData();
//   }, [adjustedSlug]);

//   useEffect(() => {
//     if (article && article.paragraph && article.paragraph.trim().length === 0) {
//       alert('No artikel');
//     }
//   }, [article]);

//   useEffect(() => {
//     // Navigate to the new URL when locale or slug changes
//     router.push(newUrl);
//   }, [locale, adjustedSlug]);

//   if (!articleExists) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-gray-500 text-center">Loading...</div>
//       </div>
//     );
//   }

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-gray-500 text-center">Loading...</div>
//       </div>
//     );
//   }

//   const paragraphs = article.paragraph
//     ? article.paragraph.split('. ').map((sentence, index) => (
//         <p key={index} className="text-gray-800 mb-2">
//           {sentence.trim() + (index < article.paragraph.split('. ').length - 1 ? '.' : '')}
//         </p>
//       ))
//     : null;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white py-14 md:py-0">
//       <motion.div
//         className="w-full max-w-4xl m-4 mx-auto bg-white p-6 rounded-lg "
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex items-center mb-6">
//           <img
//             src={article.image}
//             alt="Author"
//             className="w-12 h-12 rounded-full mr-4"
//           />
//           <div>
//             <h2 className="text-xl text-gray-500 font-light">Melisha Lindell</h2>
//             <p className="text-gray-400">{article.date.includes('2024') ? article.date.slice(-5) : article.date}</p>
//           </div>
//         </div>

//         <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

//         <img src={article.image} alt="Group" className="w-full rounded-lg mb-6" />

//         <div className="text-gray-800 mb-4 pb-20">
//           {paragraphs}
//         </div>
        
//         <a
//           href={newUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-600 font-bold hover:underline"
//         >
//           Besök artikeln på Founders Loft
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default Article;





// 'use client';
// import React, { useState, useEffect } from 'react';
// import { fetchNewsArticle } from '@/utils/functions';
// import { motion } from 'framer-motion';

// interface ArticleContent {
//   title: string;
//   paragraph: string;
//   date: string;
//   image: string;
//   language: string;
// }

// const Article = ({ params }) => {
//   const slug = params.article;
//   const [article, setArticle] = useState<ArticleContent | null>(null);
//   const [articleExists, setArticleExists] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const articles = await fetchNewsArticle();
//         const filteredArticle = articles.find((article) => article.fields.slug === slug);
//         if (filteredArticle) {
//           const formattedArticle: ArticleContent = {
//             title: filteredArticle.fields.longTitle,
//             paragraph: filteredArticle.fields.longText,
//             date: filteredArticle.fields.date,
//             image: filteredArticle.fields.imageUrl,
//             language: filteredArticle.fields.language,
//           };
//           setArticle(formattedArticle);
//           setArticleExists(true);
//         }
//       } catch (error) {
//         console.log("error något gick fel");
//       }
//     }
//     fetchData();
//   }, [slug]);

//   if (!articleExists) {
//     return <div>Article does not exist</div>;
//   }

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-24 md:py-0">
//       <motion.div
//         className="w-full max-w-4xl m-4 mx-auto bg-white p-6 rounded-lg shadow-md"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex items-center mb-6">
//           <img
//             src={article.image}
//             alt="Author"
//             className="w-12 h-12 rounded-full mr-4"
//           />
//           <div>
//             <h2 className="text-xl text-gray-400 font-light">Melisha Lindell</h2>
//             <p className="text-gray-600">{article.date.includes("2024") ? article.date.slice(-5) : article.date}</p>
//           </div>
//         </div>

//         <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

//         <img src={article.image} alt="Group" className="w-full rounded-lg mb-6" />

//         <p className="text-gray-800 mb-4">{article.paragraph}</p>
//         <a
//           href="https://www.foundersloft.se"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-600 font-bold hover:underline"
//         >
//           Besök artikeln på Founders Loft
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default Article;

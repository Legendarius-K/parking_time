'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchNewsArticle } from '@/utils/functions';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

interface ArticleContent {
  title: string;
  paragraph: string;
  date: string;
  image: string;
  language: string;
  thumbnail: string;
  slug: string;
}

interface Params {
  article: string;
}

interface ArticleProps {
  params: Params;
}

const Article: React.FC<ArticleProps> = ({ params }) => {
  const originalSlug = params.article;
  const [article, setArticle] = useState<ArticleContent | null>(null);
  const [articleExists, setArticleExists] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  const adjustSlugForLocale = (slug: string, locale: string) => {
    const translationDict: { [key: string]: { [key: string]: string } } = {
      en: { and: 'and', och: 'and' },
      se: { and: 'och', och: 'och' },
    };

    const translations = translationDict[locale] || {};
    return Object.keys(translations).reduce((acc, key) => acc.replace(new RegExp(`\\b${key}\\b`, 'g'), translations[key]), slug);
  };

  const adjustedSlug = adjustSlugForLocale(originalSlug, locale);
  const newUrl = `/${locale}/news/${adjustedSlug}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles: any = await fetchNewsArticle();
        const filteredArticle = articles.find((article: any) => article.fields.slug === adjustedSlug);

        if (filteredArticle) {
          setArticle({
            title: filteredArticle.fields.longTitle,
            paragraph: filteredArticle.fields.longText,
            date: filteredArticle.fields.date,
            image: filteredArticle.fields.imageUrl,
            slug: filteredArticle.fields.slug,
            language: filteredArticle.fields.language,
            thumbnail: filteredArticle.fields.thumbnail,
          });
          setArticleExists(true);
        } else {
          setArticleExists(false);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchData();
  }, [adjustedSlug]);

  useEffect(() => {

   
    router.push(newUrl);
  }, [locale, adjustedSlug]);

  if (!articleExists) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-center">Loading...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500 text-center">Loading...</div>
      </div>
    );
  }

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-white py-14 md:py-0">
      <motion.div
        className="w-full max-w-4xl m-4 mx-auto bg-white p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <img
            src={article.image}
            alt="Author"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl text-gray-500 font-light">Melisha Lindell</h2>
            <p className="text-gray-400">{article.date.includes('2024') ? article.date.slice(-5) : article.date}</p>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

        <img src={article.image} alt="Group" className="w-full rounded-lg mb-6" />

        <div className="text-gray-800 mb-4 pb-20">
          <p>{article.paragraph}</p>
        </div>
        
        <a
          href={newUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 font-bold hover:underline"
        >
          Visit the article on Founders Loft
        </a>
      </motion.div>
    </div>
  );
};

export default Article;

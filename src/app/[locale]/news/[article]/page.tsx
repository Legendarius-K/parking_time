'use client';
import React, { useState, useEffect } from 'react';
import { fetchNewsArticle } from '@/utils/functions';

interface ArticleContent {
  title: string;
  paragraph: string;
  date: string;
  image: string;
  language: string;
}

const article = ({ params }) => {
  const slug  = params.article;
  const [article, setArticle] = useState<ArticleContent>();
  const [articleExists, setarticleExists] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const articles = await fetchNewsArticle();
                const filteredArticle = articles.find((article) => article.fields.slug === slug);
                if (filteredArticle) {
                  const formattedArticle: any = {
                    title: filteredArticle.fields.shortTitle,
                    paragraph: filteredArticle.fields.shortText,
                    date: filteredArticle.fields.date,
                    image: filteredArticle.fields.imageUrl,
                    language: filteredArticle.fields.language,
                  };
                  setArticle(formattedArticle);
                  setarticleExists(true)
                }
            } catch (error) {
                console.log("error något gick fel")
            }
        }
        fetchData();
    }, [slug]);
    if (!articleExists) {
      return <div>Article does not exist</div>
    }
    if (!article) {
      return <div>Loading...</div>;
    }
   
  return (
    <div>
      <h1>Article: {article.paragraph}</h1>
    </div>
  );
};

export default article;
'use client';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {createClient } from 'contentful';
import { get } from 'http';
import { fetchNews } from '@/app/contentful';
import { fetchNewsArticle } from '@/utils/functions';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface NewsCards {
    Title: string;
    
  }


  /*paragraph: string;
    date: string;
    image: string; */
const News = () => {
    const [newNewsCards, setNewsCards] = useState<NewsCards[]>([]);
    const t =useTranslations('NewsPage')
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
    
        const fetchData = async () => {
          try {
            const articles = await fetchNewsArticle();
            const formatedArticle = articles.map((article: any) =>({
              Title: article.fields.title,
            }));
            setNewsCards(formatedArticle);
          } catch (error) {
            console.log("error något gick fel")
          }
        }
        fetchData();
      }, []);

  const content = [
    {
        imgSrc: '/Positive-Impact.jpeg',
        imgAlt: 'Positive Impact in Nässjö',
        title: t('NewsBox1-Title'),
        paragraph: t('NewsBox1-paragraf'),
        date: t('NewsBox1-Date'),
        readMore: t('NewsBox1-ReadMore')
    },
    {
        imgSrc: '/parkingtimeChangemaker.jpeg',
        imgAlt: 'Parking Time & Changemaker',
        title: t('NewsBox2-Title'),
        paragraph: t('NewsBox2-paragraf'),
        date: t('NewsBox2-Date'),
        readMore: t('NewsBox2-ReadMore')
    },
    {
        imgSrc: '/SKAPA3.png',
        imgAlt: 'SKAPA 3',
        title: t('NewsBox3-Title'),
        paragraph: t('NewsBox3-paragraf'),
        date: t('NewsBox3-Date'),
        readMore: t('NewsBox3-ReadMore')
    }
];

const filteredContent = content.filter(item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.paragraph.toLowerCase().includes(searchTerm.toLowerCase());
});

    return (
        <>
        <div>{newNewsCards.map((article) => (<p>{article.Title}</p>))}</div>
        <div className="relative flex justify-center items-start h-[50vh] md:h-[50vh] overflow-hidden">
            <img className="w-full h-full md:block object-cover object-center" src="/NewsMainPic.png" alt="hero picture" />
            <div className="absolute left-0 h-full w-full bg-slate-900/20 backdrop-blur md:bg-slate-900/20 md:backdrop-blur md:w-2/4">
                <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
                </div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-start z-10 p-2 sm:p-16 md:p-18">
                <div className="flex items-center">
                    <div>
                        <p className="text-white text-sm leading-loose md:leading-loose mt-16 flex items-center ml-4"><img className="w-3 mr-3" src="/red.svg" alt="red dot" /> {t('Simi-Tilte')}</p>
                    </div>
                </div>
                <div className="mt-4 ml-4">
                    <h1 className="text-5xl md:text-5xl md:w-7/12 w-full text-white">{t('title')}</h1>
                </div>
            </div>
            <div className="absolute inset-0 bg-slate-900/20 opacity-10"></div>
        </div>

        <main className="text-center p-10 bg-gray-100">

            <div className="block items-center justify-center ">
                <div className="inline-flex md:w-[584px] mt-7 flex w-[92%] items-center shadow-md rounded-full border hover:shadow-md">
                    <div className="pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-white rounded-full p-1 bg-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder={t('SearchBar-PlaceHolder')}
                        className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>






            <div className="flex justify-center flex-wrap gap-6 mt-10 ">
                {filteredContent.length > 0 ? (
                    filteredContent.map((item, index) => (



                        <div key={index} className="bg-white hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:scale-90 shadow-xl rounded-lg overflow-hidden w-[370px] text-left ">
                            <img src={item.imgSrc} alt={item.imgAlt} className="w-full h-64" />
                            <div className="p-5">
                                <h3 className="text-xl mb-3 font-semibold pb-1">{item.title}</h3>
                                <p className="font-thin text-sm pb-5 text-slate-500">{item.paragraph}</p>
                                <p className="text-sm text-gray-500 mt-2 pb-5">{item.date}</p>
                                <a href="#" className="text-blue-500 font-bold text-custom-black">{item.readMore}</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </main>

        <div className="text-center p-10 pb-24 pt-7 bg-gray-100 ">
            <h3 className="text-sm mb-2 font-semibold">{t('Subscribe-section-semititle')}</h3>
            <h1 className="text-4xl mb-2 font-semibold">{t('dont-miss')}</h1>
            <p className="mb-5 font-thin text-base pb-5 text-slate-500">{t('Subscribe-paragraf')}</p>
            <input type="email" placeholder="example@example.com" className="p-2 border rounded-l-full w-64" />
            <input type="submit" value={t('Subscribe-button')} className="bg-black text-white px-5 py-1 relative rounded-r-full h-[40px] cursor-pointer" />
        </div>
    </>
    )
};

export default News

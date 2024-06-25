'use client';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { fetchNewsArticle } from '@/utils/functions';
import { useLocale } from "next-intl";
import Link from 'next/link';
import { POST } from './SendEmail';

interface NewsCards {
    title: string;
    paragraph: string;
    date: string;
    image: string;
    language: string;
    slug: string;
}

const News = () => {
    const [newNewsCards, setNewsCards] = useState<NewsCards[]>([]);
    const [selectedArticle, setSelectedArticle] = useState<NewsCards | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState(''); // default value
    const t = useTranslations('NewsPage');
    const locale = useLocale();

    const [multiDropdownOpen, setMultiDropdownOpen] = useState(false);
    const toggleMultiDropdown = () => setMultiDropdownOpen(!multiDropdownOpen);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const articles = await fetchNewsArticle();
                const formattedArticle = articles.map((article: any) => ({
                    title: article.fields.shortTitle,
                    paragraph: article.fields.shortText,
                    date: article.fields.date,
                    image: article.fields.imageUrl,
                    language: article.fields.language,
                    slug: article.fields.slug,
                }));
                setNewsCards(formattedArticle);
            } catch (error) {
                console.log("error något gick fel");
            }
        }
        fetchData();
    }, []);

    const getAllSlugs = () => {
        return newNewsCards.flat().map(article => article.slug);
    }

    const slugs = getAllSlugs();

    useEffect(() => {
        console.log('Slugs:', slugs);
    }, [newNewsCards]);

    const filteredContent = newNewsCards.filter(item => {
        return (locale === 'se' ? item.language === 'se' : item.language === 'en') &&
            (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.paragraph.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.date.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    const handleArticleClick = (article: NewsCards) => {
        setSelectedArticle(article);
    };

    const handleCloseModal = () => {
        setSelectedArticle(null);
    };

    const handleSortChange = (sortOrder: string) => {
        setSortOrder(sortOrder);
        setMultiDropdownOpen(false);
    };

    const sortedContent = [...filteredContent].sort((a, b) => {
        if (sortOrder === 'newest') {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
    });

    return (
        <>
            <div className="relative flex justify-center items-start h-[50vh] md:h-[50vh] overflow-hidden">
                <img className="w-full h-full md:block object-cover object-center" src="/NewsMainPic.png" alt="hero picture" />
                <div className="absolute left-0 h-full w-full bg-slate-900/20 backdrop-blur md:bg-slate-900/20 md:backdrop-blur md:w-2/5">
                    <div className="hidden md:block absolute top-0 right-0 h-full w-1/2"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-start z-10 p-2 sm:p-16 md:p-18">
                    <div className="flex items-center">
                        <div>
                            <p className="text-white text-sm leading-loose md:leading-loose mt-16 flex items-center ml-4">
                                {t('Simi-Tilte')}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 ml-4">
                        <h1 className="text-5xl md:text-5xl md:w-7/12 w-full text-white">{t('title')}</h1>
                    </div>
                </div>
                <div className="absolute inset-0 bg-slate-900/20 opacity-10"></div>
            </div>

            <main className="text-center pt-32 pb-32 bg-gray-100 ">

                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto pb-7 space-y-4 md:space-y-0 md:space-x-4 relative">

                    <div className="inline-flex w-[370px] md:w-[484px] p-2 bg-white items-center shadow-sm rounded-lg border hover:shadow-md ">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer text-white rounded-full p-1 bg-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                        <input
                            type="text"
                            placeholder={t('SearchBar-PlaceHolder')}
                            className="w-full bg-transparent rounded-lg py-[1px] pl-4 outline-none "
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                    </div>

                    <div className="relative flex flex-col justify-center items-center md:flex-row">
                        <h2 className='p-1 md:pr-2 font-bold'>{t('sort-by')}:</h2>
                        <button
                            id="multiLevelDropdownButton"
                            onClick={toggleMultiDropdown}
                            className="text-black bg-[#ffffff] hover:bg-[#e2e2e2] focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-md font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#ffffff] dark:hover:bg-[#e2e2e2]  dark:focus:ring-[#ffffff]"
                            type="button"
                        >
                            <p>{sortOrder ? t(sortOrder) : t('Select')}</p>

                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {multiDropdownOpen && (
                            <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-44 ml-44 md:ml-36 md:mt-36">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                    <li>
                                        <a onClick={() => handleSortChange('newest')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{t('newest')}</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleSortChange('oldest')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{t('oldest')}</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center flex-wrap gap-6 mt-10 ">
                    {sortedContent.length > 0 ? (
                        sortedContent.map((item, index) => (
                            <div key={index} className="bg-white hover:shadow-xl cursor-pointer transition-all duration-200 transform hover:scale-90 shadow-xl rounded-lg overflow-hidden w-[370px] text-left" onClick={() => handleArticleClick(item)}>
                                <Link href={`/${locale}/news/[slug]`} as={`/${locale}/news/${item.slug.slice(0, item.slug.length + 1)}`} className="text-black font-light relative">
                                    <img src={item.image} alt={item.image} className="w-full h-64" />
                                    <div className="p-5">
                                        <h3 className="text-xl mb-3 font-semibold pb-1">{item.title}</h3>
                                        <p className="font-thin text-sm pb-5 text-slate-500">{item.paragraph}</p>
                                        <p className="text-sm text-gray-500 mt-2 pb-5">{item.date}</p>
                                        Read more
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>{t('No_Results')}</p>
                    )}
                </div>
            </main>
            <div className="text-center p-10 pb-24 pt-7 bg-gray-100">
                <h3 className="text-sm mb-2 font-semibold">{t('Subscribe-section-semititle')}</h3>
                <h1 className="text-4xl mb-2 font-semibold">{t('dont-miss')}</h1>
                <p className="mb-5 font-thin text-base pb-5 text-slate-500">{t('Subscribe-paragraf')}</p>

                <form className="flex flex-col md:flex-row justify-center items-center relative" action={async (formData) => {
                    await POST(formData)
                }}>
                    <div className="relative w-full md:w-96 mb-4 md:mb-0">
                        <input
                            type="email"
                            name="UserEmail"
                            maxLength={500}
                            required
                            placeholder="example@example.com"
                            className="p-2 border rounded-full w-full md:pr-20"
                        />
                        <input
                            type="submit"
                            value={t('Subscribe-button')}
                            className="hidden md:block bg-black text-white mx-1 px-5 py-1 absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer"
                        />
                    </div>

                    <input
                        type="submit"
                        value={t('Subscribe-button')}
                        className="block md:hidden bg-black text-white px-5 py-2 w-full rounded-full cursor-pointer"
                    />
                </form>
            </div>
        </>
    );
};

export default News;

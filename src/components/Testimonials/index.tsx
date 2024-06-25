'use client'

import React, { useEffect, useState } from "react";
import { fetchTestimonials } from "@/utils/functions";
import Image from "next/image";
import { useTranslations } from "next-intl"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import { tree } from "next/dist/build/templates/app-page";

interface Testimonial {
  id: string;
  name: string;
  credentials: string;
  slug?: string;
  quote: string;
  logo: string;
  email: string;
}


const Testimonials = () => {
  const [newTestimonials, setTestimonials] = useState<Testimonial[]>([]);
  const t = useTranslations('testimonial')

  useEffect(() => {

    const fetchData = async () => {
      try {
        const testimonials = await fetchTestimonials();
        let formatedTestimonials = testimonials.map((testimonial: any) =>({
          id: testimonial.sys.id,
          name: testimonial.fields.name,
          credentials: testimonial.fields.credentials,
          slug: testimonial.fields.slug,
          quote: testimonial.fields.quote,
          logo: testimonial.fields.logo?.fields.file.fileName,
          email: testimonial.fields.email,
        }));
        setTestimonials(formatedTestimonials);
      } catch (error) {
        console.log("error något gick fel")
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className='flex flex-col py-28 gap-6 bg-pt-background'>
           <div className='flex flex-col justify-center items-center text-center gap-8'>{/* texten behöver fixas mer */}
            <h3 className='text-bold text-5xl'>{t('headline')}</h3>
            <p className='text-bold text.sm'>{t('subtext')}</p>
          </div>
          <div className='flex w-full justify-center overflow-visible'>
            <div className={`flex w-full overflow-visible mx-auto`}>
              <Swiper
                className="!overflow-visible flex w-[90%] min-h-[600px]"
                centeredSlides={true}
                slidesPerView={1.2}
                initialSlide={3}
                pagination={{ dynamicBullets:true }} 
                modules={[Pagination, Navigation]}
                breakpoints={{
                  900: {
                    slidesPerView: 2,
                    centeredSlides: false,
                  }
                }}
              >
                 {newTestimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="w-full mb-4 h-full">  
                    <div className='p-4 flex items-center h-full'>
                      <div  className={`flex flex-col gap-10 h-full md:h-[80%] w-full bg-white p-5 pb-11 md:p-8 mb-8 rounded-[20px] md:rounded-[40px] justify-between shadow-lg overflow-hidden`}>
                      <div className='flex flex-col gap-8 '>
                        <div className=' flex w-[60%] h-[60px]'>
                        <Image className="" src={`/${testimonial.logo}`} width={0} height={0} style={{width: 'auto', height: '60px'}} alt={`logo of ${testimonial.logo}`}/>
                        </div>
                        <p className="italic">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div className='flex flex-col md:flex-row gap-5 md:items-center'>
                        <div className='text-base flex flex-col'>
                          <p className="text-pt-red">{testimonial.name}</p>
                          <p className="font-normal">{testimonial.credentials}</p>
                          <div className="flex flex-col md:flex-row gap-1">
                            <p>E-mail:</p>
                            <p className="underline cursor-pointer">{testimonial.email}</p>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div> 
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
      </div>
    </>
  )
};

export default Testimonials;


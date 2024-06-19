'use client'

import React, { useEffect, useState } from "react";
import { fetchTestimonials } from "@/utils/functions";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

interface Testimonial {
  id: string;
  name: string;
  credentials: string;
  slug?: string;
  quote: string;
  logo: string;
  avatar: string;
}

const Testimonials = () => {
  const [newTestimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: false,
    });

    const fetchData = async () => {
      try {
        const testimonials = await fetchTestimonials();
        const formatedTestimonials = testimonials.map((testimonial: any) =>({
          id: testimonial.sys.id,
          name: testimonial.fields.name,
          credentials: testimonial.fields.credentials,
          slug: testimonial.fields.slug,
          quote: testimonial.fields.quote,
          logo: testimonial.fields.logo?.fields.file.fileName,
          avatar: testimonial.fields.avatar?.fields.file.fileName,
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
      <div className='flex flex-col py-28 gap-6 bg-pt-background' >
           <div className='flex flex-col justify-center items-center text-center gap-8' >{/* texten behöver fixas mer */}
            <h3 className='text-bold text-5xl'>Customer testimonials</h3>
            <p className='text-bold text.sm'>Hear from some of our clients.</p>
          </div>
          <div className='flex justify-center' data-aos="zoom-in">
            <div className={`w-full md:px-44`}>
            <Swiper
              centeredSlides={true}
              slidesPerView={1.2}
              loop={true}
              pagination={{ dynamicBullets:true }} 
              modules={[Pagination]}
              breakpoints={{
                960: {
                  slidesPerView: 2,
                  centeredSlides: false,
                  
                }
              }}
              className="flex w-full h-[600px]"
            >
              {newTestimonials.map((testimonial) => (
                <SwiperSlide className="w-full mb-4">  
                  <div className='p-4 flex items-center h-full'>
                    <div key={testimonial.id} className={`flex flex-col gap-10 md:h-auto w-full bg-white p-5 pb-11 md:p-8 mb-8 rounded-[20px] md:rounded-[40px] justify-between shadow-lg`}>
                    <div className='flex flex-col gap-8 '>
                      <div className=' flex w-[60%] h-[60px]'>
                      <Image className="" src={`/${testimonial.logo}`} width={0} height={0} style={{width: 'auto', height: '60px'}} alt={`logo of ${testimonial.logo}`}/>
                      </div>
                      <p className="italic">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 md:items-center'>
                      <div className='w-[50px] h-[50px]'>
                        <Image className="rounded-full" src={`/${testimonial.avatar}`} width={80} height={80} style={{width: '60px', maxWidth: '60px', height: '60px'}} alt={`picture of ${testimonial.name}`}/>
                      </div>
                      <div className='text-base '>
                        <p className="text-pt-red">{testimonial.name}</p>
                        <p className="font-normal">{testimonial.credentials}</p>
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

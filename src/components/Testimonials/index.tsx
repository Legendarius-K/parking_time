'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React, { useEffect, useState } from "react";
import { fetchTestimonials } from "@/utils/functions";
import Image from "next/image";

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
  const [loaded, setLoaded] = useState(false);

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      created: () => {
        setLoaded(true);
      },
      slides: {
        spacing: 18,
        perView: 1.2,
        origin: "center",
      },
      loop: true,
      initial: 0,
    },
  )

  useEffect(() => {

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
      <div className='flex flex-col py-28 gap-6 bg-pt-background'>
           <div className='flex flex-col justify-center items-center text-center gap-8'>{/* texten behöver fixas mer */}
            <h3 className='text-bold text-5xl'>Customer testimonials</h3>
            <p className='text-bold text.sm'>Hear from some of our clients.</p>
          </div>
          <div className='flex justify-center'>
              <div ref={ref} className={`keen-slider ${loaded ? "" : "hidden"}`}>
                {newTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className={` keen-slider__slide flex flex-col gap-10 h-[516px] w-20  bg-white p-5 pb-11 rounded-[20px] justify-between shadow-mobile-testimonial`}>
                  <div className='flex flex-col gap-8 '>
                    <div className=''>
                    <Image className="" src={`/${testimonial.logo}`} width={80} height={80} alt={`logo of ${testimonial.logo}`}/>
                    </div>
                    <p className="italic">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className=''>
                    <div className=''>
                      <Image className="rounded-full" src={`/${testimonial.avatar}`} width={80} height={80} alt={`picture of ${testimonial.name}`}/>
                    </div>
                    <div className='text-base '>
                      <p className="text-pt-red">{testimonial.name}</p>
                      <p className="font-normal">{testimonial.credentials}</p>
                    </div>
                  </div>
                  </div> 
                ))}
              </div>
          </div>
      </div>
    </>
  )
};

export default Testimonials;


// {newTestimonials.map((testimonial) => (
//   <div key={testimonial.id} className={`flex flex-col gap-10 h-[516px] w-[90%] bg-white p-5 pb-11 rounded-[20px] justify-between shadow-mobile-testimonial keen-slider__slide number-slide${testimonial.id}`}>
//   <div className='flex flex-col gap-8 '>
//     <div className=''>
//     {/* <Image className="" src={"/"} width={50} height={50} alt="logo for falköping kummun"/> */}
//     </div>
//     <p className="italic">
//       {testimonial.quote}
//     </p>
//   </div>
//   <div className=''>
//     <div className=''>
//       <Image className="rounded-full" src={`/../../public/${testimonial.avatar}`} width={50} height={50} alt={`picture of ${testimonial.name}`}/>
//       <p>{`${testimonial.avatar}`}</p>
//     </div>
//     <div className='text-base '>
//       <p className="text-pt-red">{testimonial.name}</p>
//       <p className="font-normal">{testimonial.credentials}</p>
//     </div>
//   </div>
//   </div> 
// ))}


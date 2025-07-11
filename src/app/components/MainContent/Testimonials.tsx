'use client';

import React, { FC, useCallback, useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import SingleTestimonial from './SingleTestimonial';
import { TestimonialsStoryblok } from '../../../../component-types-sb';

interface Props {
  blok: TestimonialsStoryblok;
}

const Testimonials: FC<Props> = ({ blok }) => {
  const { label, title, description, slides } = blok;
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className='pb-20 pt-20 lg:pb-[120px] lg:pt-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full md:w-11/12 lg:w-10/12 xl:w-8/12'>
            <div className='mb-8 max-w-[510px]'>
              <span className='mb-2 block text-lg font-semibold text-primary'>
                {label}
              </span>
              <h2 className='mb-3 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px]'>
                {title}
              </h2>
              <p className='text-base'>{description}</p>
            </div>
          </div>
        </div>

        <div className='flex relative items-center'>
          <button
            onClick={handlePrev}
            className='flex h-10 w-10 items-center justify-center'
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='#2b7fff'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.5 9.3125H4.15625L9.46875 3.90625C9.75 3.625 9.75 3.1875 9.46875 2.90625C9.1875 2.625 8.75 2.625 8.46875 2.90625L2 9.46875C1.71875 9.75 1.71875 10.1875 2 10.4688L8.46875 17.0312C8.59375 17.1562 8.78125 17.25 8.96875 17.25C9.15625 17.25 9.3125 17.1875 9.46875 17.0625C9.75 16.7812 9.75 16.3438 9.46875 16.0625L4.1875 10.7188H17.5C17.875 10.7188 18.1875 10.4062 18.1875 10.0312C18.1875 9.625 17.875 9.3125 17.5 9.3125Z'
                fill=''
              />
            </svg>
          </button>
          <Swiper slidesPerView={1} ref={sliderRef}>
            {slides?.map(({ name, position, details, image }, index) => (
              <SwiperSlide key={index}>
                <SingleTestimonial
                  url={image.filename as string}
                  name={name}
                  position={position}
                  details={details}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={handleNext}
            className='flex h-10 w-10 items-center justify-center'
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='#2b7fff'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z'
                fill=''
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import Link from 'next/link';
import React, { FC } from 'react';
import { ServicesStoryblok } from '../../../../component-types-sb';
import Image from 'next/image';
import Button from '../Button';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  blok: ServicesStoryblok;
  mainColor: string;
  darkTheme: boolean;
}

const Services: FC<Props> = ({ blok, mainColor, darkTheme }) => {
  const {
    label,
    title,
    description,
    image,
    imageTitle,
    imageText,
    button,
    textBlock,
  } = blok;

  return (
    <section
      className='py-20 lg:py-[90px] px-4 sm:px-0'
      {...storyblokEditable(blok)}
    >
      <div className='mb-10 flex flex-wrap items-end justify-between lg:mb-[70px] lg:flex-nowrap'>
        <div className='mb-5 sm:ml-4 w-full max-w-[450px]'>
          <span
            style={{ color: mainColor }}
            className='mb-2 block text-lg font-semibold uppercase'
          >
            {label}
          </span>
          <h2 className='text-3xl font-bold leading-[1.2] sm:text-5xl'>
            {title}
          </h2>
        </div>
        <div className='mb-5 flex w-full max-w-[470px] lg:justify-end'>
          <p className='text-lg'>{description}</p>
        </div>
      </div>

      <div className='-mx-4 flex flex-wrap  px-4'>
        <div className='w-full lg:px-4 lg:w-6/12 xl:w-6/12'>
          <div className='relative overflow-hidden rounded-2xl'>
            <Image
              src={image?.filename as string}
              alt='service image'
              className='w-full object-cover object-center'
              height={500}
              width={500}
            />
            <div className='absolute bottom-0 left-0 flex h-full w-full items-end bg-gradient-to-t from-[#000000] to-transparent'>
              <div className='p-5 sm:p-11'>
                <Link
                  href='#'
                  className='mb-3 block text-3xl font-bold sm:text-4xl text-white'
                >
                  {imageTitle}
                </Link>
                <p className='mb-6 text-base text-gray-3 text-white'>
                  {imageText}
                </p>
                <Link href={'/home'}>
                  <Button color={mainColor} darkTheme={darkTheme}>
                    {button && button[0].text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-rows-2 lg:w-1/2 lg:grid-cols-2 gap-4 mt-4 lg:mt-0'>
          {textBlock?.map(({ title, text }, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  index === 0 ? mainColor : index === 1 ? '#111928' : '#e5e7eb',
                color: index === 1 ? 'white' : '#424242',
              }}
              className={`${
                index === 1 ? 'sm:row-span-2' : ''
              } relative z-10 mb-8 flex h-full min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl p-6 2xl:min-h-[295px]`}
            >
              <p className='text-gray-3'>{text}</p>
              <div className='flex items-end justify-between'>
                <span className='text-2xl font-bold'>{title}</span>
                <span className='flex h-10 w-full max-w-[40px] items-center justify-center rounded-full border border-white/50'>
                  <svg
                    width='19'
                    height='19'
                    viewBox='0 0 19 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4.71875 14.928C4.55 14.928 4.38125 14.8718 4.26875 14.7312C4.01563 14.478 4.01563 14.0843 4.26875 13.8312L12.7906 5.30928H5.98438C5.64688 5.30928 5.36563 5.02803 5.36563 4.69053C5.36563 4.35303 5.64688 4.07178 5.98438 4.07178H14.2813C14.6188 4.07178 14.9 4.35303 14.9 4.69053V13.0437C14.9 13.3812 14.6188 13.6624 14.2813 13.6624C13.9438 13.6624 13.6625 13.3812 13.6625 13.0437V6.26553L5.16875 14.7593C5.05625 14.8718 4.8875 14.928 4.71875 14.928Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </div>

              <div className='absolute right-0 top-0 -z-10'>
                <img
                  src='https://cdn.tailgrids.com/assets/images/marketing/services/services-10/dots-shape.svg'
                  alt='dots-shape'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;

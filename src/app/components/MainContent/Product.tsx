import React, { FC } from 'react';
import { ProductStoryblok } from '../../../../component-types-sb';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import { storyblokEditable } from '@storyblok/react/rsc';

interface Props {
  blok: ProductStoryblok;
  mainColor: string;
  darkTheme: boolean;
}

const Product: FC<Props> = ({ blok, mainColor, darkTheme }) => {
  const { label, title, description, button, image, switchTextPlace } = blok;
  return (
    <section
      className='bg-gray-1 py-12 lg:py-[70px]'
      {...storyblokEditable(blok)}
    >
      <div
        className={`-mx-4 flex ${
          switchTextPlace ? 'lg:flex-row-reverse flex-col-reverse' : ''
        } items-center justify-center flex-col lg:flex-row`}
      >
        <div
          className={`w-full px-4 lg:w-1/2 ${
            switchTextPlace ? 'text-right' : ''
          }`}
        >
          <div className='mb-12 max-w-[465px] lg:mb-0'>
            <span
              style={{ color: mainColor }}
              className='xs:text-xl mb-[18px] block text-lg font-semibold'
            >
              {label}
            </span>
            <h2 className='mb-6 text-2xl font-semibold !leading-tight xl:text-[36px]'>
              {title}
            </h2>
            <span
              style={{ backgroundColor: mainColor }}
              className={`mb-6 block h-[3px] w-[100px] ${
                switchTextPlace ? 'justify-self-end' : ''
              }`}
            ></span>
            <p className='mb-9 text-base'>{description}</p>
            <Link href='#'>
              <Button color={mainColor} darkTheme={darkTheme}>
                {button && button[0].text}
              </Button>
            </Link>
          </div>
        </div>
        <div className='w-full px-4 lg:w-1/2 2xl:w-5/12'>
          <div className='rounded-3xl border-8 border-white bg-white'>
            <Image
              src={image.filename as string}
              width={1536}
              height={1000}
              alt='Recent Product'
              className='w-full rounded-[20px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

import React, { FC } from 'react';
import { ProductStoryblok } from '../../../../component-types-sb';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  blok: ProductStoryblok;
  mainColor: string;
}

const Product: FC<Props> = ({ blok, mainColor }) => {
  const { label, title, description, button, image } = blok;
  return (
    <section className='bg-gray-1 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark'>
      <div className='container mx-auto px-4 md:px-0'>
        <div className='-mx-4 flex flex-wrap items-center justify-center'>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='mb-12 max-w-[465px] lg:mb-0'>
              <span
                className={`text-${mainColor}-500 xs:text-xl mb-[18px] block text-lg font-semibold`}
              >
                {label}
              </span>
              <h2 className='mb-6 text-2xl font-semibold !leading-tight xl:text-[36px]'>
                {title}
              </h2>
              <span
                className={`bg-${mainColor}-500 mb-6 block h-[3px] w-[100px]`}
              ></span>
              <p className='mb-9 text-base'>{description}</p>
              <Link
                href='#'
                className={`bg-${mainColor}-500 inline-flex items-center justify-center rounded-md py-[13px] px-7 text-center text-base font-medium text-white hover:bg-blue-dark`}
              >
                {button && button[0].text}
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
      </div>
    </section>
  );
};

export default Product;

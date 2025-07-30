import Image from 'next/image';
import { FC } from 'react';

interface Props {
  url: string;
  details: string;
  name: string;
  position: string;
  mainColor: string;
  darkTheme: boolean;
}

const SingleTestimonial: FC<Props> = ({
  url,
  details,
  name,
  position,
  mainColor,
  darkTheme,
}) => {
  return (
    <div className='relative z-10 flex justify-center'>
      <div className='relative w-full px-2 md:px-0 py-16 md:w-11/12 md:py-10 lg:w-10/12 xl:w-8/12'>
        <div
          className={`relative z-10 items-center overflow-hidden shadow-lg md:flex rounded ${
            darkTheme ? 'bg-gray-700' : 'bg-white'
          }`}
        >
          <div className='w-full max-w-[150px] max-h-[300px] px-6 pt-10 sm:px-10 md:max-w-[270px] md:px-0 md:pt-0'>
            <Image
              src={url}
              alt='image'
              className='w-full h-full'
              width={270}
              height={100}
            />
          </div>
          <div className='w-full px-6 py-10 sm:px-10 md:py-14'>
            <div className='icon mb-5'>
              <svg
                width='39'
                height='22'
                viewBox='0 0 39 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.8262 0.00109288C4.7637 -0.0614071 1.0762 2.56359 0.201201 6.12609C-0.298799 8.31359 0.138701 10.5011 1.4512 12.2511C2.8262 14.1261 4.9512 15.3136 7.3262 15.6261L9.5137 21.0011C9.7637 21.5636 10.3262 21.9386 10.9512 21.9386C11.5762 21.9386 12.1387 21.5636 12.3887 21.0011C12.7637 20.0636 13.2012 19.0636 13.6387 18.1261C14.7012 15.7511 15.7637 13.3136 16.5762 10.8136C17.4512 8.18859 17.0762 5.37609 15.5762 3.25109C14.0762 1.18859 11.7012 0.0635929 8.8262 0.00109288ZM14.5137 10.1886C13.7012 12.5636 12.6387 15.0011 11.6387 17.3136C11.4512 17.8136 11.2012 18.2511 11.0137 18.7511L8.8887 13.6261L8.2012 13.5636C6.2012 13.4386 4.3262 12.4386 3.2637 11.0011C2.3262 9.75109 2.0137 8.18859 2.3887 6.68859C3.0137 4.12609 5.7012 2.25109 8.7637 2.25109H8.8262C10.9512 2.25109 12.7012 3.12609 13.8262 4.62609C14.8887 6.12609 15.1387 8.25109 14.5137 10.1886Z'
                  fill={
                    mainColor === 'blue'
                      ? '#2b7fff'
                      : mainColor === 'yellow'
                      ? '#f0b100'
                      : mainColor === 'red'
                      ? '#fb2c36'
                      : mainColor === 'purple'
                      ? '#ad46ff'
                      : '#9dc73e'
                  }
                />
                <path
                  d='M37.0137 3.3136C35.5137 1.1886 33.1387 0.00109863 30.2637 0.00109863C30.2012 0.00109863 30.2012 0.00109863 30.1387 0.00109863C26.1387 0.00109863 22.5137 2.6261 21.6387 6.1261C21.1387 8.3136 21.5762 10.5011 22.8887 12.3136C24.2637 14.1886 26.3887 15.3761 28.7637 15.6886L30.9512 21.0636C31.2012 21.6261 31.7637 22.0011 32.3887 22.0011C33.0137 22.0011 33.5762 21.6261 33.8262 21.0636C34.2012 20.1261 34.6387 19.1261 35.0762 18.1886C36.1387 15.8136 37.2012 13.3761 38.0137 10.8761C38.8887 8.3136 38.5137 5.4386 37.0137 3.3136ZM35.9512 10.1886C35.1387 12.5636 34.0762 15.0011 33.0762 17.3136C32.8887 17.8136 32.6387 18.2511 32.4512 18.7511L30.3262 13.6261L29.6387 13.5636C27.6387 13.4386 25.7637 12.4386 24.7012 11.0011C23.7637 9.7511 23.4512 8.1886 23.8262 6.6261C24.4512 4.0636 27.1387 2.1886 30.2012 2.1886H30.2637C32.3887 2.1886 34.1387 3.0636 35.2637 4.5636C36.3262 6.1261 36.5762 8.2511 35.9512 10.1886Z'
                  fill={
                    mainColor === 'blue'
                      ? '#2b7fff'
                      : mainColor === 'yellow'
                      ? '#f0b100'
                      : mainColor === 'red'
                      ? '#fb2c36'
                      : mainColor === 'purple'
                      ? '#ad46ff'
                      : '#9dc73e'
                  }
                />
              </svg>
            </div>
            <h4 className='mb-1 text-xl font-semibold'>{name}</h4>
            <h6 className='mb-4 text-sm font-normal'>{position}</h6>
            <p className='text-sm font-medium'>“{details}”</p>
          </div>
          <span className='absolute bottom-0 right-0 z-[-1]'>
            <svg
              width='540'
              height='340'
              viewBox='0 0 540 340'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.05'
                d='M410 -14C411.619 0.0555554 419.59 30 438.528 37.3333C462.201 46.5 474.948 52 481.017 74C487.087 96 501.655 127.778 549 129'
                stroke='#3056D3'
                strokeWidth='2'
              />
              <path
                opacity='0.05'
                d='M193 0C220.802 44.6714 244.632 50.4524 286.996 57.8101C339.951 67.0071 343.034 94.0439 347.895 143.211C352.756 192.379 390.259 257.518 520 227.299'
                stroke='#3056D3'
                strokeWidth='3'
              />
              <path
                opacity='0.05'
                d='M2 114.5C13.6667 131 55 155.1 127 119.5C217 75 276 131.5 269.5 182C263 232.5 273 330.5 384 329.5'
                stroke='#3056D3'
                strokeWidth='3'
              />
              <path
                opacity='0.05'
                d='M100 335.5C118.667 347.167 156.9 354.8 160.5 292C165 213.5 239 182.5 297 208.5C355 234.5 398 344 461 349'
                stroke='#3056D3'
                strokeWidth='3'
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SingleTestimonial;

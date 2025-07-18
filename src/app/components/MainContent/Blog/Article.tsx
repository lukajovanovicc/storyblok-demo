'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

interface Props {
  image: string;
  alt: string;
  subtitle?: string;
  title: string;
  date?: string;
  comment: string;
  color: string;
}

const Article: FC<Props> = ({
  image,
  alt,
  subtitle,
  title,
  date,
  comment,
  color,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div className='mb-10 w-full'>
        <div className='mb-8 overflow-hidden rounded'>
          <Image
            src={image}
            alt={alt}
            className='w-full'
            width={330}
            height={195}
          />
        </div>
        <div>
          <span
            style={{ color: color }}
            className='mb-3 inline-block text-base font-semibold'
          >
            {subtitle}
          </span>
          <h3>
            <Link
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{ color: hover ? color : '' }}
              href='/home'
              className='mb-5 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl'
            >
              {title}
            </Link>
          </h3>
          <div className='flex items-center'>
            <p className='mr-8 flex items-center text-sm font-medium text-body-color'>
              <span className='mr-3'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14 2.65002H12.7V2.10002C12.7 1.80002 12.45 1.52502 12.125 1.52502C11.8 1.52502 11.55 1.77502 11.55 2.10002V2.65002H4.42499V2.10002C4.42499 1.80002 4.17499 1.52502 3.84999 1.52502C3.52499 1.52502 3.27499 1.77502 3.27499 2.10002V2.65002H1.99999C1.14999 2.65002 0.424988 3.35002 0.424988 4.22502V12.925C0.424988 13.775 1.12499 14.5 1.99999 14.5H14C14.85 14.5 15.575 13.8 15.575 12.925V4.20002C15.575 3.35002 14.85 2.65002 14 2.65002ZM1.57499 7.30002H3.69999V9.77503H1.57499V7.30002ZM4.82499 7.30002H7.44999V9.77503H4.82499V7.30002ZM7.44999 10.9V13.35H4.82499V10.9H7.44999ZM8.57499 10.9H11.2V13.35H8.57499V10.9ZM8.57499 9.77503V7.30002H11.2V9.77503H8.57499ZM12.3 7.30002H14.425V9.77503H12.3V7.30002ZM1.99999 3.77502H3.29999V4.30002C3.29999 4.60002 3.54999 4.87502 3.87499 4.87502C4.19999 4.87502 4.44999 4.62502 4.44999 4.30002V3.77502H11.6V4.30002C11.6 4.60002 11.85 4.87502 12.175 4.87502C12.5 4.87502 12.75 4.62502 12.75 4.30002V3.77502H14C14.25 3.77502 14.45 3.97502 14.45 4.22502V6.17502H1.57499V4.22502C1.57499 3.97502 1.74999 3.77502 1.99999 3.77502ZM1.57499 12.9V10.875H3.69999V13.325H1.99999C1.74999 13.35 1.57499 13.15 1.57499 12.9ZM14 13.35H12.3V10.9H14.425V12.925C14.45 13.15 14.25 13.35 14 13.35Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {date}
            </p>
            <p className='flex items-center text-sm font-medium text-body-color'>
              <span className='mr-3'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.1 4.875H4.64998C4.34998 4.875 4.07498 5.125 4.07498 5.45C4.07498 5.775 4.32498 6.025 4.64998 6.025H11.125C11.425 6.025 11.7 5.775 11.7 5.45C11.7 5.125 11.425 4.875 11.1 4.875Z'
                    fill='currentColor'
                  />
                  <path
                    d='M9.79998 7.92493H4.64998C4.34998 7.92493 4.07498 8.17493 4.07498 8.49993C4.07498 8.82493 4.32498 9.07493 4.64998 9.07493H9.79998C10.1 9.07493 10.375 8.82493 10.375 8.49993C10.375 8.17493 10.1 7.92493 9.79998 7.92493Z'
                    fill='currentColor'
                  />
                  <path
                    d='M14 1.97498H1.99999C1.14999 1.97498 0.424988 2.67498 0.424988 3.54998V12.975C0.424988 13.375 0.649988 13.75 1.02499 13.925C1.17499 14 1.32499 14.025 1.47499 14.025C1.72499 14.025 1.94999 13.95 2.14999 13.775L4.27499 12.025H14C14.85 12.025 15.575 11.325 15.575 10.45V3.54998C15.575 2.67498 14.85 1.97498 14 1.97498ZM14.45 10.45C14.45 10.7 14.25 10.9 14 10.9H4.07499C3.94999 10.9 3.82499 10.95 3.72499 11.025L1.57499 12.8V3.54998C1.57499 3.29998 1.77499 3.09998 2.02499 3.09998H14.025C14.275 3.09998 14.475 3.29998 14.475 3.54998V10.45H14.45Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;

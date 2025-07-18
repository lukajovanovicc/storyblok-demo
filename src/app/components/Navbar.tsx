'use client';

import Link from 'next/link';
import { FC, useState } from 'react';
import { NavbarStoryblok } from '../../../component-types-sb';
import Image from 'next/image';

interface Props {
  blok: NavbarStoryblok;
  mainColor: string;
  page: string;
}

const Navbar: FC<Props> = ({ blok, mainColor, page }) => {
  const { logo, items, search } = blok;
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: mainColor }}
      className='flex w-full items-center justify-center'
    >
      <div className='container px-4 md:px-0'>
        <div className='relative py-4 sm:py-0 -mx-4 flex items-center justify-between'>
          <div className='w-40 max-w-full px-4'>
            <Link href='/home'>
              <Image
                src={logo?.filename as string}
                width={240}
                height={100}
                quality={100}
                alt={'logo'}
                className='w-full h-full'
              />
            </Link>
          </div>
          <div className='flex w-full items-center justify-between px-4'>
            <div>
              <button
                onClick={() => setOpen(!open)}
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden`}
              >
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
              </button>
              <nav
                style={{ backgroundColor: mainColor }}
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none ${
                  !open && 'hidden'
                } `}
              >
                <ul className='block lg:flex'>
                  {items?.map(({ text }, index) => {
                    const formattedText = text
                      ?.trim()
                      .toLowerCase()
                      .split(' ')
                      .join('-');

                    return (
                      <li key={index}>
                        <Link
                          href={`/${formattedText}`}
                          className={`flex flex-col py-2 text-base font-medium ${
                            page === formattedText
                              ? 'text-white'
                              : 'text-white/70 hover:text-white'
                          } lg:ml-12 lg:inline-flex lg:py-6`}
                        >
                          {text}
                          {page === formattedText && (
                            <span className='h-[2px] w-full bg-white' />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            {search && (
              <div className='hidden justify-end pr-16 sm:flex lg:pr-0'>
                <form className='relative flex max-w-[180px] md:max-w-[230px] lg:max-w-[120px] xl:max-w-[230px]'>
                  <input
                    type='text'
                    placeholder='Search here...'
                    className='w-full rounded border border-transparent bg-[#FCFDFE]/[.2] py-2 pl-12 pr-5 text-white placeholder-white placeholder-opacity-50 outline-none focus:border-opacity-100 focus-visible:shadow-none'
                  />
                  <button className='absolute left-4 top-1/2 -translate-y-1/2'>
                    <svg
                      width='22'
                      height='22'
                      viewBox='0 0 22 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.1062 19.1469L15.4344 14.5407C17.7719 11.3438 17.5312 6.7719 14.6094 3.8844C13.0625 2.33752 11 1.47815 8.79999 1.47815C6.59999 1.47815 4.53749 2.33752 2.99061 3.8844C-0.206262 7.08127 -0.206262 12.3063 2.99061 15.5031C4.53749 17.05 6.59999 17.9094 8.79999 17.9094C10.8969 17.9094 12.8562 17.1188 14.4031 15.7094L20.1437 20.35C20.2812 20.4532 20.4531 20.5219 20.625 20.5219C20.8656 20.5219 21.0719 20.4188 21.2094 20.2469C21.4844 19.9032 21.45 19.4219 21.1062 19.1469ZM8.79999 16.3625C7.01249 16.3625 5.36249 15.675 4.09061 14.4032C1.47811 11.7907 1.47811 7.56252 4.09061 4.9844C5.36249 3.71252 7.01249 3.02502 8.79999 3.02502C10.5875 3.02502 12.2375 3.71252 13.5094 4.9844C16.1219 7.5969 16.1219 11.825 13.5094 14.4032C12.2719 15.675 10.5875 16.3625 8.79999 16.3625Z'
                        fill='white'
                      />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

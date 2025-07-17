import React, { FC } from 'react';
import { HeroStoryblok } from '../../../../component-types-sb';
import Link from 'next/link';
import Button from '../Button';

interface Props {
  blok: HeroStoryblok;
  mainColor: string;
  darkTheme: boolean;
}

const Hero: FC<Props> = ({ blok, mainColor, darkTheme }) => {
  const { label, title, description, buttons } = blok;
  return (
    <div className='relative z-10 overflow-hidden py-[120px] md:py-[150px] lg:py-[180px] h-[90vh]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap justify-center'>
          <div className='w-full px-4'>
            <div className='mx-auto max-w-[666px] text-center'>
              <span
                className={`mb-5 block text-base font-semibold text-${mainColor} sm:text-lg md:text-xl`}
              >
                {label}
              </span>
              <h1 className='mb-5 text-3xl font-bold capitalize !leading-[1.208] sm:text-[42px] xl:text-5xl'>
                {title}
              </h1>
              <p className='mb-9 text-base font-medium text-body-color dark:text-dark-6 md:text-lg'>
                {description}
              </p>
              <ul className='flex flex-wrap items-center justify-center gap-4'>
                {buttons?.map(({ text, type }, index) => (
                  <li key={index}>
                    <Link href='#'>
                      <Button
                        type={type}
                        color={mainColor}
                        darkTheme={darkTheme}
                      >
                        {text}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className='absolute left-0 top-0 -z-10'>
          <svg
            width='784'
            height='619'
            viewBox='0 0 784 619'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              opacity='0.05'
              x='343.762'
              y='-429.286'
              width='681.025'
              height='859.911'
              rx='101'
              transform='rotate(45 343.762 -429.286)'
              fill='url(#paint0_linear_1414_1006)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1414_1006'
                x1='684.275'
                y1='-429.286'
                x2='650.39'
                y2='509.923'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#3056D3' />
                <stop offset='1' stopColor='#3056D3' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className='absolute right-0 top-0 -z-10'>
          <svg
            width='577'
            height='606'
            viewBox='0 0 577 606'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              opacity='0.05'
              x='880.642'
              y='206.506'
              width='619.809'
              height='680.424'
              rx='94'
              transform='rotate(135 880.642 206.506)'
              fill='url(#paint0_linear_1414_1005)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1414_1005'
                x1='1190.55'
                y1='206.506'
                x2='1167.23'
                y2='949.912'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#3056D3' />
                <stop offset='1' stopColor='#3056D3' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className='absolute bottom-0 left-1/2 -z-10'>
          <svg
            width='695'
            height='363'
            viewBox='0 0 695 363'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              opacity='0.05'
              x='719.109'
              y='488.892'
              width='325.482'
              height='726.494'
              rx='60'
              transform='rotate(135 719.109 488.892)'
              fill='url(#paint0_linear_1414_1009)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1414_1009'
                x1='881.85'
                y1='488.892'
                x2='831.383'
                y2='1280.2'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#3056D3' />
                <stop offset='1' stopColor='#3056D3' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className='absolute bottom-0 left-1/4 -z-10'>
          <svg
            width='469'
            height='139'
            viewBox='0 0 469 139'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              opacity='0.05'
              width='353.669'
              height='342.737'
              rx='30'
              transform='matrix(0.707107 0.707107 0.707107 -0.707107 -12 230.352)'
              fill='url(#paint0_linear_1414_1011)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1414_1011'
                x1='176.834'
                y1='3.18915e-07'
                x2='166.463'
                y2='374.543'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#3056D3' />
                <stop offset='1' stopColor='#3056D3' stopOpacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Hero;

import { FC } from 'react';
import Accordion from '../Accordion';
import { FaqStoryblok } from '../../../../component-types-sb';

interface Props {
  blok: FaqStoryblok;
  mainColor: string;
  darkTheme: boolean;
}

const FAQ: FC<Props> = ({ blok, mainColor, darkTheme }) => {
  const { label, title, description, accordions } = blok;
  return (
    <section className='relative z-20 overflow-hidden py-12 lg:py-[70px] p-4 sm:p-0'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
              <span
                className={`mb-2 block text-lg font-semibold text-${mainColor}`}
              >
                {label}
              </span>
              <h2 className='mb-4 text-3xl font-bold sm:text-[40px]/[48px]'>
                {title}
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                {description}
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 grid md:grid-cols-2'>
          {accordions?.map(({ title, text }, index) => (
            <div className='w-full px-4' key={index}>
              <Accordion
                header={title}
                text={text}
                mainColor={mainColor}
                darkTheme={darkTheme}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='absolute bottom-0 right-0 z-[-1]'>
        <svg
          width='1440'
          height='886'
          viewBox='0 0 1440 886'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.5'
            d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
            fill='url(#paint0_linear)'
          />
          <defs>
            <linearGradient
              id='paint0_linear'
              x1='1308.65'
              y1='1142.58'
              x2='602.827'
              y2='-418.681'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#3056D3' stopOpacity='0.36' />
              <stop offset='1' stopColor='#F5F2FD' stopOpacity='0' />
              <stop offset='1' stopColor='#F5F2FD' stopOpacity='0.096144' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  title: string;
  image: string;
  text: string;
  link: string;
  linkText: string;
}

const NewsItem: FC<Props> = ({ title, image, text, link, linkText }) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div className='group mb-8 rounded-lg border p-5'>
        <div className='mb-7 overflow-hidden rounded'>
          <Image
            src={image}
            alt={title}
            width={370}
            height={230}
            quality={100}
            className='w-full object-cover object-center duration-200 group-hover:rotate-6 group-hover:scale-125'
          />
        </div>
        <div>
          <h3 className='mb-5 line-clamp-2 cursor-pointer text-xl font-bold duration-200'>
            {title}
          </h3>
          <p className='mb-7 line-clamp-3 text-base text-body-color'>{text}</p>
          <Link
            href={link}
            className='inline-flex items-center gap-2 duration-200 hover:gap-3.5'
          >
            {linkText}
            <span>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.6875 16.0312C4.5 16.0312 4.3125 15.9687 4.1875 15.8125C3.90625 15.5312 3.90625 15.0938 4.1875 14.8125L13.6562 5.34375H6.09375C5.71875 5.34375 5.40625 5.03125 5.40625 4.65625C5.40625 4.28125 5.71875 3.96875 6.09375 3.96875H15.3125C15.6875 3.96875 16 4.28125 16 4.65625V13.9375C16 14.3125 15.6875 14.625 15.3125 14.625C14.9375 14.625 14.625 14.3125 14.625 13.9375V6.40625L5.1875 15.8438C5.0625 15.9688 4.875 16.0312 4.6875 16.0312Z'
                  fill='currentColor'
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

import React, { FC } from 'react';
import NewsItem from './NewsItem';
import { NewsStoryblok } from '../../../../../component-types-sb';

interface Props {
  blok: NewsStoryblok;
}

const News: FC<Props> = ({ blok }) => {
  const { articles } = blok;
  return (
    <section className='py-10 lg:py-[90px] justify-self-center px-4 sm:px-0'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap'>
          {articles?.map(({ image, title, text, link, linkText }, index) => (
            <NewsItem
              key={index}
              image={image?.filename as string}
              title={title}
              text={text}
              link={link?.cached_url}
              linkText={linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default News;

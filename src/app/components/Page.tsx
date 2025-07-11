import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc';
import { FC } from 'react';
import { PageStoryblok } from '../../../component-types-sb';

interface Props {
  blok: PageStoryblok;
  lang: string;
}

const Page: FC<Props> = async ({ blok }) => {
  const { body } = blok;

  return (
    <>
      {body ? (
        <div className=''>
          {body.map((nestedBlok) => (
            <StoryblokServerComponent
              blok={nestedBlok}
              key={nestedBlok._uid}
              {...storyblokEditable(nestedBlok)}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Page;

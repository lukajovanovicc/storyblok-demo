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
  const { body, darkTheme, font } = blok;

  return (
    <>
      {body ? (
        <div
          className={`${
            darkTheme ? 'bg-black text-white' : 'bg-white text-black'
          } ${font}`}
        >
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

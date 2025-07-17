import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { FC } from 'react';
import { PageStoryblok } from '../../../component-types-sb';

interface Props {
  blok: PageStoryblok;
  page: string;
}

const Page: FC<Props> = async ({ blok, page }) => {
  const { body, darkTheme, font, mainColor } = blok;

  return (
    <>
      {body ? (
        <div
          className={`${
            darkTheme ? 'bg-black text-white' : 'bg-white text-[#424242]'
          } ${font}`}
        >
          {body.map((nestedBlok) => (
            <StoryblokServerComponent
              blok={nestedBlok}
              key={nestedBlok._uid}
              mainColor={mainColor}
              darkTheme={darkTheme}
              page={page}
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

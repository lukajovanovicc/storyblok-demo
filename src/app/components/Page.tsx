import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { FC } from 'react';
import { PageStoryblok } from '../../../component-types-sb';
import { getStoryblokApi } from '../core/storyblok';
import Navbar from './Navbar';
import Footer from './Footer/Footer';

interface Props {
  blok: PageStoryblok;
  page: string;
}

const fetchConfig = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.getStory('config', {
    version: 'draft',
  });

  return data.story;
};

const Page: FC<Props> = async ({ blok, page }) => {
  const { body, darkTheme, font, mainColor } = blok;
  const { content } = await fetchConfig();

  return (
    <>
      {body ? (
        <div
          className={`${
            darkTheme ? 'bg-black text-white' : 'bg-white text-[#424242]'
          } ${font}`}
        >
          <Navbar
            blok={content.content[0]}
            mainColor={mainColor as string}
            page={page}
          />

          {body.map((nestedBlok) => (
            <StoryblokServerComponent
              blok={nestedBlok}
              key={nestedBlok._uid}
              mainColor={mainColor}
              darkTheme={darkTheme}
              page={page}
            />
          ))}
          <Footer blok={content.content[1]} mainColor={mainColor as string} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Page;

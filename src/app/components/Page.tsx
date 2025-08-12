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
  const { data } = await storyblokApi.getStory('tech-folder/config', {
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
          <main>
            {body.map((nestedBlok) => (
              <div
                key={nestedBlok._uid}
                className={
                  nestedBlok.component === 'hero'
                    ? ''
                    : 'container mx-auto px-4'
                }
              >
                <StoryblokServerComponent
                  blok={nestedBlok}
                  mainColor={mainColor}
                  darkTheme={darkTheme}
                  page={page}
                />
              </div>
            ))}
          </main>
          <Footer blok={content.content[1]} mainColor={mainColor as string} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Page;

import { StoryblokServerComponent } from '@storyblok/react/rsc';
import React, { FC } from 'react';
import { ConfigPageStoryblok } from '../../../component-types-sb';

interface Props {
  blok: ConfigPageStoryblok;
  page: string;
}

const ConfigPage: FC<Props> = ({ blok }) => {
  const { content, mainColor } = blok;

  return (
    <>
      {content ? (
        <div>
          {content.map((nestedBlok) => (
            <StoryblokServerComponent
              blok={nestedBlok}
              key={nestedBlok._uid}
              mainColor={mainColor}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ConfigPage;

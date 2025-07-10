import type { PropsWithChildren } from 'react';
import { getStoryblokApi } from '../core/storyblok';

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  getStoryblokApi();
  return children;
};

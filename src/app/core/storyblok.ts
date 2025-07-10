import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {},
  enableFallbackComponent: true,
  apiOptions: {
    region: 'eu',
  },
});

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Page from '../components/Page';
import Navbar from '../components/Navbar';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page:Page,
    navbar:Navbar
  },
  enableFallbackComponent: true,
  apiOptions: {
    region: 'eu',
  },
});

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Page from '../components/Page';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import Testimonials from '../components/MainContent/Testimonials';
import About from '../components/MainContent/About';
import Product from '../components/MainContent/Product';
import Contact from '../components/MainContent/Contact';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    navbar: Navbar,
    about: About,
    product: Product,
    testimonials: Testimonials,
    contact: Contact,
    footer: Footer,
  },
  enableFallbackComponent: true,
  apiOptions: {
    region: 'eu',
  },
});

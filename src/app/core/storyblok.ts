import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Page from '../components/Page';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import Testimonials from '../components/MainContent/Testimonials';
import About from '../components/MainContent/About';
import Product from '../components/MainContent/Product';
import Contact from '../components/MainContent/Contact';
import FAQ from '../components/MainContent/FAQ';
import Hero from '../components/MainContent/Hero';
import About2 from '../components/MainContent/About2';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    navbar: Navbar,
    hero: Hero,
    about: About,
    about2: About2,
    product: Product,
    testimonials: Testimonials,
    FAQ: FAQ,
    contact: Contact,
    footer: Footer,
  },
  enableFallbackComponent: true,
  apiOptions: {
    region: 'eu',
  },
});

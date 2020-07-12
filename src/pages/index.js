import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
import Brands from '../components/Brands';
import Mission from '../components/Mission';
import DriftX from '../components/DriftX';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function Index() {
  return (
    <Layout>
      <GatsbySeo
        title='Dawnmax Pvt. Ltd | Official Partner of Lixil Tostem India, Assa Abloy Enox Glass Hardwares, Imperio Railing Systems | Chennai, TamilNadu, India'
        description='We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service. We are the official Partners of Lixil Tostem Aluminium Doors and Windows, Enox Glass Hardwares and Imperio Railing Systems. We are currently headquartered at Chennai, TamilNadu, India'
        openGraph={{
          type: 'website',
          url: 'https://dawnmax.in',
          title: 'Dawnmax Pvt. Ltd | Official Partner of Lixil Tostem India',
          description: 'We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service. We are the official Partners of Lixil Tostem Aluminium Doors and Windows, Enox Glass Hardwares and Imperio Railing Systems. We are currently headquartered at Chennai, TamilNadu, India',
          site_name: 'Dawnmax Pvt. Ltd | Official Partner of Lixil Tostem India, Assa Abloy Enox Glass Hardwares, Imperio Railing Systems | Chennai, TamilNadu, India'
        }}
        twitter= {{
          handle: '@DawnmaxIndia',
          site: '@DawnmaxIndia',
          cardType: 'summary_large_image',
          creator: '@DawnmaxIndia',
          title: 'Dawnmax Pvt. Ltd | Official Partner of Lixil Tostem India, Assa Abloy Enox Glass Hardwares, Imperio Railing Systems | Chennai, TamilNadu, India',
          description: 'We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service. We are the official Partners of Lixil Tostem Aluminium Doors and Windows, Enox Glass Hardwares and Imperio Railing Systems. We are currently headquartered at Chennai, TamilNadu, India'
        }}
      />
      <CarouselX />
      <Brands />
      <Mission />
      <DriftX />
    </Layout>
  );
}

import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
import Brands from '../components/Brands';
import Products from '../components/Products';
import Mission from '../components/Mission';
import DriftX from '../components/DriftX';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function Index() {
  return (
    <Layout>
      <GatsbySeo
        title='Dawnmax Pvt. Ltd | Official Partner of Lixil Tostem India, Assa Abloy - Enox Glass Hardwares, Imperio Railing Systems | Chennai, TamilNadu, India'
        description='We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service. We are the official Partners of Lixil Tostem Aluminium Doors and Windows, Assa Abloy - Enox  Glass Hardwares and Imperio Railing Systems. We are currently headquartered at Chennai, TamilNadu, India'
        keywords = 'Dawnmax, lixil, Tostem, lixil India, lixil Pvt ltd, Tostem Chennai, lixil Chennai, Imperio Railing Systems, Imperio Chennai, Handrails chennai, Railing Systems Chennai, Glass Hardwares Chennai, Assa Abloy - Enox Chennai'
        openGraph={{
          title: 'Dawnmax Pvt. Ltd | Official Partner of Lixil Tostem India',
          url: 'https://dawnmax.in',
          type: 'website',
          description: 'We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service. We are the official Partners of Lixil Tostem Aluminium Doors and Windows, Assa Abloy - Enox Glass Hardwares and Imperio Railing Systems. We are currently headquartered at Chennai, TamilNadu, India',
          site_name: 'dawnmax.in'
        }}
        twitter= {{
          title: 'Dawnmax Pvt. Ltd',
          card: 'Dawnmax Pvt. Ltd | Official Partner of Lixil Tostem India | Chennai, TamilNadu, India',
          description: 'We at Dawnmax, enhance your dream home with quality products. We are the official Partners of Lixil Tostem Aluminium Doors and Windows, Assa Abloy - Enox Glass Hardwares and Imperio Railing Systems.',
          handle: '@DawnmaxIndia',
          site: '@DawnmaxIndia',
          cardType: 'summary_large_image',
          creator: '@DawnmaxIndia'
        }}
      />
      <CarouselX />
      <Brands />
      <Products />
      <Mission />
      <DriftX />
    </Layout>
  );
}

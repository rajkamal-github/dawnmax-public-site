import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
import Brands from '../components/Brands';
import Products from '../components/Products';
import Mission from '../components/Mission';
import DriftX from '../components/DriftX';
import Main2 from '../components/Main2';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function Index() {
  return (
    <Layout>
      <GatsbySeo
        title='Dawnmax Pvt. Ltd | Official Partner of Lixil Tostem India, Assa Abloy - Enox Glass Hardwares, Imperio Railing Systems | Chennai, TamilNadu, India'
        description='We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service. We are the official Partners of Lixil Tostem Aluminium Doors and Windows, Assa Abloy - Enox  Glass Hardwares and Imperio Railing Systems. We are currently headquartered at Chennai, TamilNadu, India'
        metaTags={
          [
            {
              property: 'keywords',
              content: 'Dawnmax, Official Partner of Lixil Tostem India, lixil, Tostem, lixil India, lixil Pvt ltd, Tostem Chennai, lixil Chennai, Imperio Railing Systems, Imperio Chennai, Handrails chennai, Railing Systems Chennai, Glass Hardwares Chennai, Assa Abloy - Enox Chennai, Official Partners of Lixil Tostem India, Channel Partner of Lixil Tostem India, Channel Partners of Lixil Tostem India, Lixil Tostem India dealers, Assa Abloy - Enox dealers, Imperio dealers, Imperio railings dealers, Imperio railing dealers, Handails dealers chennai, Handrail dealers chennai'
            }
          ]
        }
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
      <Main2>
        <Brands />
        <Products />
      </Main2>
      <Mission />
      <DriftX />
    </Layout>
  );
}

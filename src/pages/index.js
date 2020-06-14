import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
import Brands from '../components/Brands';
import Mission from '../components/Mission';

export default function Index() {
  return (
    <Layout>
      <CarouselX />
      {/* <Highlight /> */}
      <Brands />
      {/* <FeaturedProducts /> */}
      <Mission />
    </Layout>
  );
}

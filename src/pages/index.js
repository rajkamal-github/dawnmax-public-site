import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
import Brands from '../components/Brands';
import Mission from '../components/Mission';
import DriftX from "../components/DriftX";

export default function Index() {
  return (
    <Layout>
      <CarouselX />
      {/* <Highlight /> */}
      <Brands />
      {/* <FeaturedProducts /> */}
      <Mission />
      <DriftX />
    </Layout>
  );
}

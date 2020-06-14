import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
// import { Divider } from '@material-ui/core';
import Brands from '../components/Brands';
import Highlight from '../components/Highlight';
import FeaturedProducts from '../components/FeaturedProducts';
import Mission from '../components/Mission';
import ProductsList from '../components/ProductsList';

export default function Index() {
  return (
    <Layout>
      <ProductsList productType='Handrails'/>
    </Layout>
  );
}

import React from 'react';
import Layout from '../components/Layout';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductsList from '../components/ProductsList';

export default function Index() {
  return (
    <Layout>
      <ProductsList />
    </Layout>
  );
}

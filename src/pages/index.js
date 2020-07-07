import React from 'react';
import Layout from '../components/Layout';
import CarouselX from '../components/CarouselX';
import Brands from '../components/Brands';
import Mission from '../components/Mission';
import DriftX from '../components/DriftX';
import SEO from "../components/seo"

export default function Index() {
  return (
    <Layout>
      <SEO title="Dawnmax" keywords={[`Door`, `Window`, `Glass`, `Glass Window`, `Lixil`, 'Tostem', `Dawnmax`, `Imperio Railing Systems`, `Imperio`, 'Handrail', `enoxe`]}/>
      <CarouselX />
      {/* <Highlight /> */}
      <Brands />
      {/* <FeaturedProducts /> */}
      <Mission />
      <DriftX />
    </Layout>
  );
}

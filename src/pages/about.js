import React from 'react';
import Layout2 from '../components/Layout2';
import { Typography } from '@material-ui/core';
import Heading from '../components/Heading';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function About(){
  return (
    <Layout2>
      <GatsbySeo
        title='About Us | Dawnmax Pvt. Ltd | Chennai, TamilNadu, India'
        description='We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service.'   
        keywords="Dawnmmax, Dawnmax Pvt. Ltd, About Us | Dawnmax, Dawnamx Chennai"     
      />
      <Heading headerText="About Us"></Heading>
      <Typography variant='body1' gutterBottom>
        We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service.
      </Typography>
      <Typography variant='body1' gutterBottom>
        To innovate the art of blending design and engineering to make your dream home stylish and functional.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Dawnmax is a multi-disciplinary solution provider firm that offers innovative product and solutions. Our firm is led by young and talented professionals with experience in a wide range of building products and services.
      </Typography>
    </Layout2>
  );
};

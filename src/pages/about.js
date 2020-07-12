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
      />
      <Heading headerText="About Us"></Heading>
      <Typography variant='body1' gutterBottom>
        Dawnmax is a multi-disciplinary solution provider firm that offers innovative product and solutions. Our firm is led by young and talented professionals with experience in a wide range of building products and services.
      </Typography>
      <Typography variant='body1' gutterBottom>
        We at Dawnmax, enhance your dream home by bringing exceptional quality products with trusted service. We are official channel partners of Lixil Tostem Aluminium Doors and Windows, Assa Abloy – Enox glass architecture hardwares and Imperio- Railing Systems. We help our customers with our expertise in the industry to choose right product that suits their need, procure them and install them at our customer sites with experience professionals from our team.
      </Typography>
    </Layout2>
  );
};

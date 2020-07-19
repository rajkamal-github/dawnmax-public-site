import React from 'react';
import { Link } from 'gatsby';
import Layout2 from '../components/Layout2';
import { Typography } from '@material-ui/core';
import Heading from '../components/Heading';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function PageNotFound(){
  return (
    <Layout2>
      <GatsbySeo
        title='Page Not Found'
      />
      <Heading headerText="Page Not Found"></Heading>
      <Typography variant='body1' gutterBottom>
        The page you are looking for does not exist. Please click the link below to go back to home page.
      </Typography>
      <Link to="/" aria-label='Home'>Home</Link>
    </Layout2>
  );
};

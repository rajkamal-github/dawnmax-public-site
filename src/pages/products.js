import React from 'react';
import Layout2 from '../components/Layout2';
import Products from '../components/Products';
import { GatsbySeo } from 'gatsby-plugin-next-seo';


const ProductsPageComponent = (props) => { 
  return (
    <Layout2>
      <GatsbySeo
        title='Our Products | Dawnmax Pvt. Ltd | Chennai, TamilNadu, India'
        description='We offer our products from our official partners such as Lixil Tostem Aluminium Doors and Windows, Assa Abloy - Enox Glass Hardwares and Imperio Railing Systems'        
        metaTags={
          [
            {
              property: 'keywords',
              content: 'Dawnmax, lixil Tostem Chennai, Aluminium Doors and Windows, Imperio Handrails Chennai,  Assa Abloy - Enox Glass Hardwares'
            }
          ]
        }
      />
      <Products />
    </Layout2>
  );
}

export default ProductsPageComponent;

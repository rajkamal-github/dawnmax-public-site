import React from 'react';
import ProductsList from '../components/ProductsList';
import { graphql, StaticQuery } from "gatsby";

const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___sequence}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}, frontmatter: {featured: {}, productType1: {}, productType2: {}}}) {
            edges {
              node {
                frontmatter {
                  title
                  description
                  date(formatString: "MM/DD/yyyy")
                  image {
                    publicURL
                    childImageSharp {
                        fluid {
                          src
                        }
                      }
                  }
                  link
                  featured
                  productType1
                  productType2
                }
                fileAbsolutePath
                fields {
                  slug
                }
              }
            }
          }
        }  
`;

const getQueryParams = () => {
    let params = [];

    if (typeof window !== 'undefined' && typeof window.location !== 'undefined'){
        let query = decodeURI(window.location.search);
        if(query && query.length > 0){
            if(query.split('?').length > 1){
                let searchQuery = query.split('?')[1];
                if(searchQuery.split('&').length > 0){
                    let paramList = searchQuery.split('&');
    
                    if (paramList.length > 0){
                        paramList.forEach((e) => {
                            if (e.split('=').length > 1){
                                let param = {
                                    key: e.split('=')[0],
                                    value: e.split('=')[1]
                                }
                                params.push(param);
                            }
                        });
                    }
                }
            }
        }
    }

    return params;
}

const selectQueryParamValue = (key) => {
    let params = getQueryParams();
    let val = '';
    let filter1 = params.filter(x => x.key === key);
    if (filter1 && filter1.length > 0){
        if (filter1.some(x => x.key && x.value)){
            filter1.forEach(x => {
                if (x.value){
                    val = x.value;
                }
            });
        }
    }

    return val;
};

const ProductListComponent = (props) => {   
  let filter = selectQueryParamValue('productType1')

  let pageTitle = 'Our Products';
  if (filter && filter.length > 0){
      pageTitle = filter;
  }
  
  let edges = props.data.allMarkdownRemark.edges.filter(x => x.node.frontmatter.productType1===filter);

  props.data.pageTitle = pageTitle;
  props.data.filter = filter;
  props.data.edges = edges;

  return (
    <ProductsList {...props}/>
  );
}


const Products = (props) => {
  return (
      <StaticQuery
          query={query}
          render={data => (
              <ProductListComponent data={data} {...props}/>
          )}
      />
  )
};

export default Products;

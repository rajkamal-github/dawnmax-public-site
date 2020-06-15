import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardX from './CardX';
import Heading from './Heading';
import { graphql, StaticQuery } from "gatsby";
import { getSearchParams } from "gatsby-query-params";

const styles = (theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('sm')]:{
            padding: '6rem 2rem',
        },
        flexGrow: 1,
      },
      header:{
          padding: '1rem 0rem'
      }
});


const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___title}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}, frontmatter: {featured: {}, productType1: {}, productType2: {}}}) {
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

const CardXListComponent = (props) => {
    const { classes } = props; 
    const searchParams = getSearchParams();    
    let filter = selectQueryParamValue('productType1')

    let pageTitle = 'All Products';
    if (filter && filter.length > 0){
        pageTitle = filter;
    }
    
    let edges = props.data.allMarkdownRemark.edges.filter(x => x.node.frontmatter.productType1===filter);

    return (
        <div className={classes.root}>
            <Heading headerText={pageTitle} />
            <Grid container spacing={3}>
                {
                    edges.map((edge, index)=> {
                        let postLink = "/products/" + edge.node.fields.slug;
                        // const link = '';
                        if (edge.node.frontmatter.productType1===''){
                            if(typeof window !== 'undefined' && typeof window.location !== 'undefined'){
                                postLink = window.location.pathname + '?productType1='+edge.node.frontmatter.title;
                            }
                        }

                        if (edge.node.frontmatter['image'])
                        {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <CardX 
                                        img={edge.node.frontmatter.image.childImageSharp.fluid.src}
                                        link={postLink}
                                        title={edge.node.frontmatter.title} 
                                        {...edge}
                                    />
                                </Grid>
                            )
                        }
                        else{
                            return (
                                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                    <CardX 
                                        // img={edge.node.frontmatter.image.publicURL}
                                        link={postLink}
                                        title={edge.node.frontmatter.title} 
                                        {...edge}
                                    />
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </div>
    );
}

const CardXList = (props) => {
    console.log('CardXList');
    console.log(props);

    return (
        <StaticQuery
            query={query}
            render={data => (
                // data = data.allMarkdownRemark.edges.filter(x => x.))
                <CardXListComponent data={data} {...props}/>
            )}
        />
    )
}; 

export default withStyles(styles)(CardXList);
import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Layout2 from '../components/Layout2';
import Grid from '@material-ui/core/Grid';
import CardX from '../components/CardX';
import Heading from '../components/Heading';
import { graphql } from "gatsby";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

const styles = (theme) => ({
    root: {
        // padding: '8rem 8rem',
        // [theme.breakpoints.down('xs')]:{
        //     padding: '4rem 2rem',
        // },
        flexGrow: 1,
      },
      header:{
          padding: '1rem 0rem'
      },
});


export const query = graphql`
query ($slug: String! ) {
    allMdx(sort: {fields: frontmatter___title}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}, frontmatter: {featured: {eq: "false"}, productType1: {eq: $slug}, productType2: {eq: ""}}}) {
      edges {
        node {
          frontmatter {
            title
            description
            keywords
            date(formatString: "MM/DD/yyyy")
            image {
              publicURL
              childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500) {
                    base64
                    tracedSVG
                    srcWebp
                    originalImg
                }
              }
            }
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

const CardXListComponent = (props) => {
    const { classes } = props;
    console.log(props);
    let title='', description='', keywords='';
    if (props.data.allMdx.edges.length > 0){
      title = props.data.allMdx.edges[0].node.frontmatter.productType1;
      description = props.data.allMdx.edges[0].node.frontmatter.description;
      keywords = props.data.allMdx.edges[0].node.frontmatter.keywords;
    }
    return (
      <Layout2>
        <div className={classes.root}>
            <GatsbySeo
                title={title}
                description={description}
                metaTags={
                  [
                    {
                      property: 'keywords',
                      content: {keywords}
                    }
                  ]
                }
            />
            <Heading headerText={title} />
            <Grid container spacing={3}>
                {
                    props.data.allMdx.edges.map((edge, index)=> {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <CardX 
                                    img={edge.node.frontmatter.image.childImageSharp.fluid.srcWebp}
                                    link={edge.node.fields.slug}
                                    title={edge.node.frontmatter.title} 
                                    {...edge}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
      </Layout2>
    );
}

export default withStyles(styles)(CardXListComponent);
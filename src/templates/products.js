import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Layout from "../components/Layout"
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardX from '../components/CardX';
import Heading from '../components/Heading';
import { graphql, StaticQuery } from "gatsby";

const styles = (theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '4rem 2rem',
        },
        flexGrow: 1,
      },
      header:{
          padding: '1rem 0rem'
      },
});


export const query = graphql`
query ($slug: String! ) {
    allMarkdownRemark(sort: {fields: frontmatter___title}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}, frontmatter: {featured: {eq: "false"}, productType1: {eq: $slug}, productType2: {eq: ""}}}) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "MM/DD/yyyy")
            image {
              publicURL
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

const CardXListComponent = (props) => {
    const { classes } = props;
    // console.log(props);

    return (
      <Layout>
        <div className={classes.root}>
            <Heading headerText='Windows and Doors' />
            <Grid container spacing={3}>
                {
                    props.data.allMarkdownRemark.edges.map((edge, index)=> {
                        const postLink = "/products/" + edge.node.fields.slug + '?productType1='+edge.node.frontmatter.productType1+'&productType2='+edge.node.frontmatter.productType2;
                        return (
                            <Grid item xs={12} sm={4} key={index}>
                                <CardX 
                                    img={edge.node.frontmatter.image.publicURL}
                                    link={postLink}
                                    title={edge.node.frontmatter.title} 
                                    {...edge}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
      </Layout>
    );
}


// const CardXList = (props) => (
//     <StaticQuery
//       query={query}
//       render={data => (
//         <CardXListComponent data={data} {...props}/>
//       )}
//     />
//   ); 

export default withStyles(styles)(CardXListComponent);
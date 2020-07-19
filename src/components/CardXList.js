import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardX from './CardX';
import Heading from '../components/Heading';
import { graphql, StaticQuery } from "gatsby";

const styles = (theme) => ({
    root: {
        padding: '1rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.5rem 2rem',
        },
        flexGrow: 1,
      },
      header:{
          padding: '1rem 0rem'
      },
});


const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___title}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}}) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        date(formatString: "MM/DD/yyyy")
                        image {
                            publicURL,
                            childImageSharp {
                                fluid(maxHeight: 500, maxWidth: 500) {
                                    base64
                                    tracedSVG
                                    srcWebp
                                    originalImg
                                }
                            },
                        }
                        link
                        featured
                    }
                    fileAbsolutePath
                    slug
                }
            }
        }
    }  
`;

const CardXListComponent = (props) => {
    const { classes } = props;
    // console.log(props);

    return (
        <div className={classes.root}>
            <Heading headerText='Featured Products' />
            <Grid container spacing={3}>
                {
                    props.data.allMdx.edges.map((edge, index)=> {
                        const postLink = "/products/" + edge.node.fields.slug;
                        return (
                            <Grid item xs={12} sm={4} key={index}>
                                <CardX 
                                    img={edge.node.frontmatter.image.childImageSharp.fluid.srcWebp}
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
    );
}


const CardXList = (props) => (
    <StaticQuery
      query={query}
      render={data => (
        <CardXListComponent data={data} {...props}/>
      )}
    />
  ); 

export default withStyles(styles)(CardXList);
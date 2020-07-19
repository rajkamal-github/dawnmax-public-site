import React from "react"
import Layout2 from "../components/Layout2"
import { graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Heading from "../components/Heading";
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { MDXRenderer } from "gatsby-plugin-mdx"

const styles = (theme) => ({
    root: {
        // padding: '8rem 8rem',
        // [theme.breakpoints.down('sm')]:{
        //     padding: '8rem 2rem',
        // },
    },
    postHeader: {
        display: 'flex',
        flexDirection: 'column'
    },
    postHeaderImg: {
        // minWidth: '50%',
        maxHeight: '50vh',
        objectFit: 'cover'
    },
    postHeaderContent:{
        display: 'flex',
        flexDirection: 'column',
    },
    typographyHeader: {
      color: 'rgba(69, 72, 77, 1)',
      fontSize: '2rem',
      alignSelf: 'center',
    },
    postContent: {
      color: 'rgba(69, 72, 77, 1)',
      fontSize: '1.2rem',
    }
});

export const query = graphql`
    query ($id: String! ) {
        mdx (
            id : {
                eq : $id
            }
        ) {
            frontmatter{
                title
                description
                keywords
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
                date(formatString: "MM/DD/yyyy")
                featured
            }
            body
        }
    }
`;

const Product = (props) => {
    const { classes } = props;
    console.log('Template product');
    console.log(props);
    const post = props.data.mdx;

    return (
        <Layout2>
            <div className={classes.root}>
                <GatsbySeo
                    title={props.data.mdx.frontmatter.title}
                    description={props.data.mdx.frontmatter.description}
                    metaTags={
                        [
                          {
                            property: 'keywords',
                            content: props.data.mdx.frontmatter.keywords
                          }
                        ]
                    }
                />
                <div className={classes.postHeader}>
                    <div className={classes.postHeaderContent}>
                        <Heading headerText={props.data.mdx.frontmatter.title}></Heading>
                    </div>
                </div>
                <div 
                    className={classes.postContent}>
                    <MDXRenderer>
                        {post.body}
                    </MDXRenderer>
                </div>
            </div>
        </Layout2>
    )
}

export default withStyles(styles)(Product);
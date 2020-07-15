import React from "react"
import Layout2 from "../components/Layout2"
import { graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Heading from "../components/Heading";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

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
    query ($slug: String! ) {
        markdownRemark (
        fields : {
            slug : {
            eq : $slug
            }
        }
        ) {
            frontmatter{
                title
                description
                keywords
                image {
                    publicURL
                }
                date(formatString: "MM/DD/yyyy")
                featured
            }
            html
        }
    }
`;

const Product = (props) => {
    const { classes } = props;
    return (
        <Layout2>
            <div className={classes.root}>
                <GatsbySeo
                    title={props.data.markdownRemark.frontmatter.title}
                    description={props.data.markdownRemark.frontmatter.description}
                    metaTags={
                        [
                          {
                            property: 'keywords',
                            content: props.data.markdownRemark.frontmatter.keywords
                          }
                        ]
                    }
                />
                <div className={classes.postHeader}>
                    <div className={classes.postHeaderContent}>
                        <Heading headerText={props.data.markdownRemark.frontmatter.title}></Heading>
                        {/* <Typography gutterBottom variant="overline" className={classes.typographyHeader}>
                            {props.data.markdownRemark.frontmatter.title}
                        </Typography> */}
                    </div>
                    {/* <div className={classes.postHeaderMedia}>
                        <img 
                            src={props.data.markdownRemark.frontmatter.image.publicURL} 
                            alt={props.data.markdownRemark.frontmatter.title}
                            className={classes.postHeaderImg}
                        />
                    </div> */}
                </div>
                <div className={classes.postContent} dangerouslySetInnerHTML={{__html : props.data.markdownRemark.html}}>
                    
                </div>
            </div>
        </Layout2>
    )
}

export default withStyles(styles)(Product);
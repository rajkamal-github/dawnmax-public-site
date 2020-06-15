import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('sm')]:{
            padding: '8rem 2rem',
        },
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
        <Layout>
            <div className={classes.root}>
                <div className={classes.postHeader}>
                    <div className={classes.postHeaderContent}>
                        <Typography gutterBottom variant="overline" className={classes.typographyHeader}>
                            {props.data.markdownRemark.frontmatter.title}
                        </Typography>
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
        </Layout>
    )
}

export default withStyles(styles)(Product);
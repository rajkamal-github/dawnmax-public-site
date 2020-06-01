import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        padding: '8rem 8rem'
    },
    postHeader: {
        display: 'flex',
        flexDirection: 'column'
    },
    postHeaderImg: {
        minWidth: '100%',
        maxHeight: '25vh',
        objectFit: 'cover'
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
                    {/* <p><i>Created on {props.data.markdownRemark.frontmatter.date}</i></p> <br></br> */}
                    <div>
                        <img 
                            src={props.data.markdownRemark.frontmatter.image.publicURL} 
                            alt={props.data.markdownRemark.frontmatter.title}
                            className={classes.postHeaderImg}
                        />
                    </div>
                    <div>
                        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    </div>
                </div>
                <div className={classes.postContent} dangerouslySetInnerHTML={{__html : props.data.markdownRemark.html}}>

                </div>
            </div>
        </Layout>
    )
}

export default withStyles(styles)(Product);
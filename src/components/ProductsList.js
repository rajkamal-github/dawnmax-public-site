import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardX from './CardX';
import Heading from './Heading';
import { graphql, StaticQuery } from "gatsby";

const styles = (theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.5rem 2rem',
        },
        flexGrow: 1,
      },
      header:{
          padding: '1rem 0rem'
      },
});

let productType1 = 'Windows and Doors';


const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___title}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}, frontmatter: {featured: {eq: "false"}, productType1: {eq: ""}, productType2: {eq: ""}}}) {
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

const queryWindowsAndDoors = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___title}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}, frontmatter: {featured: {eq: "false"}, productType1: {eq: "Windows and Doors"}, productType2: {eq: ""}}}) {
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

const getQuery = (productType) => {
    switch(productType){
        case "Windows and Doors":
            return queryWindowsAndDoors;
        default:
            return query;
    }
}

const CardXListComponent = (props) => {
    const { classes } = props;
    console.log(props);

    return (
        <div className={classes.root}>
            <Heading headerText={props.productType} />
            <Grid container spacing={3}>
                {
                    props.data.allMarkdownRemark.edges.map((edge, index)=> {
                        const postLink = "/products/" + edge.node.fields.slug;
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
    );
}


const CardXList = (props) => {
    return (
        <StaticQuery
            query={getQuery(props.productType)}
            render={data => (
                <CardXListComponent data={data} {...props}/>
            )}
        />
    )
}; 

export default withStyles(styles)(CardXList);
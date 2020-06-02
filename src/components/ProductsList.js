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

    let queryLocal = query;
    if (productType == 'Windows and Doors'){
        queryLocal = queryWindowsAndDoors;
    }

    return queryLocal;
}

const CardXListComponent = (props) => {
    const { classes } = props;
    console.log('CardXListComponent');
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

    let queryLocal = query;
    if (props!=null && props.productType !=null && props.productType == 'Windows and Doors'){
        console.log('Condition worked');
        queryLocal = queryWindowsAndDoors;
    }

    return (
        <StaticQuery
            query={queryWindowsAndDoors}
            render={data => (
                <CardXListComponent data={data} {...props}/>
            )}
        />
    )
}; 

export default withStyles(styles)(CardXList);
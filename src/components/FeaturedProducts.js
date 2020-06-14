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


const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___title}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}, frontmatter: {featured: {eq: "true"}}}) {
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

const tileData = [
    {
        img: 'https://www.dallasglassandauto.com/wp-content/uploads/2017/02/smart-glass.jpg',
        title: 'Windows and Doors',
        author: 'Scott Peck'
    },
    {
        img: 'https://www.dallasglassandauto.com/wp-content/uploads/2017/02/smart-glass.jpg',
        title: 'Glass Architecture',
        author: 'Scott Peck'
    },
    {
        img: 'https://www.dallasglassandauto.com/wp-content/uploads/2017/02/smart-glass.jpg',
        title: 'Handrails',
        author: 'Scott Peck'
    }
];

const CardXListComponent = (props) => {
    const { classes } = props;
    console.log(props);

    return (
        <div className={classes.root}>
            <Heading headerText='Featured Products' />
            <Grid container spacing={3}>
                {
                    props.data.allMarkdownRemark.edges.map((edge, index)=> {
                        const postLink = "/productlist-"+ edge.node.frontmatter.title;
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


const CardXList = (props) => (
    <StaticQuery
      query={query}
      render={data => (
        <CardXListComponent data={data} {...props}/>
      )}
    />
  ); 

export default withStyles(styles)(CardXList);
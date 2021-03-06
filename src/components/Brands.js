import React from 'react';
import Heading from './Heading';
import { withStyles } from '@material-ui/styles';
import {Grid } from '@material-ui/core';
import { graphql, StaticQuery, Link } from "gatsby";

const styles = (theme) => ({
    root: {
        // padding: '1rem 8rem',
        // [theme.breakpoints.down('sm')]:{
        //     padding: '2rem 2rem',
        // },
        // flexGrow: 1,
        // backgroundColor: 'rgba(161, 162, 162, 1)',
        minWidth: '100%',
    },
    tile: {
        padding: '2rem 2rem',
        borderWidth: '.05rem',
        borderStyle: 'solid',
        borderColor: "rgba(249, 189, 59, .76)",
        margin: "0rem .5rem .5rem 0rem",
    },
    tileImageContainer: {
        width: '100%',
    },
    tileImage: {
        objectFit: 'scale-down',
        height: '20vh',
        width: '100%'
    },
});

const BrandsComponent = (props) => {
    const { classes } = props;
    // console.log(props);
    const tileData = props.data.allMdx.edges;

    return (
        <div className={classes.root}>
            <Heading headerText="Featured Brands" />
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {tileData.map((d, index) => {
                        console.log(d);
                        return (
                                <Grid item xs={12} sm={4} key={index}>
                                    <div className={classes.tile}>
                                        <div className={classes.tileImageContainer}>
                                            <Link to={d.node.frontmatter.link}>
                                                <img src={d.node.frontmatter.image.publicURL} alt={d.node.frontmatter.title} className={classes.tileImage} />
                                            </Link>
                                            {/* <a href={d.node.frontmatter.link}>
                                                <img src={d.node.frontmatter.image.publicURL} alt={d.node.frontmatter.title} className={classes.tileImage} />
                                            </a> */}
                                        </div>
                                    </div>
                                </Grid>
                            )
                        }      
                    )}
            </Grid>
        </div>
    )
}

const query = graphql`
    query MyQuery {
        allMdx(sort: {fields: frontmatter___sequence}, filter: {fileAbsolutePath: {regex: "/src/content/brands/"}}) {
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
                    }
                }
            }
        }
    }  
`;

const Brands = (props) => (
    <StaticQuery
      query={query}
      render={data => (
        <BrandsComponent data={data} {...props}/>
      )}
    />
  ); 

export default withStyles(styles)(Brands);


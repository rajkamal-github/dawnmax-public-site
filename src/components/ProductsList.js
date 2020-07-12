import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardX from './CardX';
import Heading from './Heading';

const styles = (theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('sm')]:{
            padding: '6rem 2rem',
        },
        flexGrow: 1,
      },
      header:{
          padding: '1rem 0rem'
      }
});

const CardXListComponent = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Heading headerText={props.data.pageTitle} />
            <Grid container spacing={3}>
                {
                    props.data.edges.map((edge, index)=> {
                        let postLink = "/products/" + edge.node.fields.slug;

                        if (edge.node.frontmatter.productType1 !== ''){
                            postLink = "/products/" + edge.node.frontmatter.productType1 + "/" + edge.node.fields.slug;
                        }

                        // const link = '';
                        if (edge.node.frontmatter.productType1 === ''){
                            if(typeof window !== 'undefined' && typeof window.location !== 'undefined'){
                                postLink = window.location.pathname + '?productType1='+edge.node.frontmatter.title;
                            }
                        }

                        if (edge.node.frontmatter['image'])
                        {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <CardX 
                                        img={edge.node.frontmatter.image.childImageSharp.fluid.src}
                                        link={postLink}
                                        title={edge.node.frontmatter.title} 
                                        {...edge}
                                    />
                                </Grid>
                            )
                        }
                        else{
                            return (
                                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                    <CardX 
                                        // img={edge.node.frontmatter.image.publicURL}
                                        link={postLink}
                                        title={edge.node.frontmatter.title} 
                                        {...edge}
                                    />
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </div>
    );
}

const CardXList = (props) => {
    console.log(props);
    return (
        <CardXListComponent {...props} />
    )
}; 

export default withStyles(styles)(CardXList);
import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardX from './CardX';
import Heading from './Heading';

const styles = (theme) => ({
    root: {
        // padding: '1rem 8rem',
        // [theme.breakpoints.down('sm')]:{
        //     padding: '2rem 2rem',
        // },
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
                        let postLink = edge.node.fields.slug;

                        if (edge.node.frontmatter.productType1 !== ''){
                            postLink = edge.node.frontmatter.productType1 + "/" + edge.node.fields.slug;
                        }
                        else if (edge.node.frontmatter.productType1 === ''){
                            postLink = edge.node.fields.slug;
                        }

                        if (edge.node.frontmatter['image'])
                        {
                            return (
                                <Grid item xs={12} sm={6} lg={4} key={index}>
                                    <CardX 
                                        img={edge.node.frontmatter.image.childImageSharp.fluid.srcWebp}
                                        link={postLink}
                                        title={edge.node.frontmatter.title} 
                                        {...edge}
                                    />
                                </Grid>
                            )
                        }
                        else{
                            return (
                                <Grid item xs={12} sm={6} lg={4} key={index}>
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
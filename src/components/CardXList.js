import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardX from './CardX';
import Heading from '../components/Heading';
import { graphql, StaticQuery } from "gatsby";

const styles = (theme) => ({
    root: {
        padding: '2rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.25rem 2rem',
        },
        flexGrow: 1,
      },
      header:{
          padding: '1rem 0rem'
      }
});


const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___title}, filter: {fileAbsolutePath: {regex: "/src/content/products/"}}) {
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
    const tileData = props.data.allMarkdownRemark.edges;

    return (
        <div className={classes.root}>
            <Heading headerText='Featured Products' />
            <Grid container spacing={3}>
                {
                    tileData.map((element, index)=> {
                        return (
                            <Grid item xs={12} sm={4} key={index}>
                                <CardX img={element.node.frontmatter.image.publicURL} title={element.node.frontmatter.title} {...element}/>
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
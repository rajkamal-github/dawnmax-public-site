import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { graphql, StaticQuery } from "gatsby";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0rem 0rem',
        minWidth: '100%',
    },
    media: {
        height: '80vh',
        objectFit: 'none',
        objectPosition: '50% 50%'
    },
    overlay: {
      position: 'absolute',
      top: '20vh',
      left: '10vh',
      width: '40vw',
      // height: '40vh',
      borderRadius: '.5rem',
      // color: '#45484D',
      // backgroundColor: 'rgba(249, 189, 59, .76)',
      color: 'rgba(249, 189, 59, .76)',
      backgroundColor: 'rgba(69,72,77, .78)',
      padding: '2rem 4rem',
      [theme.breakpoints.down('sm')]:{
          display: 'none',
      },
    },
    overlayHeader: {
      padding: '1rem 0rem',
      fontSize: '2.6rem',
      letterSpacing: '0.08333em',
      // textTransform: 'uppercase',
      fontWeight: '800',
      lineHeight: '1.6',
      textTransform: 'uppercase',
    },
    overlayDetail: {
      fontSize: '1.6rem',
      letterSpacing: '0.08333em',
      // textTransform: 'uppercase',
      fontWeight: '400',
      lineHeight: '1.6'
    }
}));

const CarouselComponent = (props) => {
    const classes = useStyles();
    // console.log(props);

    let overlayContent = [
      {
        header: 'TOSTEM PRE-ENGINEERED WINDOWS',
        detail: 'The Next Evolution in Window Design'
      },
      {
        header: 'TOSTEM GRANTS',
        detail: 'Discover collection in our featured products'
      },
      {
        header: 'Lixil Tostem Minimalistic Design',
        detail: 'Extreme simplicity gives distinctive appearance'
      },
      {
        header: 'ENOX Glass Architecture',
        detail: 'Elegant and Reliable Glass Architectural Hardware'
      },
      {
        header: 'Imperio Railing System',
        detail: 'High quality, unique, extravagant Railing Systems'
      }
    ];
 
    return (
        <Carousel className={classes.root} 
          autoPlay={true} 
          indicators={false} 
          animation="slide" 
          interval="3000"
          >
            {
                props.data.allFile.nodes.map( (element, index) => {
                    let overlayAd = overlayContent[index];
                    return (
                        <Card className={classes.root} key={index}>
                            <CardActionArea>
                                <CardMedia
                                  className={classes.media}
                                  image={element.childImageSharp.fluid.originalImg}
                                  title={element.name}
                                />
                                <div className={classes.overlay}>
                                  <div className={classes.overlayHeader}>
                                    {overlayAd.header}
                                  </div>
                                  <div className={classes.overlayDetail}>
                                    {overlayAd.detail}
                                  </div>
                             </div>
                            </CardActionArea>
                        </Card>
                    )
                })
            }
        </Carousel>
    )
}

const logoQuery = graphql`
  query {
    allFile (filter: {
        dir: {
          regex: "/images/hero$/"
        }
      }) {
        nodes {
          absolutePath
          relativePath
          publicURL
          id
          name
          relativeDirectory
          dir
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              originalImg
            }
          }
        }
      }
    }
`;


const CarouselX = (props) => (
    <StaticQuery
      query={logoQuery}
      render={data => (
        <CarouselComponent data={data} {...props}/>
      )}
    />
  );
  
export default CarouselX;
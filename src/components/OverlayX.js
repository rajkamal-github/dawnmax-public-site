import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    overlay: {
      position: 'absolute',
      top: '50vh',
      left: '3vh',
    //   width: '40vw',
      // height: '40vh',
      borderRadius: '.5rem',
      // color: '#45484D',
      // backgroundColor: 'rgba(249, 189, 59, .76)',
      color: 'rgba(249, 189, 59, .76)',
      backgroundColor: 'rgba(69,72,77, .78)',
      padding: '2rem 2rem',
      [theme.breakpoints.down('md')]:{          
        padding: '1rem 1rem',
        width: 'auto',
      },
      [theme.breakpoints.down('xs')]:{
        padding: '.5rem .5rem',
        width: '90vw',
      },
    },
    overlayHeader: {
      padding: '1rem 0rem',
      fontSize: '2rem',
      letterSpacing: '0.08333em',
      // textTransform: 'uppercase',
      fontWeight: '800',
      lineHeight: '1.6',
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]:{
        fontSize: '1.3rem',
        padding: '.5rem 0rem',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '1rem',
        padding: '.5rem 0rem',
      },
    },
    overlayDetail: {
      fontSize: '1.3rem',
      letterSpacing: '0.08333em',
      // textTransform: 'uppercase',
      fontWeight: '400',
      lineHeight: '1.6',
      [theme.breakpoints.down('md')]:{ 
        fontSize: '1rem',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '.7rem',
      },
    }
}));

const OverlayX = (props) => {

    const classes = useStyles();

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

    let index= 0;
    if (props && props.index && props.index > 0){
        index = props.index;
    }

    let overlayAd = overlayContent[index];

    return (
        <div className={classes.overlay}>
            <div className={classes.overlayHeader}>
            {overlayAd.header}
            </div>
            <div className={classes.overlayDetail}>
            {overlayAd.detail}
            </div>
        </div>
    )
}

export default OverlayX;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    overlay: {
      position: 'absolute',
      top: '10vh',
      left: '0',
      width: '100vw',
      zIndex: '1',
      // height: '40vh',
      // borderRadius: '.5rem',
      // color: '#45484D',
      // backgroundColor: 'rgba(249, 189, 59, .76)',
      color: 'rgba(249, 189, 59, .76)',
      backgroundColor: 'rgba(69,72,77, .78)',
      padding: '1rem 2rem',
      [theme.breakpoints.down('sm')]:{
          display: 'none',
      },
    },
    overlayHeader: {
      padding: '0rem 0rem',
      margin: '0rem 0rem',
      fontSize: '.9rem',
      letterSpacing: '0.08333em',
      // textTransform: 'uppercase',
      fontWeight: 'normal',
      lineHeight: '1',
      textAlign: 'center',
      textTransform: 'uppercase',
    }
}));

const AlertX = (props) => {

    const classes = useStyles();

    let overlayContent = [
        {
          header: 'We are official channel partners of Lixil Tostem Products, India'
        },
        {
          header: 'We are official dealers of ASSA ABLOY Enox Architecture Hardwares, India'
        },
        {
          header: 'We are official dealers of Imperio Handrail Systems, India'
        },
        {
          header: 'We deals with Windows and Doors, Architecure Hardwares, Glass solutions, Handrails'
        },
        {
          header: 'We procure the hardware you choose, ship it to your site and provide assistance to install them with our experienced technicians.'
        }
    ];
    let randomIndex = Math.floor(Math.random()* overlayContent.length);
    let overlayAd;
    
    if (overlayContent.length > -1 && randomIndex > -1 && overlayContent.length > randomIndex){
      overlayAd = overlayContent[randomIndex]
      
      return (
        <div className={classes.overlay}>
            <h2 className={classes.overlayHeader}>
            {overlayAd.header}
            </h2>
        </div>
      )
    }
    else{
      return (
        <div></div>
      )
    }
}

export default AlertX;
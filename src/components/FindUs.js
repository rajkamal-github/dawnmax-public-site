import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Heading from './Heading';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4rem 8rem',
        [theme.breakpoints.down('sm')]:{
            padding: '1rem 2rem',
        },
        backgroundColor: 'rgba(249, 189, 59, .76)',
        color: '#45484D',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header: {
        textTransform: 'uppercase',
    },
    subtitle2: {
        fontWeight: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '0.08333em'
    },
    content: {
        fontWeight: 'normal',
        letterSpacing: '0.08333em'
    }
}));

export default function FindUs() {
    const classes = useStyles();

    return (
    <div className={classes.root} id="findUs">
        <Grid 
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}>
            <Grid item xs={12} sm={6}>
                <Heading headerText="Find Us" />
                <Typography variant="subtitle2" className={classes.subtitle2}>
                    Dawnmax Build Tech. Pvt. Ltd
                </Typography>
                <Typography variant="body2" className={classes.content}>
                    Flat No: 3, First Floor, Plot No.20
                </Typography>
                <Typography variant="body2" className={classes.content}>
                    3rd Main Rd, Rajalakshmi Nagar
                </Typography>
                <Typography variant="body2" className={classes.content}>
                    Velachery, Chennai
                </Typography>
                <Typography variant="body2" className={classes.content}>
                    Tamil Nadu, India 600042
                </Typography>
                <Typography variant="subtitle2" className={classes.content}>
                    Contact No: <strong>+91 98405 44899</strong>
                </Typography>
                <Typography variant="subtitle2" className={classes.content}>
                    <a href="https://dawnmax.in">www.dawnmax.in</a>
                </Typography>
                <Typography variant="subtitle2" className={classes.content}>
                    Email: <a href="mailto:info.dawnmax@gmail.com">info.dawnmax@gmail.com</a>
                </Typography>
                <br />
                <br />
                <Typography variant="body2" className={classes.content}>
                    <strong>Open Monday to Saturday</strong>
                </Typography>
                <Typography variant="body2" className={classes.content}>
                    From 10:00 AM to 6:30 PM or
                </Typography>
                <Typography variant="body2" className={classes.content}>
                    talk to an expert <strong>+91 98405 44899</strong>
                </Typography>
            </Grid>
        </Grid>
        
    </div>
    );
}
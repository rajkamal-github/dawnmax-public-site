import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4rem 8rem',
        [theme.breakpoints.down('xs')]:{
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
    subtitle2: {
        textTransform: 'uppercase'
    }
}));

export default function FindUs() {
    const classes = useStyles();

    return (
    <div className={classes.root} id="findUs">
        <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={3}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                    Find Us
                </Typography>
                <Typography variant="subtitle2" className={classes.subtitle2}>
                    Dawnmax Pvt. Ltd
                </Typography>
                <Typography variant="body2">
                    Flat No: 3, First Floor, Plot No.20
                </Typography>
                <Typography variant="body2">
                    3rd Main Rd, Rajalakshmi Nagar
                </Typography>
                <Typography variant="body2">
                    Velachery, Chennai
                </Typography>
                <Typography variant="body2">
                    Tamil Nadu, India 600042
                </Typography>
                <Typography variant="subtitle2" className={classes.subtitle2}>
                    Contact No. : <strong>+91 98405 44899</strong>
                </Typography>
                <Typography variant="subtitle2">
                    www.dawnmax.in
                </Typography>
                <br />
                <br />
                <Typography variant="body2">
                    <strong>Open Monday to Saturday</strong>
                </Typography>
                <Typography variant="body2">
                    From 10.00 AM to 06.30 PM or
                </Typography>
                <Typography variant="body2">
                    talk to an expert <strong>+91 98405 44899</strong>
                </Typography>
            </Grid>
        </Grid>
        
    </div>
    );
}
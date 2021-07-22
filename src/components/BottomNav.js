import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Copyright from '../components/Copyright';
// import { Box } from '@material-ui/core';
// import FacebookIcon from './FacebookIcon';
// import TwitterIcon from './TwitterIcon';
// import LinkedInIcon from './LinkedInIcon';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '2rem 8rem',
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
    socialIcons: {
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'center',
        },
    }
}));

export default function BottomNav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid 
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
                >
                <Grid item xs={12} sm={6}>
                    <Copyright />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <Box display="flex" className={classes.socialIcons}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                    </Box>
                </Grid> */}
            </Grid>
        </div>
    );
}
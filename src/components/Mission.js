import React from 'react';
import { withStyles } from '@material-ui/styles';
// import Heading from './Heading';
import { Paper, Grid, Typography } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('sm')]:{
            padding: '2rem 2rem',
        },
        flexGrow: 1,
        backgroundColor: 'rgba(161, 162, 162, 1)',
    },
    // header:{
    //     padding: '1rem 0rem'
    // },
    missionStatementPaper: {
        backgroundColor: 'rgba(161, 162, 162, 1)',
        padding: '2rem 2rem',
        color: '#fff',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]:{
            padding: '2rem 0rem',
        },
    },
    missionStatement: {
        // fontWeight: 'bold',
        letterSpacing: '0.0333em',
        fontSize: '2.8rem',
        [theme.breakpoints.down('sm')]:{
            fontSize: '2rem',
        },
    },
    missionStatementDetail:{
        fontWeight: 'normal',
        letterSpacing: '0.08333em'
    }
});

const Mission = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid item xs={12} sm={12} md={6}>
                    <Paper className={classes.missionStatementPaper}>
                        <Typography variant="h2" gutterBottom className={classes.missionStatement}>                            
                            We at Dawnmax, enhance your dream home by delivering exceptional quality products with trusted service.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper className={classes.missionStatementPaper}>
                        <Typography variant="h6" gutterBottom className={classes.missionStatementDetail}>
                            Dawnmax is a multi-disciplinary solution provider firm that offers innovative products and solutions. Our firm is led by young and talented professionals with experience in a wide range of building products and services.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Mission);


import React from 'react';
import { withStyles } from '@material-ui/styles';
// import Heading from './Heading';
import { Paper, Grid, Typography } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.25rem 2rem',
        },
        flexGrow: 1,
        backgroundColor: 'rgba(161, 162, 162, 1)',
    },
    // header:{
    //     padding: '1rem 0rem'
    // },
    missionStatementPaper: {
        backgroundColor: 'rgba(161, 162, 162, 1)',
        padding: '2rem 0rem',
        color: '#fff',
        boxShadow: 'none',
    },
    missionStatement: {
        // fontWeight: 'bold',
        [theme.breakpoints.down('xs')]:{
            fontSize: '2.75rem',
        },
    },
    missionStatementDetailPaper:{
        backgroundColor: 'rgba(161, 162, 162, 1)',
        padding: '2rem 0rem',
        color: '#fff',
        boxShadow: 'none',
    },
    missionStatementDetail:{
        fontWeight: 'normal',
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
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.missionStatementPaper}>
                        <Typography variant="h2" gutterBottom className={classes.missionStatement}>
                            Our Mission is to achieve <strong>MAXimum Excellence</strong> in serving our customers.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.missionStatementDetailPaper}>
                        <Typography variant="h6" gutterBottom className={classes.missionStatementDetail}>
                            We strive to achieve MAXimum excellence in helping our customers to choose the right building materials to make their vision come true. We help our customers to determine the best brand that has <strong>state of the art design, excellent quality, pre-engineered</strong> which makes the site work simple and low skilled to construct.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(Mission);


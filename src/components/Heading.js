import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    root: {
        padding: '.5rem 0rem',
        margin: '.5rem 0rem',
        '&::before': {
            content: '""',
            width: '3rem',
            display: 'block',
            backgroundColor: '#45484D',
            // height: '.15rem',
            padding: '.10rem 0rem',
        },
    },
    header: {
        color: '#45484D',
        textTransform: 'uppercase',
        fontSize: '1.4rem',
        fontWeight: '200',
        margin: '.5rem 0rem',
        letterSpacing: '0.08333em'
    }
});

const HeadingComponent = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Typography className={classes.header} variant="h1" gutterBottom>
                {props.headerText}
            </Typography>
        </div>
    )
}

export default withStyles(styles)(HeadingComponent);
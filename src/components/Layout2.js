import React from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Main from './Main';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('sm')]:{
            padding: '6rem 2rem',
        },
    }
}));

const Layout2 = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopNav />
            <Main>
                {props.children}
            </Main>
            <Divider />
            <BottomNav />
        </div>
    )
}

export default Layout2;
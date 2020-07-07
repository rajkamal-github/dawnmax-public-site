import React from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Main from './Main';
import FindUs from './FindUs';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '0rem 2rem'
    }
}));

const Layout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopNav />
            <Main>
                {props.children}
            </Main>
            <FindUs />
            <Divider />
            <BottomNav />
        </div>
    )
}

export default Layout;
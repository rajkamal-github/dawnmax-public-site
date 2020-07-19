import React from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { CssBaseline, makeStyles } from '@material-ui/core';
import MainHome from './MainHome';
import FindUs from './FindUs';
import Divider from '@material-ui/core/Divider';
import DriftX from '../components/DriftX';

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
            <MainHome>
                {props.children}
            </MainHome>
            <FindUs />
            <Divider />
            <BottomNav />
            <DriftX />
        </div>
    )
}

export default Layout;
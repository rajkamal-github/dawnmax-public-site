import React from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { CssBaseline, makeStyles } from '@material-ui/core';
import MainPages from './MainPages';
import FindUs from './FindUs';
import Divider from '@material-ui/core/Divider';
import DriftX from '../components/DriftX';

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

const Layout2 = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopNav />
            <MainPages>
                {props.children}
            </MainPages>
            <FindUs />
            <Divider />
            <BottomNav />
            <DriftX />
        </div>
    )
}

export default Layout2;
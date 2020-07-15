import React from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Main2 from './Main2';
import FindUs from './FindUs';
import Divider from '@material-ui/core/Divider';
import DriftX from '../components/DriftX';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     padding: '8rem 8rem',
    //     [theme.breakpoints.down('sm')]:{
    //         padding: '6rem 2rem',
    //     },
    // }
}));

const Layout2 = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopNav />
            <Main2>
                {props.children}
            </Main2>
            <FindUs />
            <Divider />
            <BottomNav />
            <DriftX />
        </div>
    )
}

export default Layout2;
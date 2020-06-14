import React from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Main from './Main';
import FindUs from './FindUs';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '8rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '4rem 2rem',
        },
        flexGrow: 1,
      }
}));

const Layout2 = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Main>
                {props.children}
            </Main>
            <FindUs />
            <Divider light />
            <BottomNav />
        </div>
    )
}

export default Layout2;
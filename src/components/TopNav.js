import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from './Logo';
import TopNavMenu from './TopNavMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor: '#F9BD3B',
      color: '#45484D',
      padding: '.5rem 0rem' 
  }
}));

export default function TopNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="default" className={classes.appbar}>
        <Toolbar>
          <Logo />
          <Typography variant="h6" className={classes.title}>
            DAWNMAX
          </Typography>
          <TopNavMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

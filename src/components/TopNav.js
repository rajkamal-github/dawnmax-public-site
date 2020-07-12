import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from './Logo';
import TopNavMenu from './TopNavMenu';
import SEO from './seo';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
      backgroundColor: 'rgba(249, 189, 59, .76)',
      color: '#45484D',
      padding: '.5rem .5rem',
      // [theme.breakpoints.down('sm')]:{
      //     padding: '0.25rem .5rem',
      // },
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
      {/* <SEO title="Dawnmax" 
        keywords={[`Door`, `Window`, `Glass`, `Glass Window`, `Lixil`, 'Tostem', `Dawnmax`, `Imperio Railing Systems`, `Imperio`, 'Handrail', `enoxe`]}/> */}
    </div>
  );
}

import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
      fontWeight: 'normal',
      letterSpacing: '0.08333em'
  }
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="inherit" className={classes.content}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Dawnmax Pvt. Ltd.
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="inherit">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Dawnmax Pvt. Ltd.
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

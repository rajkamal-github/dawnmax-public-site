import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.25rem 2rem',
        },
        // backgroundColor: '#F9BD3B',
        // backgroundColor: '#fff'
    },
    highlightImage: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    }
}));

const query = graphql`
    query {
        file(dir: {regex: "/images/highlight$/"}) {
            id
            publicURL
            absolutePath
            relativePath
        }
    }
`;

const HighlightComponent = (props) => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Grid 
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}>
            <Grid item xs={12} sm={3}>
                <img src={props.data.file.publicURL} alt='Tostem' className={classes.highlightImage}/>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Typography variant="body2" component="p">
                    We are a channel Partner of Lixil – Tostem. Recognized as the leading brand for global housing and building material industry in Japan, TOSTEM provides a comprehensive range of solutions to ensure comfortable homes for everybody through advanced technologies. We do so by drawing on over a half-century of experience and expertise in developing innovative technology that anticipates not only the needs for all here and now, but also the needs for home living tomorrow.
                </Typography>
            </Grid>
        </Grid>
        
    </div>
    );
}

const Highlight = (props) => (
    <StaticQuery
      query={query}
      render={data => (
        <HighlightComponent data={data} {...props}/>
      )}
    />
  );

export default withStyles(useStyles)(Highlight);
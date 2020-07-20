import React from 'react';
import Container from '@material-ui/core/Container';
import { Box, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        minHeight: '100vh',
        padding: '2rem 8rem',
        [theme.breakpoints.down('sm')]:{
            padding: '2rem 2rem',
        },
    },
    container: {
        padding: "0rem 0rem"
    }
}));

const Main = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main className={classes.main}>
                <Container maxWidth={false} className={classes.container}>
                    <Paper elevation={0}>
                        <Box height="100%">
                            {props.children}
                        </Box>
                    </Paper>
                </Container>
            </main>
        </React.Fragment>
    )
}

export default Main;
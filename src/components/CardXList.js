import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardX from './CardX';
import Heading from '../components/Heading';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem 8rem',
        [theme.breakpoints.down('xs')]:{
            padding: '0.25rem 2rem',
        },
        flexGrow: 1,
      },
      header:{
          padding: '1rem 0rem'
      }
}));

const tileData = [
    {
        img: 'https://www.dallasglassandauto.com/wp-content/uploads/2017/02/smart-glass.jpg',
        title: 'Windows and Doors',
        author: 'Scott Peck'
    },
    {
        img: 'https://www.dallasglassandauto.com/wp-content/uploads/2017/02/smart-glass.jpg',
        title: 'Glass Architecture',
        author: 'Scott Peck'
    },
    {
        img: 'https://www.dallasglassandauto.com/wp-content/uploads/2017/02/smart-glass.jpg',
        title: 'Handrails',
        author: 'Scott Peck'
    }
];

export default function CardXList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Heading headerText='Featured Products' />
            <Grid container spacing={3}>
                {
                    tileData.map((element, index)=> {
                        return (
                            <Grid item xs={12} sm={4} key={index}>
                                <CardX {...element}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}
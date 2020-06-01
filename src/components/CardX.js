import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        backgroundColor: 'rgba(249, 189, 59, .1)',
        borderRadius: 'unset'
      },
      media: {
        height: '25vh',
      },
      typographyHeader: {
        color: 'rgba(69, 72, 77, 1)',
        // textTransform: 'uppercase',
        fontSize: '1rem'
      },
      typographyCaption: {
        color: 'rgba(69, 72, 77, 1)',
        fontSize: '.9rem'
      }
}));

export default function CardX(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.img}
                title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="overline" className={classes.typographyHeader}>
                        {props.title}
                    </Typography>
                    <Typography variant="body1" component="p" className={classes.typographyCaption}>
                        Be fearless. Have the courage to take risks. Go where there are no guarantees.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
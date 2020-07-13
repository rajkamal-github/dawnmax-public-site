import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link} from "gatsby";

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        backgroundColor: 'rgba(249, 189, 59, .08)',
        borderRadius: 'unset',
      },
      cardLink: {
          padding: '1rem',
          textDecoration: 'none',
      },
      cardActionArea: {
        // display: 'flex',
        // flexDirection: 'column'
      },
      cardMedia:{
        height: '35vh',
        backgroundSize: 'cover',
      },
      cardContent: {
        padding: '1rem .5rem 1rem .5rem',
        display: 'flex',
        flexDirection: 'column'
      },
      typographyHeader: {
        color: 'rgba(69, 72, 77, 1)',
        fontSize: '1rem',
        textAlign: 'center',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '400',
        lineHeight: '2.66',
        letterSpacing: '0.08333em',
        textTransform: 'uppercase'
      },
      typographyCaption: {
        color: 'rgba(69, 72, 77, 1)',
        fontSize: '.9rem'
      }
}));

export default function CardX(props) {
    const classes = useStyles();
    // console.log(props);

    if (props.link){
      return (
        <Link to={props.link} className={classes.cardLink} underline='none'>
          <Card className={classes.root}>
              <CardActionArea className={classes.cardActionArea}>
                  <CardMedia
                      className={classes.cardMedia}
                      image={props.img}
                      alt={props.title}
                      title={props.title}
                  />
                  <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h1" className={classes.typographyHeader}>
                          {props.title}
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
        </Link>
      );
    }
    else{
      return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cardActionArea}>
                <CardMedia
                    className={classes.cardMedia}
                    image={props.img}
                    title={props.title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h1" className={classes.typographyHeader}>
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      );
    }
}
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
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 'unset',
      },
      cardLink: {
          padding: '1rem',
          textDecoration: 'none',
      },
      cardActionArea: {
        // display: 'flex',
        // flexDirection: 'row'
      },
      cardMedia:{
        height: '45vh',
        backgroundSize: 'cover',
      },
      cardContent: {
        padding: '1rem 2rem 1rem 2rem',
        display: 'flex',
        flexDirection: 'column'
      },
      typographyHeader: {
        color: 'rgba(69, 72, 77, .78)',
        fontSize: '1.4rem',
        textAlign: 'center',
        // fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '200',
        lineHeight: '2.66',
        letterSpacing: '0.08333em',
        textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]:{
          fontSize: '1.1rem',
        },
      },
      typographyDescription: {
        color: 'rgba(69, 72, 77, .78)',
        fontSize: '.9rem',
        textAlign: 'center',
        // fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '100',
        lineHeight: '1.66',
        letterSpacing: '0.08333em',
        textTransform: 'normal'
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
                      <Typography gutterBottom variant="h2" className={classes.typographyHeader}>
                          {props.title}
                      </Typography>
                      <Typography gutterBottom variant="body2" className={classes.typographyDescription}>
                          {props.description}
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
                      <Typography gutterBottom variant="body2" className={classes.typographyDescription}>
                          {props.description}
                      </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      );
    }
}
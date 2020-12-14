import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import reptile from '../assets/contemplative-reptile.jpg';
import Container from '@material-ui/core/Container';
import CircularIndeterminate from './Loading';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    marginTop: 50,
  },
});

export default function Home(props) {
  const classes = useStyles();

  if (props.isLoading) {
    return(
      <CircularIndeterminate />
    );
  }
  else{

    return (
    	<Container component="main" maxWidth="sm">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="340"
            image={reptile}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Container>
    );
  }
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PostDetails(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Author:
        </Typography>
        <Typography variant="h5" component="h2">
            {props.author}
        </Typography>
        <br />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Subreddit ID:
        </Typography>
        <Typography variant="h5" component="h2">
            {props.subreddit_id}
        </Typography>
        <br />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.thumbnail !== '' ? 'Thumbnail image' : 'No thumbnail image for this user.'}
        </Typography>
        { props.thumbnail !== '' ? <img src={props.thumbnail}  alt="user thumbnail" /> : null }
        <br />
        <br />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Title:
        </Typography>
        <Typography>
            {props.title}
        </Typography>
        <br />
        <br />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Post ID:
        </Typography>
        <Typography variant="h5" component="h2">
            {props.id}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Go to subreddit</Button>
      </CardActions>
    </Card>
  );
}
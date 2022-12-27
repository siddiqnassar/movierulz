import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles({
  cardMainContainer: {
    width: "23.3% !important",
    display: "inline-block",
    height: '800px',
    padding: 10,
  },
  cardImage: {
    height: "600px",
  },
  darkMode: {
    backgroundColor: '#216 !important',
    color: '#fff !important',
  },
  lightMode: {
    backgroundColor: '#fff !important',
    color: '#000 !important',
  },
  Title: {
      minHeight: '70px',
  },
});
function MovieCard(props) {
  const classes = useStyles();

  return (
    <Card className={`${classes.cardMainContainer} ${props.state.mode === "lightmode" ? classes.lightMode : classes.darkMode}` }>
      <CardMedia
        className={classes.cardImage}
        image={
          props.Poster == null
            ? require("../static/images/404.png")
            : props.Poster
        }
        title={props.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={`${classes.Title} ${props.state.mode === "lightmode" ? classes.lightMode : classes.darkMode}`}>
        {props.Title} 
        </Typography>
        <Typography variant="body2" className={props.state.mode === "lightmode" ? classes.lightMode : classes.darkMode}>
          {props.Year}
        </Typography>
      </CardContent>
      <CardActions>
      <Typography variant="body2" className={props.state.mode === "lightmode" ? classes.lightMode : classes.darkMode}>
         Duration : {' '} {props.Runtime}
        </Typography>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(MovieCard);

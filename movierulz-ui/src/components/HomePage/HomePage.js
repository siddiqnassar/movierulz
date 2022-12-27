import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { getApiResults } from "../../data/ServerResults";
const useStyles = makeStyles({
  MovieCardContainer: {
    padding: 20,
    maxWidth: '90%',
    margin: '0 auto !important',
  },
  darkMode: {
    backgroundColor: '#216 !important',
  },
  lightMode: {
    backgroundColor: '#fff !important',
  }
});
function HomePage(props) {
  const classes = useStyles();
  const [movieResults, setMovieResults] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setMovieResults(await getApiResults());
    }
    fetchData();
  }, []);
  const testMovieResults = () => {
    console.log("movie results in test is ", movieResults);
  };
  return (
    <Typography variant="div" component="div" className={props.state.mode === "lightmode"? classes.lightMode : classes.darkMode}>
      <Typography
        variant="div"
        component="div"
        className={classes.MovieCardContainer}
      >
        {movieResults === null || movieResults === undefined
          ? null
          : movieResults.map((movie) => (
              // <MenuItem key={movie.Title}>
              //   <Typography textAlign="center">{movie.Title}</Typography>
              // </MenuItem>
              <MovieCard
                Title={movie.Title}
                Year={movie.Year}
                Runtime={movie.Runtime}
                Poster={movie.Poster}
              ></MovieCard>
            ))}
      </Typography>
    </Typography>
  );
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(HomePage);

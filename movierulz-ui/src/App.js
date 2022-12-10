import "./App.css";
import React from "react";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
import AppBar from "./components/AppBar/AppBar";

const App = (props) => {
  return (
    <>
      <Typography variant="div" component="div">
        <AppBar></AppBar>
      </Typography>
      ;
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(App);

//export default App;

import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./components/HomePage/HomePage";
const App = (props) => {
  return (
    <>
      <AppBar></AppBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
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

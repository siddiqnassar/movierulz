import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import { store } from "./redux/setup/setUpStore";
import * as commonActionCreator from "./redux/common/actionCreator";
import { connect } from "react-redux"

const App =  (props) => {
  const Hi = (event) => {
    console.log("Hii" + event.target);
    console.log(store.getState());
    store.dispatch(commonActionCreator.userLoggedIn());
    console.log(store.getState());
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={(event) => {
            Hi(event);
          }}
        >
          Click ME..!!
        </Button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    viewMode: state.viewMode,
  };
};
export default connect(mapStateToProps)(App);

//export default App;

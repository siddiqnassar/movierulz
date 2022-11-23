import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import { store } from "./redux/setup/store";
import * as actionCreator from "./redux/setup/actionCreator";

function App() {
  const Hi = (event) => {
    console.log("Hii" + event.target);
    console.log(store.getState());
    store.dispatch(actionCreator.enableDarkMode());
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

export default App;

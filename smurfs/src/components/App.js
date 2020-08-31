import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./App.css";

import { reducer } from "../reducers";
import  AddSmurfForm from "./AddSmurfForm";
import Smurf from "./Smurf";

export const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <AddSmurfForm />
        <Smurf />
      </div>
    );
  }
}

export default App;

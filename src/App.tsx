/*App.tsx*/
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
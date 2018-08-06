import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Containers from "./containers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Containers />
      </div>
    );
  }
}

export default App;

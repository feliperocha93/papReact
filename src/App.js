import React from "react";
import "./App.css";

import Header from "./Components/Header";
import ListItem from "./Components/ListItem";

function App() {
  return (
    <div className="App">
      <Header title="To-do Iteris"></Header>
      <ListItem />
    </div>
  );
}

export default App;

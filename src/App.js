import React from "react";
import "./App.css";

import Header from "./Components/Header";
import List from "./Components/List";

function App() {
  return (
    <div className="App">
      <Header title="To-do Iteris"></Header>
      <List />
    </div>
  );
}

export default App;

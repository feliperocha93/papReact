import React from "react";
import "./App.css";

import Header from "./Components/Header";
import List from "./Components/List";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Header title="To-do Iteris"></Header>
      <Form />
      <List />
    </div>
  );
}

export default App;

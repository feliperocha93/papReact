import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import List from "./Components/List";
import Form from "./Components/Form";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header title="To-do Iteris"></Header>
      <Form tasks={tasks} setTasks={(task) => setTasks(task)} />
      <List tasks={tasks} />
    </div>
  );
}

export default App;

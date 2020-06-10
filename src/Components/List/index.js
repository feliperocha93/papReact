import React, { useState } from "react";
import ListItem from "../ListItem";

import "./styles.css";

function List() {
  const [tasks, setTasks] = useState([
    { title: "papReact", description: "Terminar o módulo 3" },
    {
      title: "Janta",
      description: "Colocar o frango na airfryer 15 minutos antes",
    },
    { title: "Clash Royale", description: "Subir 100 troféus antes de dormir" },
  ]);

  return tasks.map((task) => (
    <ListItem title={task.title} description={task.description} />
  ));
}

export default List;

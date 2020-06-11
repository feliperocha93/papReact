import React, { useState } from "react";
import ListItem from "../ListItem";

import "./styles.css";

function List() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ListItem
            key={task.title}
            title={task.title}
            description={task.description}
          />
        ))
      ) : (
        <h2>Sem tarefas</h2>
      )}
    </>
  );
}

export default List;

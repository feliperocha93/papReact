import React from "react";
import ListItem from "../ListItem";

import "./styles.css";

function List({ tasks, setTasks }) {
  function deleteTask(title) {
    const filteredTasks = tasks.filter((task) => {
      return task.title !== title;
    });

    setTasks(filteredTasks);
  }

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ListItem
            key={task.title}
            title={task.title}
            description={task.description}
            deleteTask={(title) => deleteTask(title)}
          />
        ))
      ) : (
        <h2>Sem tarefas</h2>
      )}
    </>
  );
}

export default List;

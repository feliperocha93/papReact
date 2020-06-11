import React from "react";
import ListItem from "../ListItem";

import "./styles.css";

function List({ tasks }) {
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

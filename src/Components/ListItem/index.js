import React from "react";

import "./styles.css";

function ListItem({ title, description, deleteTask }) {
  function handleDelete(event) {
    const title = event.target.name;

    deleteTask(title);
  }

  return (
    <div className="list-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button" name={title} onClick={handleDelete}>
        Excluir
      </button>
    </div>
  );
}

export default ListItem;

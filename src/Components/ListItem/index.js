import React from "react";

import "./styles.css";

function ListItem({ title, description }) {
  return (
    <div className="list-item">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ListItem;

import React, { useState } from "react";
import "./styles.css";

function Form({ tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const task = { title, description };
    setTasks([...tasks, task]);
  }

  return (
    <form className="list-form" onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Form;

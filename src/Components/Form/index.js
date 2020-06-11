import React, { useState } from "react";
import "./styles.css";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form className="list-form">
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

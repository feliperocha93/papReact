import React from "react";
import "./styles.css";

function Form() {
  return (
    <form className="list-form">
      <input placeholder="Título" type="text" />
      <textarea placeholder="Descrição" />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Form;

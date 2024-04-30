import {useState } from "react";

const InputAgregarTarea = ({ funcion }) => {
  const [valorInput, setValorInput] = useState("");

  const cambioInput = (event) => {
    setValorInput(event.target.value);
  };

  const enviar = (event) => {
    event.preventDefault();
    funcion(valorInput);
    setValorInput("");
  };

  return (
    <form onSubmit={enviar} className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Ingrese nueva tarea"
        value={valorInput}
        onChange={cambioInput}
      />
      <button className="btn btn-primary" type="submit">Agregar</button>
    </form>
  );
};

export default InputAgregarTarea;
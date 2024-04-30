const InputFiltro = ({ value, funcion }) => {
    return (
        <input
          value={value}
          className="form-control"
          type="text"
          placeholder="Buscar Tarea"
          onChange={funcion}
        />
      );
}

export default InputFiltro;
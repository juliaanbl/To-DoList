const BotonBorrar = ({id, funcion}) => {

    const eliminar = () => {
        funcion(id);
    }

    return (
      <button className="btn btn-danger btn-square" onClick={eliminar}>X</button>
    );
}
  
export default BotonBorrar;
  
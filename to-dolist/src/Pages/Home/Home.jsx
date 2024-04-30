import {useState } from "react";
import Titulo from "../../Components/Titulo/Titulo";
import InputAgregarTarea from "../../Components/InputAgregarTarea/InputAgregarTarea";
import InputCheck from "../../Components/InputCheck/InputCheck";
import InputFiltro from "../../Components/InputFiltro/InputFiltro";
import BotonBorrar from "../../Components/BotonBorrar/BotonBorrar";


const tituloPagina = "To-Do List";

const Home = () => {

const [arregloTareas, setArregloTareas] = useState([]);
const [arregloTareasComp, setArregloTareasComp] = useState([]);
const [search, setSearch] = useState("");

const agregarTarea = (tarea) => {
    const nuevoArreglo = [...arregloTareas, {id: arregloTareas.length+1, nombre:tarea}];
    setArregloTareas(nuevoArreglo);
};
  
const eliminarTarea = (id) => {
    const nuevoArreglo = arregloTareas.filter(tarea => tarea.id !== id);
    setArregloTareas(nuevoArreglo);
  
    const nuevaArregloTareasComp = arregloTareasComp.filter(tarea => tarea.id !== id);
    setArregloTareasComp(nuevaArregloTareasComp);
  };
  
const marcarTareaComp = (id) => {
    const tareaMarcada = arregloTareas.find(tarea => tarea.id === id);
  
    if (!arregloTareasComp.some(tarea => tarea.id === id)) {
      setArregloTareasComp([...arregloTareasComp, tareaMarcada]);
    } else {
      const nuevoArreglo = arregloTareasComp.filter(tarea => tarea.id !== id);
      setArregloTareasComp(nuevoArreglo);
    }
}

const cambioEstadoBuscador = (event) => {
    setSearch(event.target.value);
};

const results = !search ? arregloTareas : arregloTareas.filter((dato) =>
    dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <div>
            <Titulo texto={tituloPagina} />
            <InputFiltro value={search} funcion={cambioEstadoBuscador}/>
            <table>
                <thead>
                    <tr>
                        <th><InputAgregarTarea funcion={agregarTarea} /></th>
                    </tr>
                    <tr>
                        <th>Tareas</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((tarea) => (
                <tr> 
                    <th key={tarea.id}>
                        {tarea.nombre}
                        <BotonBorrar id={tarea.id} funcion={eliminarTarea}/>
                        <InputCheck id={tarea.id} funcion={marcarTareaComp}/>
                    </th>
                </tr>
                ))}
                </tbody>
            </table>
            <p>Tareas Completadas: {arregloTareasComp.length}/{arregloTareas.length}</p>
        </div>
    );
}

export default Home;
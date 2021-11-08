import {useState} from "react"
import {nanoid} from 'nanoid'
function App() {

  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] =useState([])

  const agregarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Elemento vacío')
      return
    }

    setTareas([
      ...tareas,
      {id: nanoid(10),
      nombreTarea: tarea}
    ])
    setTarea('')
  }
  return (
    <div className="container">
      <h1 className="text-center" >CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nombre de la tarea</span>
              <button className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
              <button className="btn btn-warning btn-sm float-end">Editar</button>

            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className='text-center'>Formulario</h4>
          <form onSubmit={agregarTarea}>
            <input 
            type="text" 
            className="form-control"
            placeholder="Ingrese tarea"
            onChange={e => setTarea(e.target.value)}
            value={tarea}
            />
            <button className="btn btn-dark w-100" type="submit" >
              Agregar
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;

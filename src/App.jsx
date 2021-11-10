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

  const eliminarTarea = id => {
    // console.log(id)
    // Filter elements that are different to id we want to exclude
    const arrayFiltrado = tareas.filter(item => item.id !== id)

    setTareas(arrayFiltrado)
  }
  return (
    <div className="container">
      <h1 className="text-center" >CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.nombreTarea}</span>
                  <button className="btn btn-danger btn-sm float-end mx-2" onClick={()=> eliminarTarea(item.id)}>Eliminar</button>
                  <button className="btn btn-warning btn-sm float-end">Editar</button>
                </li>
              ))
            }
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

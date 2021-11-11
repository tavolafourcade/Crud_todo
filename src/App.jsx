import {useState} from "react"
import {nanoid} from 'nanoid'
function App() {

  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] =useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)

  const agregarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Elemento vacío')
      setError('Elemento vacío')
      return
    }

    setTareas([
      ...tareas,
      {id: nanoid(10),
      nombreTarea: tarea}
    ])
    setTarea('')
    setError(null)
  }

  const eliminarTarea = id => {
    // console.log(id)
    // Filter elements that are different to id we want to exclude
    const arrayFiltrado = tareas.filter(item => item.id !== id)

    setTareas(arrayFiltrado)
  }

  const editar = item => {
    setModoEdicion(true)
    setTarea(item.nombreTarea)
    setId(item.id)
    console.log(item)
  }

  const editarTarea = e => {
    e.preventDefault()
    if(!tarea.trim()){
      console.log('Elemento vacío')
      setError('Elemento vacío')
      return
    }

    const arrayEditado = tareas.map(
      item => item.id === id ? {id, nombreTarea: tarea} : item)
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
    setError(null)
  }

  return (
    <div className="container">
      <h1 className="text-center" >CRUD Simple</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          {tareas.length === 0 ? (
            <li className="list-group-item">No hay tareas</li>
          ) :
          (
            <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.nombreTarea}</span>
                  <button className="btn btn-danger btn-sm float-end mx-2" onClick={()=> eliminarTarea(item.id)}>Eliminar</button>
                  <button className="btn btn-warning btn-sm float-end" onClick={() => editar(item)}>Editar</button>
                </li>
              ))
            }
          </ul>
          )}
        </div>
        <div className="col-4">
          <h4 className='text-center'>{
            modoEdicion? 'Editar Tarea': 'Agregar Tarea'
          }
          </h4>
          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
            {
              error ? <span className='text-danger'> {error}</span> : null
            }
            <input 
            type="text" 
            className="form-control"
            placeholder="Ingrese tarea"
            onChange={e => setTarea(e.target.value)}
            value={tarea}
            />
            {
              modoEdicion?(
            <button className="btn btn-warning w-100" type="submit" >
              Editar
            </button>
              ):(
              <button className="btn btn-dark w-100" type="submit" >
              Agregar
            </button>
            )
            }
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;

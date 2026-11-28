import {Link} from 'react-router'
import ErrorAlert from './common/ErrorAlert'
import TaskRow from './TaskRow'
import Loading from './common/Loading'
import { getTasks, deleteTask } from '../services/taskService'
import { useEffect, useState } from 'react'

const ShowTasks = () => {

  const [tasks, setTasks] = useState([])
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        setTasks( await getTasks())
      } catch (err) {
        setError(err.message)
      } finally {
        setloading(false)
      }
    }

    getAllTasks()
    //console.log(tasks); // datos crudos
    
  }, [])

  const isEmpty = !loading && tasks.length === 0

  return (
    <>
      {/* header */}
      <header className="page-header">
        <h2>Listado de Tareas</h2>
        <Link to="/tasks/create" className="btn btn-success">+ Nueva tarea</Link>
      </header>
      {/* Componente que me pone un error*/}
      <ErrorAlert message={error} />
      
      {/* Cargando */}
      {/* {loading && <Loading message="Cargando tareas desde la API..." />} */}
      
      {/* La API no tiene datos: No hay tareas registradas */}
      {isEmpty && <p className="alert alert-info">No hay tareas registradas</p>}

      {/* Generar una tabla con las atareas si tiene datos*/}
      <div className="panel tabla-panel">
        <table className="table table-hover">
          <thead className="table-primary">
            <tr>
              <th>Tarea</th>
              <th className="progress-col">Avance</th>
              <th className="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            { tasks.map( (task) => (
              <TaskRow key={task.id} task={task} />
            ) ) }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default ShowTasks
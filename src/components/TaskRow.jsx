import { Link } from 'react-router'
import ProgressBar from './common/ProgressBar'

const TaskRow = ({ id }) => {
  return (
    <tr>
      <td>Tarea de prueba</td>
      <td>
        <ProgressBar progress={50}/>
      </td>
      <td className="actions">
        <Link to={`/task/edit/${id}`} className="btn btn-warning btn-sm">Editar</Link>
        <Link to={`/tasks`} className="btn btn-danger btn-sm">Eliminar</Link>
      </td>
    </tr>
  )
}
export default TaskRow
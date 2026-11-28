import { Link } from 'react-router'
import ProgressBar from './common/ProgressBar'

const TaskRow = ({ task }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td>
        <ProgressBar progress={task.progress}/>
      </td>
      <td className="actions">
        <Link to={`/task/edit/${task.id}`} className="btn btn-warning btn-sm">Editar</Link>
        <Link to={`/tasks`} className="btn btn-danger btn-sm">Eliminar</Link>
      </td>
    </tr>
  )
}
export default TaskRow
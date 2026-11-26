import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './components/Home'
import ShowTasks from './components/ShowTasks'
import CreateTask from './components/CreateTask'
import EditTask from './components/EditTask'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        
        <nav className="app-nav">
          <div className="app-container">
            <Link to="/" className="brand">Gestor de Proyectos</Link>
            <div className="links">
              <Link to="/">Inicio</Link>
              <Link to="/tasks">Tareas</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<ShowTasks />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/tasks/edit/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

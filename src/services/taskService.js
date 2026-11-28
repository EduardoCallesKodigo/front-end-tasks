const API_URL = import.meta.env.VITE_API_URL;

//Funcion request() para conectarme con la API
async function request(url,  options = {}) {
  let response

  try {
    response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'aplication/json',
        ...options.headers,
      },
    })

  } catch {
    throw new Error('No se pudo conectar con el servidor. Verifica que la API esté encendida.')
  }

  if (!response.ok) {
    let errorMessage = `Error HTP ${response.status}`
    try {
      const errorData = await response.json()
      if (errorData.message) errorMessage = errorData.message
    } catch {
      // conservamos el error HTTP
    }
    throw new Error(errorMessage)
  }

  return response.json()
} 

// --- Operaciones CRUD --- 

// GET -> Leer todos los registros o un registro(por ID)
export const getTasks = () => request(API_URL) // traer todos
export const getTaskById = (id) => request(`${API_URL}/${id}`) // trar por id

// POST -> Crear nuevos registros
export const createTask = (task) => request(API_URL, {
  method: 'POST',
  body: JSON.stringify(task),
})

// PUT -> Actualizar o Modificar registro(por ID)
export const updateTask = (id, task) => request(`${API_URL}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(task),
})

// DELETE -> Eliminar un registro(por ID)
export const deleteTask = (id) => request(`${API_URL}/${id}`, {
  method: 'DELETE',
})
const Loading = ({message = 'Cargando...'}) => {
  return (
    <div className="loading">
      <div className="spinner-border text-primary" role="status">
        <p>{message}</p>
      </div>
    </div>
  )
}
export default Loading
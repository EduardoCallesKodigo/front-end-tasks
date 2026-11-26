const ErrorAlert = ({message, children}) => {
  
  if (!message) return null

  return (
    <div className="alert alert-danger" role="alert">
      {message} {children}
    </div>
  )
}
export default ErrorAlert
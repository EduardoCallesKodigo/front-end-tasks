const ProgressBar = ({progress}) => {

  const color = progress === 100 ? 'bg-success' : 'bg-primary'

  return (
    <div className="progress">
      <div className={ `progress-bar ${color}` } style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  )
}
export default ProgressBar
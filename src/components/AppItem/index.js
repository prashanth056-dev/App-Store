// Write your code here
import './index.css'

const AppItem = props => {
  const {obj} = props
  const {appName, imageUrl} = obj
  return (
    <li className="card">
      <img className="img" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem

import './index.css'

const TabItem = props => {
  const {obj, isActive, func} = props
  const {tabId, displayText} = obj
  const activeClass = isActive ? 'active' : ''

  const itemClick = () => {
    func(tabId)
  }

  return (
    <li className="lsts">
      <button
        type="button"
        className={`tabItem ${activeClass}`}
        onClick={itemClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

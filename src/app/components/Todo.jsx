import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, key }) => (
  <li className="list-group-item"
  	key={key}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
import React from 'react'
import MonthCell from './MonthCell.jsx'
import PropTypes from 'prop-types'

const MonthRow = (state, onUpdate) => (
  <tr>
  	
    {state.categories.map(category =>
        	<MonthCell 
        	{...category}
        	key={category.field}
        	id={state.id}
        	field={category.field}
        	value={state[category.field]}
        	onUpdate={state.onUpdate}
        	/>    
        )}

    <td> {state.total} </td>
  </tr>
)

MonthRow.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUpdate:PropTypes.func.isRequired
}
export default MonthRow
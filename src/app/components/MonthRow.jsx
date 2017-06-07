import React from 'react'
import MonthCell from './MonthCell.jsx'
import PropTypes from 'prop-types'

const MonthRow = (state) => (
  <tr>
    {state.categories.map(category =>
        	<MonthCell 
        	{...category}
        	key={category.field}
        	/>    
        )}
  </tr>
)

MonthRow.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired).isRequired
}
export default MonthRow
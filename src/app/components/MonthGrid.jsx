import React from 'react'
import MonthRow from './MonthRow.jsx'
import PropTypes from 'prop-types'

const MonthGrid = ({ entries, categories, onAddEntryClick }) => (
  <div>
  <table>
  <thead>
  <tr>
  {categories.map(category=>

  	<th key={category.field}> {category.text} </th>
  	)}
  </tr>
  </thead>
  <tbody>
    {entries.map(entry =>
      <MonthRow 
        key={entry.id}
        categories={categories}
        {...entry}
      />
    )}
  </tbody>
  </table>
  <button type='button' onClick={() => onAddEntryClick(0,0)} >Add</button>
  </div>
)

MonthGrid.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
    expense: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onAddEntryClick: PropTypes.func.isRequired
}

export default MonthGrid
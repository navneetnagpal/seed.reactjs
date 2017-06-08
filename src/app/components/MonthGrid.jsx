import React from 'react'
import MonthRow from './MonthRow.jsx'
import TextWithAddBtn from './TextWithAddBtn.jsx'
import PropTypes from 'prop-types'

const MonthGrid = ({ entries, categories, onAddEntryClick, onPlusClick, onCellUpdate }) => (
    <div>
  Category:<TextWithAddBtn onPlusClick={onPlusClick} />
  <table className='table table-striped'>
  <thead>
  <tr>
  	{categories.map(category=>

  		<th key={category.field}> {category.text} </th>
  	)}
   <th> Total </th>
  </tr>
  </thead>
  <tbody>
    {entries.map(entry =>
      <MonthRow 
        key={entry.id}
        categories={categories}
        {...entry}
        onUpdate={onCellUpdate}
      />
    )}
  </tbody>
  </table>
  <button type='button' onClick={() => onAddEntryClick(0,0)} >Add</button>
  </div>
)

MonthGrid.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }).isRequired).isRequired,
    onAddEntryClick: PropTypes.func.isRequired,
    onPlusClick: PropTypes.func.isRequired,
    onCellUpdate: PropTypes.func.isRequired
}

export default MonthGrid

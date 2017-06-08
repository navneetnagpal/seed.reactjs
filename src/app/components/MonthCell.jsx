import React from 'react'
import PropTypes from 'prop-types'



let MonthCell = ({value,field,id, onUpdate}) => {
	let input
	  
	return ( <td>
    $<input type="text" ref={node=>{
    	input=node
    }} value={value} onChange={()=>onUpdate(field, input.value*1, id)}/>  
  </td>)
}

MonthCell.propTypes = {
	id: PropTypes.number.isRequired,
	field: PropTypes.string.isRequired,
	value:PropTypes.number,
  	onUpdate: PropTypes.func.isRequired
}
export default MonthCell
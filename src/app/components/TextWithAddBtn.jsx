import React from 'react'
import PropTypes from 'prop-types'

let TextWithAddBtn = ({ onPlusClick }) => {
    let input

    return (
    	<form className="text-add-btn" onSubmit={(e)=>{
    		e.preventDefault();
    		if (input.value){
				onPlusClick(input.value)
				input.value=''
			}
    	}}>
        <span>
<input type="text" className="text-add-btn__input-box" ref={node => {
input = node
}} /> <button type='submit' >+</button>
</span>
</form>
    )
}

TextWithAddBtn.propTypes = {
    onPlusClick: PropTypes.func.isRequired
}

export default TextWithAddBtn

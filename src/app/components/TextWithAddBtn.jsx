import React from 'react'
import PropTypes from 'prop-types'

let TextWithAddBtn = ({ onPlusClick }) => {
    let input

    return (
        <span>
<input type="text" ref={node => {
input = node
}} /> <button type='text' onClick={()=>{
if (input.value){
onPlusClick(input.value)
input.value=''
}
}} >+</button>
</span>
    )
}

TextWithAddBtn.propTypes = {
    onPlusClick: PropTypes.func.isRequired
}

export default TextWithAddBtn

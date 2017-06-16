import React, { Component } from 'react'
import PropTypes from 'prop-types'


class MonthCell extends Component {
    constructor(state) {
    	console.log(state);
        super();
        this.state = {
            value: state.value || ''
        };
    }
    handleChange(field, value, id) {
        this.setState({
            value: value
        });
        this.props.onUpdate(field, value, id)
    }

    render() {
        let input

        return (<td>
		    $<input type="text" ref={node=>{
		    	input=node
		    }} value={this.state.value} onChange={()=>this.handleChange(this.props.field, input.value*1, this.props.id)}/>  
		  </td>)
    }
}

MonthCell.propTypes = {
    id: PropTypes.number.isRequired,
    field: PropTypes.string.isRequired,
    value: PropTypes.number,
    onUpdate: PropTypes.func.isRequired
}
export default MonthCell

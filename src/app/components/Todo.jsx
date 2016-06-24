import React, { Component, PropTypes } from 'react'

class ToDoItem extends Component {
    render() {
        return <div>{this.props.title}</div>;
    }
}

ToDoItem.propTypes = {
    title: ProperTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default ToDoItem;

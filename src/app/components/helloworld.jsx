import React, { Component, PropTypes } from 'react'

class HelloWorld extends Component {
    render() { 
        return <h1>Hello from {this.props.phrase}! <button type="button" onClick={this.props.onChange.bind(this)} >Change</button></h1>;
    }  
}

HelloWorld.propTypes = {
  onChange: PropTypes.func.isRequired
}
export default HelloWorld;

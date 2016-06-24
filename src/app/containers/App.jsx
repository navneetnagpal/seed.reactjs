import React, { Component } from 'react'
import HelloWorld  from '../components/helloworld.jsx'
function hello(){
    this.props.phrase="hello";
}
export default class App extends Component {
  render() {
    return (
      <div>
        <h2>React Sample</h2>
        <hr/>
        <HelloWorld onChange={hello}></HelloWorld>
      </div>
    )
  }
}

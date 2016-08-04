import React, { Component } from 'react'
import Footer from '../components/Footer.jsx'
import AddTodo from '../containers/AddTodo.jsx'
import VisibleTodoList from '../containers/VisibleTodoList.jsx'


export default class App extends Component {
  render() {
    return (
      <div>
        <h2>React Sample</h2>
        <hr/>

         <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

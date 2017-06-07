import React, { Component } from 'react'
import Footer from '../components/Footer.jsx'
import AddTodo from '../containers/AddTodo.jsx'
import VisibleTodoList from '../containers/VisibleTodoList.jsx'
import VisibleMonthlyGrid from '../containers/VisibleMonthlyGrid.jsx'


export default class App extends Component {
  render() {
    return (
      <div>
        <h2>React Sample</h2>
        <hr/>

         <VisibleMonthlyGrid />
         <AddTodo />
         <VisibleTodoList />
         <Footer/>
         
      </div>
    )
  }
}

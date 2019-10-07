import React from 'react'
import ReactDom from 'react-dom'
import AddTodo from './components/Addtodo.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos:[],
      todo: ""
    }
    this.todoOnChange = this.todoOnChange.bind(this);
    this.todoOnClick = this.todoOnClick.bind(this);
  }

  todoOnChange(event) {
    // stores value of todo text when changed
    console.log("set todo to "+event.target.value)
    this.setState({ todo: event.target.value});
  }
  todoOnClick() {
    // adds todo to lust
    this.setState({
      todos: this.state.todos.concat([this.state.todo])
    })
  }

  // componentDidMount(event) {

  // }

  render(){
    return (
    <div>
      <h1>Todo App</h1>
      <AddTodo todo={this.state.todo} change={this.todoOnChange} click={this.todoOnClick}/>
    </div>
    )}
}
export default App;
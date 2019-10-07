import React from 'react'
import AddTodo from './components/Addtodo.js'
import axios from 'axios'
import TodoList from './components/Todolist'

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
    // adds todo to list
    this.setState({
      todos: this.state.todos.concat([this.state.todo])
    });
    // add todo to database
    axios.post('/todos',{todo:this.state.todo})
    .then(response => {
      console.log("got response "+response)
    })
    .catch(error => {
      console.log('there was an error' + error);
    })
  }

   componentDidMount(event) {
    // get todos;
    axios.get('/todos')
    .then(response => {
      this.setState({todos:response.data});
    })
    .catch(error => {
      console.log('error loading data '+error);
    })
   }
   

  render(){
    return (
    <div>
      <h1>Todo App</h1>
      <AddTodo todo={this.state.todo} change={this.todoOnChange} click={this.todoOnClick}/>
      <TodoList todos={this.state.todos}/>
    </div>
    )}
}
export default App;
import React from 'react'
import Todo  from './Todo'

const TodoList = function(props) {
    return (
        <div>
            {props.todos.map(
                (todo) => <Todo key={todo.id}todo={todo.todo}/>
            )
            }
        </div>
    )

}

export default TodoList;
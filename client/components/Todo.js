import React from 'react'

const Todo = (props) => {
    return(
        <div key={props.id}>{props.todo}</div>
    )
}

export default Todo;
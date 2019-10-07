import React from 'react'

const AddtoDo = (props) => {
  return(
    <div>
      <input id='todoinput' type='text' placeholder="Enter a to do item"  onChange={props.change} value={props.todo}></input>
      <button onClick={props.click}>Add To Do</button>
    </div>
  )
}
export default AddtoDo;
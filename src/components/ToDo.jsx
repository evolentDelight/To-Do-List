import { useState } from "react";
import DeleteButton from "./DeleteButton.jsx"
import "./ToDo.css"

function ToDo(){
  const [task, setTask] = useState('')

  function handleChange (event){
    setTask(event.target.value);
  }

  return(
    <div className="todo-task-container">
      <div className="custom-bullet-point">➣</div>
      <textarea value={task} rows={2} onChange={handleChange}/>
      <DeleteButton />
    </div>
  )
}

export default ToDo;

//Change to flexbox, not unordered list
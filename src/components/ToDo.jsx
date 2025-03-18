import { useState } from "react";

function ToDo(){
  const [task, setTask] = useState('')

  function handleChange (event){
    setTask(event.target.value);
  }

  return(
    <li>
      <input type="text" value={task} onChange={handleChange}/>
    </li>
  )
}

export default ToDo;
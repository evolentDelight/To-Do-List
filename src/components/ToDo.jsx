import { useState } from "react";

function ToDo(){
  const [task, setTask] = useState('')

  function handleChange (event){
    setTask(event.target.value);
  }

  return(
    <li>
      <textarea value={task} rows={2} onChange={handleChange}/>
    </li>
  )
}

export default ToDo;
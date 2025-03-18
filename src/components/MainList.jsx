import { useState } from 'react';
import ToDo from "./ToDo.jsx"

function MainList(){
  const [toDoList, setToDoList] = useState([<ToDo/>]);
  return(
    <ul>
      {toDoList}
    </ul>
  )
}

export default MainList;

/* Features
Press Enter to create new Task
*/
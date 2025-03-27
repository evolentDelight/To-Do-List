import { useState } from 'react';
import "./MainList.css"
import ToDo from "./ToDo.jsx"

function MainList(){
  const [toDoList, setToDoList] = useState([<ToDo/>]);
  return(
    <ul>
      {toDoList}
      <ToDo/>
      <ToDo/>
    </ul>
  )
}

export default MainList;

/* Features
Press Enter to create new Task

Button in MainList:
  -Add New Task
  -Delete All Tasks
*/
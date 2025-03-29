import { useState } from 'react';
import "./MainList.css"
import ToDo from "./ToDo.jsx"

function MainList(){
  const [toDoList, setToDoList] = useState([<ToDo/>]);
  return(
    <div className='todo-list-container'>
      {toDoList}
      <ToDo/>
      <ToDo/>
    </div>
  )
}

export default MainList;

/* Features
Press Enter to create new Task

Button in MainList:
  -Add New Task
  -Delete All Tasks
*/
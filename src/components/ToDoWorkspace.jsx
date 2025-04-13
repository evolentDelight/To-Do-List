import { useState } from "react";
import "./ToDoWorkspace.css";
import ToDo from "./ToDo.jsx";
import ButtonFeatures from "./ButtonFeatures.jsx";

let nextId = 1;

function ToDoWorkspace() {
  const [toDoList, setToDoList] = useState([<ToDo key={0} />]);

  const addNewTask = () => {
    setToDoList((prevList) => [...prevList, <ToDo key={nextId} />]);
    nextId++; //update ID
  };

  const deleteAllTasks = () => {
    setToDoList(<ToDo key={nextId} />);
    nextId++; //update ID
  };

  return (
    <div className="todo-overall-container">
      <ButtonFeatures addNewTask={addNewTask} deleteAllTasks={deleteAllTasks} />
      <div className="todo-list-container">{toDoList}</div>
    </div>
  );
}

export default ToDoWorkspace;

/* Features
Press Enter to create new Task

Button in MainList:
  -Add New Task
  -Delete All Tasks
*/

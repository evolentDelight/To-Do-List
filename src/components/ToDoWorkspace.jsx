import { useState } from "react";
import "./ToDoWorkspace.css";
import ToDo from "./ToDo.jsx";
import ButtonFeatures from "./ButtonFeatures.jsx";

let nextId = 1;

const addNewToDo = () => {
  setToDoList((prevList) => {
    [...prevList, <ToDo id={nextId} />];
  });
  nextId++; //update ID
};
function ToDoWorkspace() {
  const [toDoList, setToDoList] = useState([<ToDo id={0} />]);
  return (
    <div className="todo-overall-container">
      <ButtonFeatures />
      <div className="todo-list-container">{toDoList}</div>
    </div>
  );
}

export default MainList;

/* Features
Press Enter to create new Task

Button in MainList:
  -Add New Task
  -Delete All Tasks
*/

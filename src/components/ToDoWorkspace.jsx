import { useState } from "react";
import "./ToDoWorkspace.css";
import ToDo from "./ToDo.jsx";
import ButtonFeatures from "./ButtonFeatures.jsx";

let nextId = 1;

function ToDoWorkspace() {
  const [tasks, setTasks] = useState([{ id: 0, toDoTask: "" }]);

  const addNewTask = () => {
    setTasks((prevList) => [...prevList, { id: nextId, toDoTask: "" }]);
    nextId++; //update ID
  };

  const updateTask = (id, taskData) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          toDoTask: taskData,
        };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([{ id: nextId, toDoTask: "" }]);
    nextId++; //update ID
  };

  const deleteSingleTask = (id) => {
    console.log(toDoList.filter());
  };

  return (
    <div className="todo-overall-container">
      <ButtonFeatures addNewTask={addNewTask} deleteAllTasks={deleteAllTasks} />
      <div className="todo-list-container">
        {tasks.map((task) => (
          <ToDo
            key={task.id}
            id={task.id}
            toDoTask={task.toDoTask}
            updateTask={updateTask}
          />
        ))}
      </div>
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

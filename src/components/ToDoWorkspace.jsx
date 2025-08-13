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
    setTasks((prevList) =>
      prevList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            toDoTask: taskData,
          };
        } else {
          return task;
        }
      })
    );
  };

  const deleteAllTasks = () => {
    setTasks([{ id: nextId, toDoTask: "" }]);
    nextId++; //update ID
  };

  const deleteSingleTask = (id) => {
    const newList = tasks.filter((task) => task.id != id);

    if (newList.length === 0) {
      setTasks([{ id: nextId, toDoTask: "" }]);
      nextId++; //update ID
    } else setTasks(newList);
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
            deleteSingleTask={deleteSingleTask}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoWorkspace;

/* Features
Button in MainList:
  -Add New Task
  -Delete All Tasks
*/

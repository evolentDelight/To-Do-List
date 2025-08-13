import SingleDeleteButton from "./SingleDeleteButton.jsx";
import "./ToDo.css";

function ToDo({ id, toDoTask, updateTask, deleteSingleTask }) {
  function handleChange(event) {
    updateTask(id, event.target.value);
  }

  const handleDelete = () => {
    deleteSingleTask(id);
  };

  return (
    <div className="todo-task-container" id={id}>
      <div className="custom-bullet-point">➣</div>
      <textarea value={toDoTask} rows={2} onChange={handleChange} />
      <SingleDeleteButton handleDelete={handleDelete} />
    </div>
  );
}

export default ToDo;

//Change to flexbox, not unordered list

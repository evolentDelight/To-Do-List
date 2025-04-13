import "./ButtonFeatures.css";

export default function ButtonFeatures({ addNewTask, deleteAllTasks }) {
  return (
    <div className="button-features-container">
      <button className="bfbutton" id="add-new-to-do" onClick={addNewTask}>
        New To Do
      </button>
      <button className="bfbutton" id="delete-all" onClick={deleteAllTasks}>
        Delete All
      </button>
    </div>
  );
}

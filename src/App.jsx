import "./App.css";
import ToDoWorkspace from "./components/ToDoWorkspace.jsx";

function App() {
  return (
    <div className="list-main">
      <h1 className="list-title">To Do</h1>
      <hr />
      <div className="list-actual-list">
        <ToDoWorkspace />
      </div>
    </div>
  );
}

export default App;

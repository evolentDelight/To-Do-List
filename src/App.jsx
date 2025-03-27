import './App.css'
import MainList from "./components/MainList.jsx"

function App() {
  return (
    <div className="list-main">
      <h1 className="list-title">To Do</h1>
      <hr />
      <div className="list-actual-list">
        <MainList />
      </div>
    </div>
  )
}

export default App

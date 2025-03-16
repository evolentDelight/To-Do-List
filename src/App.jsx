import { useState } from 'react'
import './App.css'

function App() {
  const [ToDoList, setTDList] = useState([])

  return (
    <div className="list-main">
      <h1 className="list-title">To Do List</h1>
      <hr />
      <div className="list-actual-list">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default App

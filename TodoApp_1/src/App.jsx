import { useState } from 'react'

import './App.css'
import TodoListItems from './components/TodoListItems'

function App() {
  const [todolist, setTodolist] = useState([])

  const saveTodoList = (e) => {
    const toname = e.target.toname.value; // get the value of the input field

    if (!todolist.includes(toname)) {
      const finalDolist = [...todolist, toname]// spread operator
      setTodolist(finalDolist);
    } else {
      alert("already exists")
    }
    e.preventDefault();
  }
  let list = todolist.map((value, index) => {

    return (
      <TodoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist} /> // pass the value and index to the TodoListItems component for rendering and deletion
    )
  })
  return (
    <>
      <div>
        <h1>Todo App</h1>
        <form onSubmit={saveTodoList}>
          <input type="text" name='toname' />
          <button>Save</button> {/* on submit call saveTodoList */}
        </form>
        < div className='outerDiv'>
          <ul>
            {list}
          </ul>
        </div>
      </div>

    </>
  )
}

export default App

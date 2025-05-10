import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import './App.css'
import TodoItems from "./components/TodoItems"

function App() {

  const todoItems = [{
    todoName: "Buy Milk",
    dueDate: "04/03/2024"
  },
  {
    todoName: "Go to collage",
    dueDate: "04/03/2024"
  },
  {
    todoName: "Learn React",
    dueDate: "04/01/2024"
  }
  ]

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />
      <div className="item-cont:ainer">

        <TodoItems todoItems={todoItems} ></TodoItems>
      </div>



    </center>
  )
}

export default App

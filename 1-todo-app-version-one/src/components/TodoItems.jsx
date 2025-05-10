import React from 'react'
import TodoItem from './TodoItem'
const TodoItems = ({ todoItems }) => {
    return (
        <div className='items-container'>
            {todoItems.map((item) => (<TodoItem todoDate={item.dueDate} todoName={item.todoName}></TodoItem>))}

        </div>
    )
}

export default TodoItems

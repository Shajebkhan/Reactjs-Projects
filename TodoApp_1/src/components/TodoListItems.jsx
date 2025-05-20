import React, { useState } from 'react'

const TodoListItems = ({ value, indexNumber, todolist, setTodolist }) => {

    const [status, setStatus] = useState(false);

    const checkStatus = () => {
        setStatus(!status)
    }

    const deleteRow = () => {
        const finalData = todolist.filter((v, i) => i != indexNumber);
        setTodolist(finalData);
    }
    return (
        <div>
            <li className={(status) ? 'completetodo' : ''} onClick={checkStatus}> {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span></li>
        </div>
    )
}

export default TodoListItems
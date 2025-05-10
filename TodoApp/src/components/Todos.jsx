import React, { useState } from 'react'

import './Todo.css'
const Todos = () => {
  const [initial, setInitial] = useState('');
  const [data, setData] = useState([])

  const getInput = (e) => {
    console.log(e.target.value);
    setInitial(e.target.value)
  }

  const getData = () => {
    console.log(initial);
    // for saving the previous input (value) with help of ... spread
    let store = [...data, initial];
    setData(store); // update the state
    setInitial(''); // clearing the input field
  }

  const deleteTask = (index) => {
    console.log(index);

    let filterData = data.filter((curElem, id) => {
      return id !== index;      // if id and index match than dont return the match item
    })
    setData(filterData);

  }
  console.log(data);

  return (
    <>
      <div className='container'>
        <div className="inputTask">
          <input type="text" placeholder='Enter Your Task' value={initial} onChange={getInput} />
          <button onClick={getData}>Add</button>
        </div>
        {data.map((currVal, index) => {
          return (
            <>
              <div className="taskData">
                <p>{currVal}</p>

                <i id='deleteIcon' onClick={() => deleteTask(index)}>Delete</i>
              </div>
            </>
          )
        })}
      </div>
    </>

  )
}

export default Todos

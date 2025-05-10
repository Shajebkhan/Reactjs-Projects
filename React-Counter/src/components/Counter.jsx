import { useState } from 'react'
import React from "react";
import './Counter.css'


const Counter = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div className="counter-container">
            <p id="para" >You have clicked {count} times</p>
            <button id="btn" onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Counter;

// onclick = {()=>{ setCount(count+1)}} Arrow function
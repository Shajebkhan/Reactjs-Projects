import React from 'react';
import { useState } from 'react'
import './App.css'

const Clock = () => {

  const currTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currTime);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime, 1000);


  return (
    <>
      <div>
        <h1>Digital Clock</h1>
        <h2>{time}</h2>
      </div>
    </>
  )
}

export default Clock;

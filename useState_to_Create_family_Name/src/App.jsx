import { useState } from 'react';
// import Fname from './Fname';
// import './Fname.css'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("")

  const onChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
  }
  const changeHandle = (event) => {
    setOutputText(prevText => `${prevText}${prevText ? "\n" : ""} ${inputText}`);
    setInputText("");
    // console.log(inputText);
    // console.log(outputText);
  };
  return (
    <>
      <div className='container'>
        <input type="text" value={inputText} placeholder='Enter your name' onChange={onChange} />
        <button onClick={changeHandle} id='btn' >Add</button>
        <label htmlFor="area"  > Your Family name are</label>
        <textarea value={outputText.toString()} id="textArea"></textarea>
      </div>
    </>
  )
}

export default App;

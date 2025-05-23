
import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // useRef hook
  const passwordRef = useRef(null);


  const passwordGeneretor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?>"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordGeneretor()
  }, [length, numberAllowed, charAllowed, passwordGeneretor])


  return (
    <>
      <div className=' text-2xl w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='my-3 text-center text-white'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-amber-50'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          /> <button onClick={copypasswordToClipboard}

            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer' >Copy</button>"
        </div>


        <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(e.target.value)}
            />
            <label htmlFor="">Length {length}</label>
          </div>


          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor="">Number</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
            <label htmlFor="">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

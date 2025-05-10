import { useEffect, useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [state, setState] = useState("light-mood");

  const changeTheme = () => {
    if (state === "light-mode") {
      setState("dark-mode")
    }
    else {
      setState("light-mode")
    }
  }
  useEffect(() => {
    document.querySelector("body").className = state;
  }, [state]);

  return (
    <>
      <nav>
        <div>
          <h2>Code</h2>
        </div>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Login</li>
          <div className='icon' onClick={changeTheme}>ChangeTheme</div>
        </ul>
      </nav>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores ipsam maxime deleniti ea, ducimus numquam explicabo, esse culpa, dignissimos atque. Officiis molestiae, nostrum alias, sed laborum incidunt in quidem cum illum tempora aspernatur distinctio fugit velit commodi eius amet ipsum esse, placeat repellat quam.</p>

    </>
  )
}

export default App

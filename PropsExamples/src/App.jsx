import { useState } from 'react'
import UserCard from './components/UserCard'
import ummul from './assets/ummul.jpg'
import mahenoor from './assets/mahenoor.jpg'
import shabenoor from './assets/shabenoor.jpg'
import './App.css'

function App() {


  return (
    <>
      <div className='container' >
        <UserCard name="Ummul Khair" desc="desciption of Ummul Khair" image={ummul} ></UserCard>

        <UserCard name="mahenoor" desc="desc2" image={mahenoor}></UserCard>

        <UserCard name="shabenoor" desc="desc3" image={shabenoor}></UserCard>
      </div>
    </>
  )
}

export default App

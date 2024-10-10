import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/Myfooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <MyFooter/>
     </>
  )
}

export default App

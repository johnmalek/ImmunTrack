import { useState } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'

function App() {

  const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

  const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSideBar={OpenSideBar}/>
      <Sidebar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}/>
      <Home />
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AdminTable from './pages/admintable'

function App() {


  return (
    <>
      <div className='grid-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/admin_table' element={<AdminTable />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    
    </>
  )
}

export default App

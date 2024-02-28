import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddChildPage from './pages/AddChildPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import VaccinePage from './pages/VaccinePage'
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
            <Route path='/add_child' element={<AddChildPage />} />
            <Route path='/vaccine' element={<VaccinePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

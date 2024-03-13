import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddChildPage from './pages/AddChildPage'
import ChildrenTablePage from './pages/ChildrenTablePage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterHealthWorkerPage from './pages/RegisterHealthWorkerPage'
import ReportsPage from './pages/ReportsPage'
import VaccinePage from './pages/VaccinePage'
import VaccineTablePage from './pages/VaccineTablePage'
import SignUpPage from './pages/SignUpPage'

function App() {


  return (
    <>
      <div className='grid-container'>
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<HomePage />} /> */}
            <Route path='/home' element={<HomePage />} />
            <Route path='/children_table' element={<ChildrenTablePage />} />
            <Route path='/vaccine_table' element={<VaccineTablePage />} />
            <Route path='/report' element={<ReportsPage />} />
            <Route path='/add_child' element={<AddChildPage />} />
            <Route path='/vaccine' element={<VaccinePage />} />
            <Route path='/healthworker' element={<RegisterHealthWorkerPage />} />
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

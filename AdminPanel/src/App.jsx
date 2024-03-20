// import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { Provider } from 'react-redux'
import store from './store'
import AuthProvider from './provider/authProvider'
import Routes from './pages/Index'

function App() {


  return (
    <>
      <div className='grid-container'>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </div>
    </>
  )
}

export default App

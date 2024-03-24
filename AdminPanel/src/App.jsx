// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
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

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddChildPage from './pages/AddChildPage'
import HomePage from './pages/HomePage'
function App() {

  return (
    <>
      <div className='grid-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path='/add_child' element={<AddChildPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App

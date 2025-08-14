
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import AdminPanel from './AdminPanel'



function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/adminpanel' element={<AdminPanel/>}/>
    </Routes>
   </>
  )
}

export default App

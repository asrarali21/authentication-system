
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/login'

import Adminlayout from './pages/Adminlayout'
import AdminDashboard from './components/AdminDashboard'
import Products from './components/Products'



function App() {

  return (
   <>
    <Routes>
      <Route path='/admin' element={<Adminlayout/>}>
         <Route index element={<AdminDashboard/>}/>
         <Route path='products' element={<Products/>}/>
       </Route>
      <Route path='/' element={<Login/>}/>
    </Routes>
   </>
  )
}

export default App

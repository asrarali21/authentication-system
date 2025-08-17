

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/register'
import Products from './pages/Products'
import Electronics from './pages/Electronics'


function App() {
   
     
 
  return (

   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
    </Routes>
   </>
  )
}

export default App



import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/register'
import Products from './pages/Products'
import Herosection from './components/Herosection'
import Productgrid from './components/Productgrid'
import CategoryshowCase from './components/CategoryshowCase'

function App() {
   
     
 
  return (

   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={
        <>
          <Home/>
          <Herosection/>
          <CategoryshowCase/>
          <Productgrid/>
        </>
      }
      />
      <Route path='/allproduct' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
   </>
  )
}

export default App

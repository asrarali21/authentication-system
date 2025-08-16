import React from 'react'

import {   useNavigate , } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authState } from '../store/atoms/authAtom'
import axios from 'axios'
import { handleError, handlesuccess } from '../toast.util'
import { Link } from 'react-router-dom'

import { Search, ShoppingBag, Menu, Star, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

function Navbar() {

    const [auth , setAuth]  = useRecoilState(authState)

    const navigate = useNavigate()
  function handleclick() {
     navigate("/login")
     console.log("button is clicked");
  }

  async function handlelogout() {
       try {
         const response = await axios.post("http://localhost:8000/api/v1/users/logoutUser")
         console.log(response);
         setTimeout(()=>{
            handlesuccess(response.data.message)
            setAuth({ isLoggedIn: false, user: response.data });
            navigate("/login")
         } , 1000)
      
       } catch (error) {
          handleError(error)
       }
   }
  return (
  <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-stone-900 tracking-tight">
            Élan Collective
          </Link>
        </div>
        
        {/* Center Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/new-arrivals" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
            New Arrivals
          </Link>
          <Link to="/women" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
            Women
          </Link>
          <Link to="/men" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
            Men
          </Link>
          <Link to="/accessories" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
            Accessories
          </Link>
          <Link to="/about" className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
            About
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5 text-stone-700 hover:text-stone-900 cursor-pointer transition-colors" />
          <div className="relative">
            <ShoppingBag className="h-5 w-5 text-stone-700 hover:text-stone-900 cursor-pointer transition-colors" />
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </div>
          
          {/* Auth Buttons */}
          {auth.isLoggedIn ? (
            <button
              onClick={handlelogout}
              className="px-4 py-2 text-stone-700 hover:text-stone-900 font-medium transition-colors"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleclick}
              className="px-4 py-2 text-stone-700 hover:text-stone-900 font-medium transition-colors"
            >
              Login
            </button>
          )}
          
          <Menu className="h-5 w-5 text-stone-700 hover:text-stone-900 cursor-pointer md:hidden transition-colors" />
        </div>
      </div>
    </div>
  </nav>
);
}

export default Navbar

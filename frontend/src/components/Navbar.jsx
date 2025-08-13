import React from 'react'
import { Button } from './ui/button'
import {  NavLink, useNavigate , } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authState } from '../store/atoms/authAtom'
import axios from 'axios'
import { handleError, handlesuccess } from '@/util'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

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
    <div className="sticky top-0 z-50">
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg shadow-gray-200/50 dark:bg-gray-900/95 dark:border-gray-700/50 dark:shadow-gray-900/50">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
          
          {/* Logo Section */}
          <Link to={"/"} className="flex items-center space-x-4 rtl:space-x-reverse group">
            <div className="relative">
              <img src={logo} alt="AURA Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="self-center text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-300">
              AURA
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-600 rounded-xl md:hidden hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-blue-400" 
            aria-controls="navbar-default" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-xl bg-gray-50/80 backdrop-blur-sm md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800/80 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <NavLink 
                  to={"/"} 
                  className="block py-3 px-6 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-300 md:bg-transparent md:hover:bg-gradient-to-r md:hover:from-blue-50 md:hover:to-purple-50 md:hover:text-blue-700 md:p-0 dark:text-gray-200 md:dark:hover:text-blue-400 dark:hover:bg-gray-700/50 md:dark:hover:bg-transparent font-semibold"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to={"/allproduct"} 
                  className="block py-3 px-6 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700 transition-all duration-300 md:bg-transparent md:hover:bg-gradient-to-r md:hover:from-purple-50 md:hover:to-blue-50 md:hover:text-purple-700 md:p-0 dark:text-gray-200 md:dark:hover:text-purple-400 dark:hover:bg-gray-700/50 md:dark:hover:bg-transparent font-semibold"
                >
                  All Products
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Auth Button */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={auth.isLoggedIn ? handlelogout : handleclick}
              className="relative overflow-hidden px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
            >
              <span className="relative z-10">{auth.isLoggedIn ? "Logout" : "Login"}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

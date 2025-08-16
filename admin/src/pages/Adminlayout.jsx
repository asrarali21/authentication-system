import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  BarChart3, 
  Search, 
  Bell, 
  ChevronDown, 

} from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from "axios"
function Adminlayout() {
   const navigate = useNavigate()
   async function handlelogout() {
        const res  =   await  axios.post("http://localhost:8000/api/v1/users/adminlogout")
        console.log(res);
        navigate("/")
    }
  return (
     <div className="min-h-screen bg-gray-50 flex">
             {/* left sidebar - stays mounted */}
                 <div className="w-64 bg-white shadow-lg border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">AURA Admin</h1>
          </div>
        </div>
        
        <nav className="px-4 pb-6">
          <div className="space-y-2">
            <Link to="." className="flex items-center space-x-3 px-3 py-2">
              <LayoutDashboard className="w-5 h-5" />
              <span className="">Dashboard</span>
            </Link>
            <Link to="products" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
              <Package className="w-5 h-5" />
              <span>Products</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Orders</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
              <Users className="w-5 h-5" />
              <span>Customers</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
              <BarChart3 className="w-5 h-5" />
              <span>Analytics</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
            <button className='bg-indigo-400 ' onClick={handlelogout}>logout</button>
          </div>
        </nav>
      </div>
 <div className="flex-1 flex flex-col">
      

      <div className="flex-1 flex flex-col">
        <Outlet />       {/* main content changes here */}
      </div>
      
    </div>
    </div>
  )
}

export default Adminlayout

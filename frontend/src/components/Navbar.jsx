import React from 'react'
import { ShoppingCart, Search, User, Heart } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authState } from '../store/atoms/authAtom'
import axios from 'axios'
import { handleError, handlesuccess } from '../toast.util'

function Navbar() {
    const [auth, setAuth] = useRecoilState(authState)
    const navigate = useNavigate()

    function handleclick() {
        navigate("/login")
    }

    async function handlelogout() {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/users/logoutUser",
                {},
                { withCredentials: true }
            )
            handlesuccess(response.data.message)
            setAuth({ isLoggedIn: false, user: null })
            navigate("/login")
        } catch (error) {
            handleError(error.response?.data?.message || "Logout failed")
        }
    }

    return (
        <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 pl-4">
                        <Link to="/" className="text-2xl font-serif font-bold text-stone-900">
                            nexa
                        </Link>
                    </div>

                    {/* Navigation Links - Centered */}
                    <div className="hidden md:block flex-1">
                        <div className="flex items-center justify-center space-x-8">
                           <Link to="/" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <Link to="/electronics" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
                                Electronics
                            </Link>
                            <Link to="/fashion" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
                                Fashion
                            </Link>
                            <Link to="/sports" className="text-stone-700 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors">
                                Sports
                            </Link>
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-4 pr-4">
                        <Search className="h-5 w-5 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors" />
                        {auth.isLoggedIn ? (
                            <button
                                onClick={handlelogout}
                                className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium"
                            >
                                Logout
                            </button>
                        ) : (
                            <User
                                onClick={handleclick}
                                className="h-5 w-5 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors"
                            />
                        )}
                        <Heart className="h-5 w-5 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors" />
                        <div className="relative">
                            <ShoppingCart className="h-5 w-5 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors" />
                            <span className="absolute -top-2 -right-2 bg-stone-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                2
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

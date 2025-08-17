import React from 'react'
import { Card, CardContent } from "./ui/card"
import elecpic from "../assets/electronic.avif"
import fashionpic from "../assets/fashion.webp"
import sportspic from "../assets/sports.jpg"
import { useNavigate } from 'react-router-dom'
function CategoryshowCase() {
    const navigate = useNavigate()
  return (
 <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-light text-stone-900 mb-4">Shop by Category</h2>
            <p className="text-stone-600 text-lg">Explore our carefully curated collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card onClick ={()=>navigate("/electronics")} className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  <img
                    src={elecpic}
                    alt="Electronics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-serif font-medium">Electronics</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card onClick ={()=>navigate("/fashion")}className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
                  <img
                    src={fashionpic}
                    alt="Fashion"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-serif font-medium">Fashion</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card onClick ={()=>navigate("/sports")} className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
                  <img
                    src={sportspic}
                    alt="Sports"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-serif font-medium">Sports</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
  )
}

export default CategoryshowCase

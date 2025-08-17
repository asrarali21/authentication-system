import React from 'react'
import { Card, CardContent } from "./ui/card"

function CategoryshowCase() {
  return (
 <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-light text-stone-900 mb-4">Shop by Category</h2>
            <p className="text-stone-600 text-lg">Explore our carefully curated collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                  <img
                    src="/modern-electronics.png"
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

            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
                  <img
                    src="/placeholder-ixs0j.png"
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

            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
                  <img
                    src="/assorted-sports-gear.png"
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

            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-emerald-50 to-emerald-100 relative overflow-hidden">
                  <img
                    src="/placeholder-fyejt.png"
                    alt="Outdoors"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-serif font-medium">Outdoors</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
                  <img
                    src="/modern-home-decor.png"
                    alt="Home"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-serif font-medium">Home</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-rose-50 to-rose-100 relative overflow-hidden">
                  <img
                    src="/luxury-beauty-products.png"
                    alt="Beauty"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-serif font-medium">Beauty</h3>
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

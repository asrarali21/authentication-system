import React from 'react'
import { Card, CardContent } from "./ui/card"
import { Heart } from "lucide-react"
import { Button } from './ui/button'
function Productgrid() {
  return (
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-light text-stone-900 mb-4">Featured Products</h2>
            <p className="text-stone-600 text-lg">Handpicked selections from our premium collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <img
                    src="/premium-wireless-headphones.png"
                    alt="Premium Headphones"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-5 w-5 text-stone-600 hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-stone-900 mb-2">Premium Wireless Headphones</h3>
                  <p className="text-stone-600 text-sm mb-4">High-fidelity audio experience</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-stone-900">$299</span>
                    <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <img
                    src="/luxury-silk-scarf.png"
                    alt="Silk Scarf"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-5 w-5 text-stone-600 hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-stone-900 mb-2">Luxury Silk Scarf</h3>
                  <p className="text-stone-600 text-sm mb-4">Handcrafted Italian silk</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-stone-900">$189</span>
                    <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <img
                    src="/placeholder-cjcgw.png"
                    alt="Tennis Racket"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-5 w-5 text-stone-600 hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-stone-900 mb-2">Professional Tennis Racket</h3>
                  <p className="text-stone-600 text-sm mb-4">Tournament-grade performance</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-stone-900">$249</span>
                    <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <img
                    src="/minimalist-ceramic-vase.png"
                    alt="Ceramic Vase"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="h-5 w-5 text-stone-600 hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-stone-900 mb-2">Minimalist Ceramic Vase</h3>
                  <p className="text-stone-600 text-sm mb-4">Handcrafted artisan piece</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-stone-900">$129</span>
                    <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Productgrid

import React from 'react'
import { Button } from './ui/button'
function FeaturedSection() {
  return (
          <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-light text-stone-900 mb-6">This Week's Highlights</h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Discover our carefully selected premium products that define excellence. Each piece represents the
                perfect blend of innovation, craftsmanship, and timeless design.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-stone-700">Curated by design experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-stone-700">Premium quality guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-stone-700">Limited edition collections</span>
                </div>
              </div>
              <Button className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-3">View Collection</Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder-sox0s.png"
                alt="Featured Products"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default FeaturedSection

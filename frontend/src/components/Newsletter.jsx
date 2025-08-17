import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'


function Newsletter() {
  return (
      <section className="py-20 bg-stone-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-light text-white mb-4">Stay in the Know</h2>
          <p className="text-stone-300 text-lg mb-8">
            Be the first to discover new arrivals, exclusive collections, and insider access to premium products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white border-0 text-stone-900 placeholder:text-stone-500"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-medium px-8">Subscribe</Button>
          </div>
        </div>
      </section>
  )
}

export default Newsletter

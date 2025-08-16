import React from 'react'
import { Button } from "@/components/ui/button";
import { Smartphone, Shirt, Dumbbell } from "lucide-react";

function CategoryshowCase() {
  return (
       <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium products across our carefully curated categories
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Electronics */}
          <div className="group relative overflow-hidden luxury-border bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg transition-luxury hover:scale-105">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Electronics</h3>
              <p className="text-muted-foreground mb-6">
                Latest smartphones, headphones, smartwatches and cutting-edge tech
              </p>
              <Button variant="outline" className="w-full">
                Shop Electronics
              </Button>
            </div>
          </div>

          {/* Fashion */}
          <div className="group relative overflow-hidden luxury-border bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-8 rounded-lg transition-luxury hover:scale-105">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-rose-100 dark:bg-rose-900/50 rounded-full">
                  <Shirt className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Fashion</h3>
              <p className="text-muted-foreground mb-6">
                Designer clothing, luxury accessories, bags and timeless pieces
              </p>
              <Button variant="outline" className="w-full">
                Shop Fashion
              </Button>
            </div>
          </div>

          {/* Sports */}
          <div className="group relative overflow-hidden luxury-border bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-lg transition-luxury hover:scale-105">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-green-100 dark:bg-green-900/50 rounded-full">
                  <Dumbbell className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Sports</h3>
              <p className="text-muted-foreground mb-6">
                Premium athletic wear, equipment and fitness essentials
              </p>
              <Button variant="outline" className="w-full">
                Shop Sports
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryshowCase

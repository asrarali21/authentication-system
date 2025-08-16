import React from 'react'
import { Button } from "@/components/ui/button"

function Herosection() {
  return (
 <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${""})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
          Premium
          <span className="block text-accent">Everything</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          From cutting-edge electronics to luxury fashion and premium sports gear
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-white/80">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">Electronics</span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">Fashion</span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">Sports</span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">Lifestyle</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="luxury" size="luxury">
            Explore Collection
          </Button>
          <Button variant="luxuryOutline" size="luxury" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
            Watch Story
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm uppercase tracking-widest font-light">Scroll</span>
          <div className="w-px h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  )
}

export default Herosection

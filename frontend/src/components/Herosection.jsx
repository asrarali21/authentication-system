import React from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'

function Herosection() {
  const navigate = useNavigate()
  return (
     <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-light text-stone-900 mb-6 leading-tight">
              Curated Excellence
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover premium products across every category. From cutting-edge electronics to timeless fashion, we
              bring you the finest selection.
            </p>
            <Button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 text-lg font-medium cursor-pointer" onClick={()=>navigate("/collection")} >
              Explore Collection
            </Button>
          </div>
        </div>
      </section>
  )
}

export default Herosection

import React from 'react'
import CategoryshowCase from '@/components/CategoryshowCase'
import FeaturedSection from '@/components/FeaturedSection'
import Herosection from '@/components/Herosection'
import Productgrid from '@/components/Productgrid'
import Testimonialsection from '@/components/Testimonialsection'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

function Home() {
  return (
    <div>
      <Herosection/>
      <CategoryshowCase/>
      <FeaturedSection/>
      <Productgrid/>
      <Testimonialsection/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

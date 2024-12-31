import React from 'react'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import BestSellers from '../components/BestSellers'
import PromotionalBanner from '../components/PromotionalBanner'

const Home = () => {
  return (
    <div>
        <Hero/>
        <PromotionalBanner/>
        <NewArrivals/>
        <BestSellers/>
    </div>
  )
}

export default Home
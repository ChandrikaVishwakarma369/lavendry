import React from 'react'
import Hero from '../components/Hero'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import ProductGrid from '../components/ProductGrid'

const Home = () => {
  return (
    <div>
      <Hero/>
      {/* <ProductCardSkeleton/> */}
      <ProductGrid/>
    </div>
  )
}

export default Home
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'

import OrderPlacement from './pages/Checkout'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Policy from './pages/Policy'
import Checkout from './pages/Checkout'
import ThankYou from './pages/ThankYou'


const App = () => {
  return (
    <div className='w-[100%]'>
      
        <Header/>
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/policy" element={<Policy/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/thank-you" element={<ThankYou/>} />
          
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
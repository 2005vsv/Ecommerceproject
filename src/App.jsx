
import './App.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Home/cart'
import Wishlist from './Pages/Home/wishlist'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
  )
}

export default App

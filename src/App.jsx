import React from 'react'
import Product from './components/products/Product'
import Cart from './components/carts/Cart'
export default function App() {
  return (
    <div>
      <h1>App Cart</h1>
      <div className='page_content'>
        <div className='page_content_left'>
            <Product/>
        </div>
        <div className='page_content_right'>
            <Cart/>
        </div>
      </div>
    </div>
  )
}

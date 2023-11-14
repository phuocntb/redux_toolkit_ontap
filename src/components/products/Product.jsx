import React from 'react'
import './product.scss'
import { useSelector, useDispatch } from 'react-redux'
import { cartAction } from '../../store/reducers/cart.reducer'
export default function Product() {
  const dispatch = useDispatch()
  const productStore = useSelector(store => {
    return store.productStore
  })

  const handleBuy = (productId, quantity) => {
    // dispatch({
    //   type: "ADD_TO_CART",
    //   payload: {
        // id: Date.now() * Math.random(),
        // productId,
        // quantity
    //   }
    // })
    dispatch(cartAction.addToCart({
      id: Date.now() * Math.random(),
      productId,
      quantity
    }))
  }
  return (
    <div className='product_page'>
      <h2>Product</h2>
      <div className='product_list'>
        {
          productStore.data?.map(product => (
            <div key={Date.now() * Math.random()} className='product_card'>
              <div className='card_left'>
                  <img src={product.avatar} />
              </div>
              <div className='card_mid'>
                <h3>{product.name}</h3>
                <p>{product.des}</p>
              </div>
              <div className='card_right'>
                  <div>
                    <input type="number" min={1} defaultValue={1}/>
                  </div>
                  <div>
                    Price: {product.price}
                  </div>
                  <div>
                    <button onClick={(e) => {
                      handleBuy(product.id, Number(e.target.parentNode.parentNode.querySelector("input").value))
                    }}>Buy</button>
                  </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

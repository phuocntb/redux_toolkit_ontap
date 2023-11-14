import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { cartAction } from '../../store/reducers/cart.reducer';
export default function Cart() {
  const dispatch = useDispatch();
  const cartStore = useSelector(store => store.cartStore)
  const productStore = useSelector(store => store.productStore)

  const handleGetProduct = (productId) => {
    return productStore.data?.find(product => product.id == productId)
  }

  const handleUpdateCart = (productId, quantity) => {
    dispatch(cartAction.updateCart({
      productId,
      quantity
    }))
  }
  return (
    <div>
      <h2>Cart Page</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {
            cartStore.data?.map((item, index) => (
              <tr key={Date.now() * Math.random()}>
                <td>{index + 1}</td>
                <td>{handleGetProduct(item.productId).name}</td>
                <td>{handleGetProduct(item.productId).price}</td>
                <td>
                  <input onChange={(e) => {
                    handleUpdateCart(item.productId, Number(e.target.value))
                  }} type="number" min={1} defaultValue={item.quantity}/>
                </td>
                <td>{handleGetProduct(item.productId).price * item.quantity}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

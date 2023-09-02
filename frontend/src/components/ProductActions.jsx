'use client'

import { useState } from 'react'
import cartService from '@/services/cart'

export default function ProductActions({name, userId, slug, ...product }) {
  const [qty, setQty] = useState(1)

  console.log(product)

  const handleAddToCart = () => {
    const payload = {
      productId: slug,
      productName: name,
      userId: userId,
      image: product.imagen,
      price: product.price,
      quantity: qty,
    }
console.log(payload)
    cartService
      .addToCart(payload)
      .then(res => alert('agregado al carrito'))
      .catch(() => alert('ha ocurrido un error'))
  }

  const handleQtyPress = e => {
    console.log(e.target.name)
    let { name } = e.target

    if (name == 'qty') {
      if (e.target.value.includes('-')) return
    }

    if (name == 'add') {
      setQty(prev => prev + 1)
    } else if (name == 'subtract') {
      setQty(prev => prev - 1)
    } else {
      setQty(+e.target.value)
    }
  }

  return (
    <ul className="product-actions clearfix">
      <li>
        <a  className="btn btn-color btn-lg add-to-cart left">
          <span onClick={handleAddToCart}>add to cart</span>
        </a>
      </li>
      <li>
        <div className="icon-add-to-wishlist left">
          <a href="#">
            <i className="icon icon_heart_alt" />
          </a>
        </div>
      </li>
      <li>
        <div className="quantity buttons_added">
          <input
            onClick={handleQtyPress}
            type="button"
            name="subtract"
            defaultValue="-"
            className="minus"
            disabled={qty == 1}
          />
          <input
            type="number"
            step={1}
            min={1}
            value={qty}
            title="Qty"
            name="qty"
            className="input-text qty text"
            onChange={handleQtyPress}
          />
          <input
            onClick={handleQtyPress}
            type="button"
            name="add"
            defaultValue="+"
            className="plus"
          />
        </div>
      </li>
    </ul>
  )
}

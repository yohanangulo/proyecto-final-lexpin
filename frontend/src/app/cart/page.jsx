'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useScripts } from '@/hooks/useScripts'
import React, { useState } from 'react';

export default function Cart() {
  useScripts()
  const [cartItems, setCartItems] = useState([
    {
      name: 'Product 1',
      image: 'url_to_image_1',
      price: 10.99,
      quantity: 2,
      // ... otras propiedades
    },
    {
      name: 'Product 1',
      image: 'url_to_image_1',
      price: 10.99,
      quantity: 2,
      // ... otras propiedades
    },
    {
      name: 'Product 1',
      image: 'url_to_image_1',
      price: 10.99,
      quantity: 2,
      // ... otras propiedades
    },
  ]);

  const isLoggedIn = true; // Cambia esto a true o false según el estado de inicio de sesión
  const status = isLoggedIn ? 'authenticated' : 'unauthenticated';

  function handleQuantityChange(index, newQuantity) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = parseInt(newQuantity);
    setCartItems(updatedCartItems);
  }

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleRemoveItem(index) {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Eliminar el producto en la posición index
    setCartItems(updatedCartItems);
  }

  return (
    <>
     {status  === 'authenticated' && (
        <>
      <Header  cartItems={cartItems}  />
      <main className="content-wrapper oh">
        <section className="section-wrap shopping-cart pt-0">
          <div className="container relative">
            <div className="row">
              <div className="col-md-12">
                <div className="table-wrap mb-30">
                  <table className="shop_table cart table">
                    <thead>
                      <tr>
                        <th className="product-name" colSpan={2}>
                          Product
                        </th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item, index) => (
                      <tr className="cart_item" key={index}>
                        <td className="product-thumbnail">
                          <a href="#">
                            <img src={item.image} alt={item.name} />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="#">{item.name}</a>
                          <ul>
                            <li>Size: {item.size}</li>
                            <li>Color: {item.color}</li>
                          </ul>
                        </td>
                        <td className="product-price">
                          <span className="amount">${item.price}</span>
                        </td>
                        <td className="product-quantity">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(index, e.target.value)}
                          min="1"
                          step="1"
                          className="quantity"
                        />
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">${item.price * item.quantity}</span>
                        </td>
                        <td className="product-remove">
                          <a href="#" className="remove" title="Remove this item" onClick={() => handleRemoveItem(index)}>
                            <i className="icon icon_close" />
                          </a>
                        </td>
                      </tr>
                    ))}

                    </tbody>
                  </table>
                </div>
                <div className="row mb-50">
                  <div className="col-md-5 col-sm-12">
                    <div className="coupon">
                      <input
                        type="text"
                        name="coupon_code"
                        id="coupon_code"
                        className="input-text form-control"
                        defaultValue=""
                        placeholder="Coupon code"
                      />
                      <input
                        type="submit"
                        name="apply_coupon"
                        className="btn btn-md btn-dark"
                        defaultValue="Apply"
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="actions right">
                      <input
                        type="submit"
                        name="update_cart"
                        defaultValue="Update Cart"
                        className="btn btn-md btn-dark"
                      />
                      <div className="wc-proceed-to-checkout">
                        <a
                          href="checkout.html"
                          className="btn btn-md btn-color"
                        >
                          <span>proceed to checkout</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{' '}
              {/* end col */}
            </div>{' '}
            {/* end row */}
            <div className="row">
              <div className="col-md-6 shipping-calculator-form">
               
                <p className="form-row form-row-wide">
                
                </p>
                <div className="row row-20">
                  <div className="col-sm-6">
                
                
                  </div>
                </div>
                <p>
              
                </p>
              </div>{' '}
              {/* end col shipping calculator */}
              <div className="col-md-4 col-md-offset-2">
                <div className="cart_totals">
                  <h2 className="heading relative heading-small uppercase mb-30">
                    Cart Totals
                  </h2>
                  <table className="table shop_table">
                    <tbody>

                      <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                          <span>Free Shipping</span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>
                          <strong>Order Total</strong>
                        </th>
                        <td>
                          <strong>
                            <span className="amount">${cartTotal.toFixed(2)}</span>
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>{' '}
              {/* end col cart totals */}
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end container */}
        </section>
      </main>
        </>
      )}

      <Footer />
    </>
  )
}

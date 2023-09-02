'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useScripts } from '@/hooks/useScripts'
import React, { useEffect, useState } from 'react'
import cartService from '@/services/cart'
import { useSession } from 'next-auth/react'
import { formatter } from '@/lib/utils'
import SignInForm from '@/components/SignInForm'
import axios from 'axios'
import { Loader2 } from 'lucide-react/dist/esm/lucide-react'

export default function Cart() {
  useScripts()
  const { data: session, status } = useSession()

  console.log(status)

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    if (status == 'authenticated') {
      cartService
        .getUserCart(session.user._id)
        .then(res => setCartItems(res.data))
    }
  }, [status])

  const isLoggedIn = true 

  function handleQuantityChange(index, newQuantity) {
    const updatedCartItems = [...cartItems]
    updatedCartItems[index].quantity = parseInt(newQuantity)
    setCartItems(updatedCartItems)
  }

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  function handleRemoveItem(index, productId) {
    console.log(productId)
    const updatedCartItems = [...cartItems]
    updatedCartItems.splice(index, 1) 

    cartService
      .deleteItem({ userId: session.user._id, payload: { productId } })
      .then(res => console.log('success'))
      .catch(err => console.error(err))

    setCartItems(updatedCartItems)
  }


  const handleEmptyCart = () => {
    const userToDelete = {
      userId: session.user._id
    };
  
    const deleteUrl = `http://localhost:3003/cart/${userToDelete.userId}`;
  
    axios
      .delete(deleteUrl)
      .then(() => {
        console.log('Cart emptied successfully');
        alert("Order placed")
        setCartItems([]); 
      })
      .catch((error) => {
        console.error('Error al vaciar el carrito', error);
      });
  }

  
  return (
    <>
      <>
        <Header cartItems={cartItems} />
        <main className="content-wrapper oh">
          <section className="page-title text-center">
            <div className="container relative clearfix">
              <div className="title-holder">
                <div className="title-text">
                  <h1 className="uppercase">Shopping cart</h1>
                </div>
              </div>
            </div>
            {/* end page title */}
          </section>
          {status == 'authenticated' && (
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
                                <span className="amount">
                                  {formatter.format(item.price)}
                                </span>
                              </td>
                              <td className="product-quantity">
                                <span className="amount">
                                  {item.quantity > 1 ? 'PCS ' : 'PC '}
                                  {item.quantity}
                                </span>
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">
                                  {formatter.format(item.price * item.quantity)}
                                </span>
                              </td>
                              <td className="product-remove">
                                <a
                                  style={{ cursor: 'pointer' }}
                                  className="remove"
                                  title="Remove this item"
                                  onClick={() =>
                                    handleRemoveItem(index, item.productId)
                                  }
                                >
                                  <i className="icon icon_close" />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {cartItems.length === 0 && <h2 className='text-muted text-center mt-40 mb-120'>Uh oh... nothing here!</h2>}  
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
                          href=""
                          className="btn btn-md btn-color"
                          onClick={(e) => {
                            e.preventDefault(); 
                            handleEmptyCart(); 
                          }}
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
                    <p className="form-row form-row-wide"></p>
                    <div className="row row-20">
                      <div className="col-sm-6"></div>
                    </div>
                    <p></p>
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
                                <span className="amount">
                                  {formatter.format(cartTotal)}
                                </span>
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
          )}
          {status == 'loading' && <Loader2 color={'#1c1c1c'} size={50} strokeWidth={2} className='spinner-loader mt-20 mb-120' />}
          {status == 'unauthenticated' && (
            <section className="section-wrap login-register pt-0 pb-40">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3 mb-40">
                    <div className="login">
                      <h4 className="uppercase">login to enter this area</h4>
                      <SignInForm />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </>
      <Footer />
    </>
  )
}

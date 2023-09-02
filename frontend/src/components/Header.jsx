'use client'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter(); 
  const {data:session, status} = useSession()
  // const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleCategoryClick = (category) => {
    router.push(`/categories/${category}`); 
  };
  
  const handleAddToCart = (product) =>{
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      
      const updatedItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const isAdmin = session?.user?.email === 'admin@coolstore.com' 
  
  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };

  // console.log('dsede header' ,session)

  
  const handleLogout = () => {
    signOut({ callbackUrl: '/sign-in' })
  }

  return (
    <header className="nav-type-1">
      <div className="top-bar hidden-sm hidden-xs">
        <div className="container">
          <div className="top-bar-line">
            <div className="row">
              <div className="top-bar-links">
                <ul className="col-sm-6 top-bar-acc">
                  

                  {status  === 'authenticated' && (
                    <>
                      <li className="top-bar-link">
                    <Link href="/my-account">My account</Link>
                  </li>
                    </>
                  )}
                  {status  === 'authenticated' && (
                    <>
                      <li className="top-bar-link">
                        <a>welcome {session.user.name} </a>
                      </li>
                      { isAdmin &&(
                        <li className='top-bar-link'>
                            <a href='/' >Super secret information</a>
                        </li>
                      )}
                      <li className="top-bar-link">
                        <Link href="#" onClick= {handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </>
                  )}

                  {status  === 'unauthenticated' && (
                    <>
                      <li className="top-bar-link">
                        <Link href="/sign-up">sign up</Link>
                      </li>
                      <li className="top-bar-link">
                        <Link href="/sign-in">sign in</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* end top bar */}
      <nav className="navbar navbar-static-top">
        <div className="navigation" id="sticky-nav">
          <div className="container relative">
            <div className="row">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                {/* Mobile cart */}
                <div className="nav-cart mobile-cart hidden-lg hidden-md">
                  <div className="nav-cart-outer">
                    <div className="nav-cart-inner">
                      <a href="#" className="nav-cart-icon">
                        2
                      </a>
                    </div>
                  </div>
                </div>
              </div>{' '}
              {/* end navbar-header */}
              <div className="header-wrap">
                <div className="header-wrap-holder">
                  {/* Search */}
                  <div className="nav-search hidden-sm hidden-xs invisible">
                    <form method="get">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit" className="search-button">
                        <i className="icon icon_search" />
                      </button>
                    </form>
                  </div>
                  {/* Logo */}
                  <div className="logo-container">
                    <div className="logo-wrap text-center">
                      <Link href="/">
                        <img className="logo" src="/logo.png" alt="logo" />
                      </Link>
                    </div>
                  </div>
                  {/* Cart */}
                  <div className="nav-cart-wrap hidden-sm hidden-xs">
                  {status  === 'authenticated' && !isAdmin &&(
                    <>
            <div className="nav-cart right">
              <div className="nav-cart-outer">
                <div className="nav-cart-inner">
                  <a href="/cart" className="nav-cart-icon">
                    {/* {cartItems.length} */}
                  </a>
                </div>
              </div>
              <div className="nav-cart-container">
                <div className="nav-cart-items">
                  {/* Renderiza los elementos del carrito aquí */}

                </div>
                <div className="nav-cart-actions mt-20">
                  <a href="/cart" className="btn btn-md btn-dark">
                    <span>View Cart</span>
                  </a>
                  <a href="shop-checkout.html" className="btn btn-md btn-color mt-10">
                    <span>Proceed to Checkout</span>
                  </a>
                </div>
              </div>
            </div>
          <div className="menu-cart-amount right">
            <span>Carrito</span>
          </div>
            </>
          )}
                    
                  </div>{' '}
                  {/* end cart */}
                </div>
              </div>{' '}
              {/* end header wrap */}
              <div className="nav-wrap">
                <div className="collapse navbar-collapse" id="navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li id="mobile-search" className="hidden-lg hidden-md">
                      <form method="get" className="mobile-search relative">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <button type="submit" className="search-button">
                          <i className="icon icon_search" />
                        </button>
                      </form>
                    </li>
                    <li>
                      <Link href="/">Inicio</Link>
                    </li>
                    <li className="dropdown">
                      <a href="#">More</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li >
                          <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="contact">Contact</Link>
                        </li>
                        {/* <li>
                          <Link href="login.html">Login</Link>
                        </li> */}
                        <li>
                          <Link href="/faq">F.A.Q</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Categories</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul
                        className="dropdown-menu megamenu"
                        // style={{ width: 1140, left: "-463.6px" }}
                      >
                        <li>
                          <div className="megamenu-wrap">
                            <div className="row">
                              <div className="col-md-3 megamenu-item">
                                <h6>For Man</h6>
                                <ul className="menu-list">
                                  <li>
                                    <a href="#" onClick={() => handleCategoryClick('for-man-shirts')}>Shirts</a>
                                  </li>
                                  <li>
                                    <a href="#">Jeans</a>
                                  </li>
                                  <li>
                                    <a href="#">Accessories</a>
                                  </li>
                                  <li>
                                    <a href="#">Shoes</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 megamenu-item">
                                <h6>For Woman</h6>
                                <ul className="menu-list">
                                  <li>
                                    <a href="#">Dresses</a>
                                  </li>
                                  <li>
                                    <a href="#">Coats</a>
                                  </li>
                                  <li>
                                    <a href="#">Accessories</a>
                                  </li>
                                  <li>
                                    <a href="#">Sandals</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 megamenu-item">
                                <h6>Accessories</h6>
                                <ul className="menu-list">
                                  <li>
                                    <a href="#">Wallets</a>
                                  </li>
                                  <li>
                                    <a href="#">Watches</a>
                                  </li>
                                  <li>
                                    <a href="#">Belts</a>
                                  </li>
                                  <li>
                                    <a href="#">Scarfs</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 megamenu-item">
                                <h6>Bags</h6>
                                <ul className="menu-list">
                                  <li>
                                    <a href="#">Leather</a>
                                  </li>
                                  <li>
                                    <a href="#">Sports</a>
                                  </li>
                                  <li>
                                    <a href="#">Street Style</a>
                                  </li>
                                  <li>
                                    <a href="#">Creative</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    {/* end categories */}
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li >
                      <Link href="/products">Shop</Link>
                    </li>
                    {/* <li className="dropdown">
                      <a href="#">Elements</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li>
                          <a href="shortcodes.html">Shortcodes</a>
                        </li>
                        <li>
                          <a href="typography.html">Typography</a>
                        </li>
                      </ul>
                    </li> */}
                    <li className="mobile-links">
                      <ul>
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                        <li>
                          <a href="#">My Wishlist</a>
                        </li>
                      </ul>
                    </li>
                  </ul>{' '}
                  {/* end menu */}
                </div>{' '}
                {/* end collapse */}
              </div>{' '}
              {/* end col */}
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end container */}
        </div>{' '}
        {/* end navigation */}
      </nav>{' '}
      {/* end navbar */}
    </header>
  )
}

export default Header

import Link from "next/link";

const Header = ({isLoggedIn }) => {
  return (
    <header className="nav-type-1">
      <div className="top-bar hidden-sm hidden-xs">
        <div className="container">
          <div className="top-bar-line">
            <div className="row">
              <div className="top-bar-links">
                <ul className="col-sm-6 top-bar-acc">
                  <li className="top-bar-link">
                    <Link href="/my-account">My account</Link>
                  </li>
                  {/* <li className="top-bar-link">
                    <a href="#">My Wishlist</a>
                  </li> */}
                  {/* <li className="top-bar-link">
                    <a href="#">Newsletter</a>
                  </li> */}
                  <li className="top-bar-link">
                    <Link href="sign-up">Sign Up</Link>
                  </li>
                  <li className="top-bar-link">
                    <Link href="sign-in">Login</Link>
                  </li>
                  {isLoggedIn && (
                    <li className="top-bar-link">
                      <h1>{"Bienvenido" + greeting}</h1>
                    </li>
                  )}
                  {/* <li className="top-bar-link">
                    <a href="contact.html">Contact</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
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
              </div>{" "}
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
                        <img
                          className="logo"
                          src="/logo.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Cart */}
                  <div className="nav-cart-wrap hidden-sm hidden-xs">
                    <div className="nav-cart right">
                      <div className="nav-cart-outer">
                        <div className="nav-cart-inner">
                          <a href="#" className="nav-cart-icon">
                            2
                          </a>
                        </div>
                      </div>
                      <div className="nav-cart-container">
                        <div className="nav-cart-items">
                          <div className="nav-cart-item clearfix">
                            <div className="nav-cart-img">
                              <a href="#">
                                <img
                                  src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/cart_small_1.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="nav-cart-title">
                              <a href="#">Ladies Bag</a>
                              <div className="nav-cart-price">
                                <span>1 x</span>
                                <span>1250.00</span>
                              </div>
                            </div>
                            <div className="nav-cart-remove">
                              <a href="#">
                                <i className="icon icon_close" />
                              </a>
                            </div>
                          </div>
                          <div className="nav-cart-item clearfix">
                            <div className="nav-cart-img">
                              <a href="#">
                                <img
                                  src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/cart_small_2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="nav-cart-title">
                              <a href="#">Sequin Suit longer title</a>
                              <div className="nav-cart-price">
                                <span>1 x</span>
                                <span>1250.00</span>
                              </div>
                            </div>
                            <div className="nav-cart-remove">
                              <a href="#">
                                <i className="icon icon_close" />
                              </a>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end cart items */}
                        <div className="nav-cart-summary">
                          <span>Cart Subtotal</span>
                          <span className="total-price">$1799.00</span>
                        </div>
                        <div className="nav-cart-actions mt-20">
                          <a
                            href="shop-cart.html"
                            className="btn btn-md btn-dark"
                          >
                            <span>View Cart</span>
                          </a>
                          <a
                            href="shop-checkout.html"
                            className="btn btn-md btn-color mt-10"
                          >
                            <span>Proceed to Checkout</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-cart-amount right">
                      <span>
                        Carrito /<a href="#"> $1299.50</a>
                      </span>
                    </div>
                  </div>{" "}
                  {/* end cart */}
                </div>
              </div>{" "}
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
                      <a href="#">Pages</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li className="dropdown">
                          <a href="about-us.html">About Us</a>
                          <i className="fa fa-angle-down dropdown-trigger" />
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Example of submenu</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <Link href="login.html">Login</Link>
                        </li>
                        <li>
                          <a href="faq.html">F.A.Q</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Categorías</a>
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
                                    <a href="#">Shirts</a>
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
                    <li className="dropdown">
                      <a href="#">Blog</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li>
                          <a href="blog-standard.html">Standard</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Single Post</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Shop</a>
                      <i className="fa fa-angle-down dropdown-trigger" />
                      <ul className="dropdown-menu">
                        <li>
                          <a href="shop-catalog.html">Catalog</a>
                        </li>
                        <li>
                          <a href="shop-collections.html">Collections</a>
                        </li>
                        <li>
                          <a href="shop-single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
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
                    </li>
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
                  </ul>{" "}
                  {/* end menu */}
                </div>{" "}
                {/* end collapse */}
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end container */}
        </div>{" "}
        {/* end navigation */}
      </nav>{" "}
      {/* end navbar */}
    </header>
  );
};
export default Header;

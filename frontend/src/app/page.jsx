"use client";

import ScriptTags from "@/components/ScriptTags";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {/* Hero Slider */}
      <main className="content-wrapper oh">
        <section className="section-wrap nopadding">
          <div className="container">
            <div className="entry-slider">
              <div className="flexslider" id="flexslider-hero">
                <ul className="slides clearfix">
                  <li>
                    <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/slider/slider-1.jpg" />
                    <div className="img-holder " />
                    <div className="hero-holder text-center right-align">
                      <div className="hero-lines">
                        <h1 className="hero-heading text-black">Colección 2023</h1>
                        <h4 className="hero-subheading text-black uppercase">
                          TENDENCIA MAS RECIENTE DE ESTE AñO
                        </h4>
                      </div>
                      <a href="#" className="btn btn-lg btn-white">
                        <span>Shop Now</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/slider/2.jpg"
                      alt=""
                    />
                    <div className="img-holder" />
                    <div className="hero-holder text-center">
                      <div className="hero-lines">
                        <h1 className="hero-heading white large">
                          Winter Sales
                        </h1>
                      </div>
                      <a href="#" className="btn btn-lg btn-white">
                        <span>Shop Now</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/slider/3.jpg"
                      alt=""
                    />
                    <div className="img-holder" />
                    <div className="hero-holder left-align">
                      <div className="hero-lines">
                        <h1 className="hero-heading white">Autumn 2017</h1>
                        <p className="white">
                          A-ha Theme is the Best E-Commerce solution
                        </p>
                        <p className="white">
                          Packed with tons of features and unique styles
                        </p>
                      </div>
                      <a href="#" className="btn btn-lg btn-white">
                        <span>Shop Now</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/slider/4.jpg"
                      alt=""
                    />
                    <div className="img-holder" />
                    <div className="hero-holder text-center right-align">
                      <div className="hero-lines">
                        <h1 className="hero-heading white">Summer 2017</h1>
                        <p className="white">
                          A-ha Theme is the Best E-Commerce solution
                        </p>
                        <p className="white">
                          Packed with tons of features and unique styles
                        </p>
                      </div>
                      <a href="#" className="btn btn-lg btn-white">
                        <span>Shop Now</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* end slider */}
          </div>
        </section>{" "}
        {/* end hero slider */}
        {/* New Arrivals */}
        <section className="section-wrap new-arrivals pb-40">
          <div className="container">
            <div className="row heading-row">
              <div className="col-md-12 text-center">
                <h2 className="heading uppercase">
                  <small>lo mas nuevo</small>
                </h2>
              </div>
            </div>
            <div className="row row-10">
              <div className="col-md-3 col-xs-6">
                <div className="product-item">
                  <div className="product-img">
                    <a href="#">
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_1.jpg"
                        alt=""
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_1_back.jpg"
                        alt=""
                        className="back-img"
                      />
                    </a>
                    <div className="product-label">
                      <span className="sale">sale</span>
                    </div>
                    <div className="product-actions">
                      <a
                        href="#"
                        className="product-add-to-compare"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to compare"
                      >
                        <i className="fa fa-exchange" />
                      </a>
                      <a
                        href="#"
                        className="product-add-to-wishlist"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to wishlist"
                      >
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <a href="#" className="product-quickview">
                      Quick View
                    </a>
                  </div>
                  <div className="product-details">
                    <h3>
                      <a
                        className="product-title"
                        href="shop-single-product.html"
                      >
                        Night Party Dress
                      </a>
                    </h3>
                    <span className="price">
                      <del>
                        <span>$388.00</span>
                      </del>
                      <ins>
                        <span className="ammount">$159.99</span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="product-item">
                  <div className="product-img">
                    <a href="#">
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_2.jpg"
                        alt=""
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_2_back.jpg"
                        alt=""
                        className="back-img"
                      />
                    </a>
                    <div className="product-actions">
                      <a
                        href="#"
                        className="product-add-to-compare"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to compare"
                      >
                        <i className="fa fa-exchange" />
                      </a>
                      <a
                        href="#"
                        className="product-add-to-wishlist"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to wishlist"
                      >
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <a href="#" className="product-quickview">
                      Quick View
                    </a>
                  </div>
                  <div className="product-details">
                    <h3>
                      <a
                        className="product-title"
                        href="shop-single-product.html"
                      >
                        Elegant White Dress
                      </a>
                    </h3>
                    <span className="price">
                      <ins>
                        <span className="ammount">$219.00</span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="product-item">
                  <div className="product-img">
                    <a href="#">
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_3.jpg"
                        alt=""
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_3_back.jpg"
                        alt=""
                        className="back-img"
                      />
                    </a>
                    <span className="sold-out valign">out of stock</span>
                    <div className="product-actions">
                      <a
                        href="#"
                        className="product-add-to-compare"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to compare"
                      >
                        <i className="fa fa-exchange" />
                      </a>
                      <a
                        href="#"
                        className="product-add-to-wishlist"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to wishlist"
                      >
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <a href="#" className="product-quickview">
                      Quick View
                    </a>
                  </div>
                  <div className="product-details">
                    <h3>
                      <a
                        className="product-title"
                        href="shop-single-product.html"
                      >
                        Long Black Dress
                      </a>
                    </h3>
                    <span className="price">
                      <ins>
                        <span className="ammount">$99.00</span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="product-item">
                  <div className="product-img">
                    <a href="#">
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_4.jpg"
                        alt=""
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_4_back.jpg"
                        alt=""
                        className="back-img"
                      />
                    </a>
                    <div className="product-actions">
                      <a
                        href="#"
                        className="product-add-to-compare"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to compare"
                      >
                        <i className="fa fa-exchange" />
                      </a>
                      <a
                        href="#"
                        className="product-add-to-wishlist"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to wishlist"
                      >
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <a href="#" className="product-quickview">
                      Quick View
                    </a>
                  </div>
                  <div className="product-details">
                    <h3>
                      <a
                        className="product-title"
                        href="shop-single-product.html"
                      >
                        Sexy Pink Dress
                      </a>
                    </h3>
                    <span className="price">
                      <ins>
                        <span className="ammount">$120.00</span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end row */}
          </div>
        </section>{" "}
        {/* end new arrivals */}
        {/* Newsletter */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="newsletter-box">
                <h5 className="uppercase">suscribete para estar al tanto!</h5>
                <form>
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="tu email"
                  />
                  <button
                    type="button"
                    className="newsletter-submit btn btn-md btn-dark"
                    defaultValue="subscribe"
                  >
                    enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Best Sellers */}
        <section className="section-wrap pb-0">
          <div className="container">
            <div className="row heading-row">
              <div className="col-md-12 text-center">
                <h2 className="heading uppercase">
                  <small>Lo más vendido</small>
                </h2>
              </div>
            </div>
            <div className="row row-10">
              <div className="col-md-3 col-xs-6 animated-from-left">
                <div className="product-item">
                  <div className="product-img">
                    <a href="#">
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_5.jpg"
                        alt=""
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_5_back.jpg"
                        alt=""
                        className="back-img"
                      />
                    </a>
                    <div className="product-actions">
                      <a
                        href="#"
                        className="product-add-to-compare"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to compare"
                      >
                        <i className="fa fa-exchange" />
                      </a>
                      <a
                        href="#"
                        className="product-add-to-wishlist"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to wishlist"
                      >
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <a href="#" className="product-quickview">
                      Quick View
                    </a>
                  </div>
                  <div className="product-details">
                    <h3>
                      <a
                        className="product-title"
                        href="shop-single-product.html"
                      >
                        Minty Dress
                      </a>
                    </h3>
                    <span className="price">
                      <ins>
                        <span className="ammount">$399.00</span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 animated-from-left">
                <div className="product-item">
                  <div className="product-img">
                    <a href="#">
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_6.jpg"
                        alt=""
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_6_back.jpg"
                        alt=""
                        className="back-img"
                      />
                    </a>
                    <div className="product-label">
                      <span className="sale">sale</span>
                    </div>
                    <div className="product-actions">
                      <a
                        href="#"
                        className="product-add-to-compare"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to compare"
                      >
                        <i className="fa fa-exchange" />
                      </a>
                      <a
                        href="#"
                        className="product-add-to-wishlist"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to wishlist"
                      >
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <a href="#" className="product-quickview">
                      Quick View
                    </a>
                  </div>
                  <div className="product-details">
                    <h3>
                      <a
                        className="product-title"
                        href="shop-single-product.html"
                      >
                        Sexy White Dress
                      </a>
                    </h3>
                    <span className="price">
                      <ins>
                        <span className="ammount">$119.00</span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 animated-from-left">
                <div className="product-item">
                  <div className="product-img">
                    <a href="#">
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_7.jpg"
                        alt=""
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_7_back.jpg"
                        alt=""
                        className="back-img"
                      />
                    </a>
                    <div className="product-actions">
                      <a
                        href="#"
                        className="product-add-to-compare"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to compare"
                      >
                        <i className="fa fa-exchange" />
                      </a>
                      <a
                        href="#"
                        className="product-add-to-wishlist"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to wishlist"
                      >
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <a href="#" className="product-quickview">
                      Quick View
                    </a>
                  </div>
                  <div className="product-details">
                    <h3>
                      <a
                        className="product-title"
                        href="shop-single-product.html"
                      >
                        Elegant Pink Dress
                      </a>
                    </h3>
                    <span className="price">
                      <ins>
                        <span className="ammount">$1379.00</span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 animated-from-left">
                <div className="product-item">
                  <div className="product-img">
                    <a href="#">
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_8.jpg"
                        alt=""
                      />
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/shop/shop_item_8_back.jpg"
                        alt=""
                        className="back-img"
                      />
                    </a>
                    <div className="product-label">
                      <span className="sale">sale</span>
                    </div>
                    <div className="product-actions">
                      <a
                        href="#"
                        className="product-add-to-compare"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to compare"
                      >
                        <i className="fa fa-exchange" />
                      </a>
                      <a
                        href="#"
                        className="product-add-to-wishlist"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Add to wishlist"
                      >
                        <i className="fa fa-heart" />
                      </a>
                    </div>
                    <a href="#" className="product-quickview">
                      Quick View
                    </a>
                  </div>
                  <div className="product-details">
                    <h3>
                      <a
                        className="product-title"
                        href="shop-single-product.html"
                      >
                        Gray California Dress
                      </a>
                    </h3>
                    <span className="price">
                      <del>
                        <span>$350.00</span>
                      </del>
                      <ins>
                        <span className="ammount">$150.00</span>
                      </ins>
                    </span>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end row */}
          </div>
        </section>{" "}
        {/* end best sellers */}
        {/* Partners */}
        <section className="section-wrap partners pt-0 pb-50">
          <div className="container">
            <div className="row">
              <div id="owl-partners" className="owl-carousel owl-theme">
                <div className="item">
                  <a href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_2.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_3.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_4.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_5.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_6.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_2.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* end carousel */}
            </div>
          </div>
        </section>
        {/* end partners */}
      </main>
      <Footer />
      <ScriptTags /> 
    </>
  );
}

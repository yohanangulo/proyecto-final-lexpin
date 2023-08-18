"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import ProductItem from "@/components/ProductItem";
import { useScripts } from "@/hooks/useScripts";

export default function Home() {
  useScripts()

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  }, []);

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
                    <img src="/slider/1.jpg" />
                    <div className="img-holder img-1" />
                    <div className="hero-holder text-center right-align">
                      <div className="hero-lines">
                        <h1 className="hero-heading color-primary">
                          2023 Collection
                        </h1>
                        <h4 className="hero-subheading uppercase color-primary">
                          GET IN THE TREND
                        </h4>
                      </div>
                      <a href="#" className="btn btn-lg btn-white">
                        <span>Shop Now</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <img
                      src="/slider/2.jpg"
                      alt=""
                    />
                    <div className="img-holder img-2" />
                    <div className="hero-holder text-center">
                      <div className="hero-lines">
                        <h1 className="hero-heading color-primary large">
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
                      src="/slider/3.jpg"
                      alt=""
                    />
                    <div className="img-holder img-3" />
                    <div className="hero-holder left-align">
                      <div className="hero-lines white">
                        <h1 className="hero-heading white">Autumn 2023</h1>
                        <p className="white">
                          Make Everyday a Runaway
                        </p>
                        <p className="white">
                          Clothes You Will Love
                        </p>
                      </div>
                      <a href="#" className="btn btn-lg btn-white">
                        <span>Shop Now</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <img
                      src="/slider/4.jpg"
                      alt="slider img 4"
                    />
                    <div className="img-holder img-4" />
                    <div className="hero-holder text-center right-align">
                      <div className="hero-lines white">
                        <h1 className="hero-heading white">Summer 2023</h1>
                        <p className="white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </p>
                        <p className="white">
                          aliquid voluptatum labore corrupti.
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
                  <small>new arrivals</small>
                </h2>
              </div>
            </div>
            <div className="row row-10">
              <div className="col-md-3 col-xs-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-xs-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-xs-6">
                <ProductItem />
              </div>
              <div className="col-md-3 col-xs-6">
                <ProductItem />
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
                <h5 className="uppercase">SUBSCRIBE TO RECEIVE OUR UPDATES</h5>
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
                  <small>best sellers</small>
                </h2>
              </div>
            </div>
            <div className="row row-10">
              <div className="col-md-3 col-xs-6 animated-from-left">
                <ProductItem />
              </div>
              <div className="col-md-3 col-xs-6 animated-from-left">
                <ProductItem />
              </div>
              <div className="col-md-3 col-xs-6 animated-from-left">
                <ProductItem />
              </div>
              <div className="col-md-3 col-xs-6 animated-from-left">
                <ProductItem />
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
    </>
  );
}

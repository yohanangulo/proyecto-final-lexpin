"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import ProductItem from "@/components/ProductItem";
import { useScripts } from "@/hooks/useScripts";
import SlideOne from "@/components/HomeSlider/SlideOne";
import SlideTwo from "@/components/HomeSlider/SlideTwo";
import SlideThree from "@/components/HomeSlider/SlideThree";
import SlideFour from "@/components/HomeSlider/SlideFour";
import PartnerItems from "@/components/PartnerItems";
import { useSession } from "next-auth/react";

export default function Home() {
  useScripts();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const session = useSession();

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
                  <SlideOne />
                  <SlideTwo />
                  <SlideThree />
                  <SlideFour />
                </ul>
              </div>
            </div>
            {/* end slider */}
          </div>
        </section>
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
                <PartnerItems imgSource="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_1.png" />
                <PartnerItems imgSource="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_2.png" />
                <PartnerItems imgSource="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_3.png" />
                <PartnerItems imgSource="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_4.png" />
                <PartnerItems imgSource="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_5.png" />
                <PartnerItems imgSource="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_6.png" />
                <PartnerItems imgSource="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_1.png" />
                <PartnerItems imgSource="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/img/partners/partner_logo_dark_2.png" />
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

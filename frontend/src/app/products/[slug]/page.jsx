"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import useScripts from "@/hooks/useScripts";
import { useState } from "react";

const Product = ({ params }) => {
  useScripts()
  const { slug } = params;

  const [qty, setQty] = useState(1);

  const handleQtyPress = (e) => {
    console.log(e.target.name);
    let { name } = e.target;

    if (name == "qty") {
      if (e.target.value.includes("-")) return;
    }

    if (name == "add") {
      setQty((prev) => prev + 1);
    } else if (name == "subtract") {
      setQty((prev) => prev - 1);
    } else {
      setQty(+e.target.value);
    }
  };

  console.log(slug);

  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap single-product">
          <div className="container relative">
            <div className="row">
              <div className="col-sm-6 col-xs-12 mb-60">
                <div
                  className="flickity flickity-slider-wrap mfp-hover"
                  id="gallery-main"
                >
                  <div className="gallery-cell">
                    <a
                      href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_1.jpg"
                      className="lightbox-img"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_1.jpg"
                        alt=""
                      />
                      <i className="icon arrow_expand" />
                    </a>
                  </div>
                  <div className="gallery-cell">
                    <a
                      href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_2.jpg"
                      className="lightbox-img"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_2.jpg"
                        alt=""
                      />
                      <i className="icon arrow_expand" />
                    </a>
                  </div>
                  <div className="gallery-cell">
                    <a
                      href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_3.jpg"
                      className="lightbox-img"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_3.jpg"
                        alt=""
                      />
                      <i className="icon arrow_expand" />
                    </a>
                  </div>
                  <div className="gallery-cell">
                    <a
                      href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_4.jpg"
                      className="lightbox-img"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_4.jpg"
                        alt=""
                      />
                      <i className="icon arrow_expand" />
                    </a>
                  </div>
                  <div className="gallery-cell">
                    <a
                      href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_5.jpg"
                      className="lightbox-img"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_5.jpg"
                        alt=""
                      />
                      <i className="icon arrow_expand" />
                    </a>
                  </div>
                </div>{" "}
                {/* end gallery main */}
                <div className="gallery-thumbs">
                  <div className="gallery-cell">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="gallery-cell">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="gallery-cell">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="gallery-cell">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="gallery-cell">
                    <img
                      src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/single_img_5.jpg"
                      alt=""
                    />
                  </div>
                </div>{" "}
                {/* end gallery thumbs */}
              </div>{" "}
              {/* end col img slider */}
              <div className="col-sm-6 col-xs-12 product-description-wrap">
                <h1 className="product-title">Summer Dress</h1>
                <span className="rating">
                  <a href="#">3 Reviews</a>
                </span>
                <span className="price">
                  <ins>
                    <span className="ammount">$1250.00</span>
                  </ins>
                </span>
                <p className="product-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam accusantium tenetur vitae molestiae cumque rerum.
                  Accusantium impedit consequatur mollitia aperiam labore!
                  Officia at facere eveniet rerum molestiae voluptate blanditiis
                  quia.
                </p>

                <ul className="product-actions clearfix">
                  <li>
                    <a
                      href="#"
                      className="btn btn-color btn-lg add-to-cart left"
                    >
                      <span>Al carrito</span>
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
                <div className="product_meta">
                  <span className="posted_in">
                    Categoría: <a href="#">Accesorios</a>
                  </span>
                  <span className="posted_in">
                    Publicado por: <a href="#">Username</a>
                  </span>
                </div>
                <div className="socials-share clearfix">
                  <div className="social-icons rounded">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* end col product description */}
            </div>{" "}
            {/* end row */}
            {/* tabs */}
            <div className="row">
              <div className="col-md-12">
                <div className="tabs tabs-bb">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#tab-description" data-toggle="tab">
                        Description
                      </a>
                    </li>
                  </ul>{" "}
                  {/* end tabs */}
                  {/* tab content */}
                  <div className="tab-content">
                    <div
                      className="tab-pane fade in active"
                      id="tab-description"
                    >
                      <p>
                        We possess within us two minds. So far I have written
                        only of the conscious mind. I would now like to
                        introduce you to your second mind, the hidden and
                        mysterious subconscious. Our subconscious mind contains
                        such power and complexity that it literally staggers the
                        imagination.And finally the subconscious is the
                        mechanism through which thought impulses which are
                        repeated regularly with feeling and emotion are
                        quickened, charged. Our subconscious mind contains such
                        power and complexity that it literally staggers the
                        imagination.And finally the subconscious is the
                        mechanism through which thought impulses.
                      </p>
                    </div>
                  </div>{" "}
                  {/* end tab content */}
                </div>
              </div>{" "}
              {/* end tabs */}
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end container */}
        </section>{" "}
        {/* end single product */}
        {/* Related Items */}
        <section className="section-wrap related-products pt-0">
          <div className="container">
            <div className="row heading-row">
              <div className="col-md-12 text-center">
                <h2 className="heading uppercase">
                  <small>Related Products</small>
                </h2>
              </div>
            </div>
            <div className="row row-10">
              <div
                id="owl-related-products"
                className="owl-carousel owl-theme nopadding"
              >
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end container */}
        </section>{" "}
        {/* end related products */}
      </main>
      <Footer />
    </>
  );
};
export default Product;

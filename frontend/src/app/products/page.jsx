'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import ProductsGrid from "@/components/productsSection/ProductsGrid";
import Sidebar from "@/components/productsSection/Sidebar";
import { useScripts } from "@/hooks/useScripts";

export default function Products() {
  useScripts()

  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap pt-70 pb-40 catalogue">
          <div className="container relative">
            <div className="row">
              <div className="col-md-9 catalogue-col right mb-50">
                {/* Banner */}
                <div className="banner-wrap relative">
                  <img src="/banner.jpg" alt="" />
                  <div className="hero-holder text-center right-align">
                    <div className="hero-lines mb-0">
                      <h1 className="hero-heading white">Catalogue</h1>
                      <h4 className="hero-subheading white uppercase">
                        FRESH TRENDS OF THIS YEAR
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="shop-filter">
                  <p className="result-count">Showing: 1-12 of 80 results</p>
                  <form className="ecommerce-ordering">
                    <select>
                      <option value="default-sorting">Default Sorting</option>
                      <option value="price-low-to-high">
                        Price: high to low
                      </option>
                      <option value="price-high-to-low">
                        Price: low to high
                      </option>
                      <option value="by-popularity">By Popularity</option>
                      <option value="date">By Newness</option>
                      <option value="rating">By Rating</option>
                    </select>
                  </form>
                </div>
                <div className="shop-catalogue grid-view left">
                  <div className="row row-10 items-grid">
                    <ProductsGrid />
                  </div>
                  {/* end row */}
                </div>
                {/* end grid mode */}
                <div className="clear" />
                <Pagination />
              </div>
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

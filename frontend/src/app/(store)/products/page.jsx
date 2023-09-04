'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Pagination from '@/components/Pagination'
import { Scripts } from '@/components/Scripts'
import ProductsGrid from '@/components/productsSection/ProductsGrid'
import Sidebar from '@/components/productsSection/Sidebar'
import { navigateProductsPage } from '@/lib/productPagination'
import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react/dist/esm/lucide-react'

export default function Products() {
  const perPage = 6

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    handlePageChange('firstPageLoad')

    return () => {
      window.firstVisible = undefined
      window.lastVisible = undefined
    }
  }, [])

  const handlePageChange = action => {
    setIsLoading(true)
    setError(undefined)
    navigateProductsPage({ perPage, action })
      .then(res => setProducts(res))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <Scripts />
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap pt-70 pb-40 catalogue">
          <div className="container relative">
            <div className="row">
              <div className="col-md-9 catalogue-col right mb-50">
                <div className="banner-wrap relative">
                  <img src="/banner.jpg" alt="Banner image" />
                  <div className="hero-holder text-center right-align">
                    <div className="hero-lines mb-0">
                      <h1 className="hero-heading white">Catalogue</h1>
                      <h4 className="hero-subheading white uppercase">
                        FRESH TRENDS OF THIS YEAR
                      </h4>
                    </div>
                  </div>
                </div>
                <div id='top-products' className="shop-filter" >
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
                    {error && <h1>Something went wrong</h1>}
                    {isLoading ? (
                      <Loader2 color={'#1c1c1c'} size={50} strokeWidth={2} className='spinner-loader mt-20 mb-300' />
                    ) : (
                      <ProductsGrid products={products} />
                    )}
                  </div>
                </div>
                <div className="clear" />
                <Pagination onPageChange={handlePageChange} />
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

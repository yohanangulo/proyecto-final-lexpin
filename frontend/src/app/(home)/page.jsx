'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useScripts } from '@/hooks/useScripts'
import PartnerItems from '@/components/PartnerItems'
import BestSellers from '@/components/BestSellers'
import NewArrivals from '@/components/NewArrivals'
import SubscribeLetter from '@/components/SubscribeLetter'
import Slider from '@/components/HomeSlider/Slider'

export default function Home() {
  useScripts()

  const partners = [
    'adidas',
    'air-jordan',
    'gymshark',
    'nike',
    'puma',
    'zara',
    'adidas',
    'gymshark',
  ]

  return (
    <>
      <Header />
      {/* Hero Slider */}
      <main className="content-wrapper oh">
        <section className="section-wrap nopadding">
          <div className="container">
            <Slider />
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
              <NewArrivals />
            </div>{' '}
            {/* end row */}
          </div>
        </section>{' '}
        {/* end new arrivals */}
        {/* Newsletter */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <SubscribeLetter />
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
              <BestSellers />
            </div>
            {/* end row */}
          </div>
        </section>{' '}
        {/* end best sellers */}
        {/* Partners */}
        <section className="section-wrap partners pt-0 pb-50">
          <div className="container">
            <div className="row">
              <div id="owl-partners" className="owl-carousel owl-theme">
                {partners.map((partner, i) => (
                  <PartnerItems
                    key={`${partner + i}`}
                    imgSource={`/partners/${partner}.png`}
                  />
                ))}
              </div>
              {/* end carousel */}
            </div>
          </div>
        </section>
        {/* end partners */}
      </main>
      <Footer />
    </>
  )
}

'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScripts } from "@/hooks/useScripts";

export default function AboutUs() {
  useScripts()
  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap about-us pb-60">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <img src="img/about_us.jpg" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <h4 className="about-intro uppercase">about our shop</h4>
                <p>
                  A-ha Shop is a very slick and clean e-commerce template with
                  endless possibilities. Creating an awesome clothes store with
                  this Theme is easy than you can imagine. And finally the
                  subconscious is the mechanism through which thought impulses
                  which are repeated regularly with feeling. And emotion are
                  quickened. A-ha Shop is a very slick and clean e-commerce
                  template with endless possibilities. A-ha Shop is a very slick
                  and clean e-commerce template with endless possibilities.
                </p>
              </div>
              <div className="col-sm-3 col-sm-offset-1">
                <div className="statistic">
                  <span>1999</span>
                  <h4 className="uppercase">year of foundation</h4>
                </div>
                <div className="statistic">
                  <span>120</span>
                  <h4 className="uppercase">partners work with us</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

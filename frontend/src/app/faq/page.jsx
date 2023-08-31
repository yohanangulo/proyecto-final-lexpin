'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { useScripts } from "@/hooks/useScripts"

export default function FAQ() {
  useScripts()
  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap faq">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="uppercase mb-20">delivery questions</h2>
                <div className="toggle">
                  <div className="acc-panel">
                    <a href="#">how to track my delivery?</a>
                  </div>
                  <div className="panel-content">
                    <p>
                      Amadea Theme is a very slick and clean e-commerce template
                      with endless possibilities. Creating an awesome website.
                      Amadea Theme is a very slick and clean e-commerce template
                      with endless possibilities.
                    </p>
                  </div>
                  <div className="acc-panel">
                    <a href="#">where can I find tracking number?</a>
                  </div>
                  <div className="panel-content">
                    <p>
                      We possess within us two minds. So far I have written only
                      of the conscious mind. I would now like to introduce you
                      to your second mind, the hidden and mysterious
                      subconscious. Our subconscious mind contains such power.
                    </p>
                  </div>
                  <div className="acc-panel">
                    <a href="#">what delivery methods can I use? </a>
                  </div>
                  <div className="panel-content">
                    <p>
                      We possess within us two minds. So far I have written only
                      of the conscious mind. I would now like to introduce you
                      to your second mind, the hidden and mysterious
                      subconscious. Our subconscious mind contains such power.
                    </p>
                  </div>
                </div>{' '}
                {/* end toggle */}
                <h2 className="uppercase mb-20 mt-80">payment questions</h2>
                <div className="toggle mb-80">
                  <div className="acc-panel">
                    <a href="#">what payment methods do you accept?</a>
                  </div>
                  <div className="panel-content">
                    <p>
                      Amadea Theme is a very slick and clean e-commerce template
                      with endless possibilities. Creating an awesome website.
                      Amadea Theme is a very slick and clean e-commerce template
                      with endless possibilities.
                    </p>
                  </div>
                  <div className="acc-panel">
                    <a href="#">how to pay via credit card?</a>
                  </div>
                  <div className="panel-content">
                    <p>
                      We possess within us two minds. So far I have written only
                      of the conscious mind. I would now like to introduce you
                      to your second mind, the hidden and mysterious
                      subconscious. Our subconscious mind contains such power.
                    </p>
                  </div>
                  <div className="acc-panel">
                    <a href="#">what credit cards do you accept?</a>
                  </div>
                  <div className="panel-content">
                    <p>
                      We possess within us two minds. So far I have written only
                      of the conscious mind. I would now like to introduce you
                      to your second mind, the hidden and mysterious
                      subconscious. Our subconscious mind contains such power.
                    </p>
                  </div>
                  <div className="acc-panel">
                    <a href="#">how to pay via paypal?</a>
                  </div>
                  <div className="panel-content">
                    <p>
                      We possess within us two minds. So far I have written only
                      of the conscious mind. I would now like to introduce you
                      to your second mind, the hidden and mysterious
                      subconscious. Our subconscious mind contains such power.
                    </p>
                  </div>
                </div>{' '}
                {/* end toggle */}
              </div>{' '}
              {/* end col */}
              <div className="col-sm-3 col-sm-offset-1">
                <h2 className="uppercase mb-30">support</h2>
                <div className="service-item-box mb-30">
                  <div className="icon-holder">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="service-text">
                    <h3>phone</h3>
                    <p>+1 (800) 2056 778</p>
                  </div>
                </div>
                <div className="service-item-box mb-30">
                  <div className="icon-holder">
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div className="service-text">
                    <h3>email</h3>
                    <p>ahasupport@gmail.com</p>
                  </div>
                </div>
                <div className="service-item-box mb-40">
                  <div className="icon-holder">
                    <i className="fa fa-skype" />
                  </div>
                  <div className="service-text">
                    <h3>skype</h3>
                    <p>AhaSupport</p>
                  </div>
                </div>
              </div>{' '}
              {/* end col */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

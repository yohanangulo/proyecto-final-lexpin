'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useScripts } from '@/hooks/useScripts'

export default function ContactUs() {
  useScripts()

  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="page-title text-center">
          <div className="container relative clearfix">
            <div className="title-holder">
              <div className="title-text">
                <h1 className="uppercase">Contact Us</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="section-wrap contact">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h5 className="uppercase mb-30">Send Us Message</h5>
                <form id="contact-form" action="#">
                  <div className="contact-name">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="contact-email">
                    <input
                      name="mail"
                      id="mail"
                      type="email"
                      placeholder="E-mail*"
                    />
                  </div>
                  <div className="contact-subject">
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <textarea
                    name="comment"
                    id="comment"
                    placeholder="Message"
                    rows={9}
                    defaultValue={''}
                  />
                  <input
                    type="submit"
                    className="btn btn-lg btn-color btn-submit"
                    defaultValue="Submit"
                    id="submit-message"
                  />
                  <div id="msg" className="message" />
                </form>
              </div>{' '}
              {/* end col */}
              <div className="col-md-4 mb-40 mt-mdm-40 contact-info">
                <div className="address-wrap">
                  <h4 className="uppercase">Address</h4>
                  <h6>Philippines Store</h6>
                  <address className="address">
                    Philippines, PO Box 620067, Talay st. 66, A-ha inc.
                  </address>
                  <h6>Canada Store</h6>
                  <address className="address">
                    A-ha inc, 10-123 Main st. NW, Montreal QC, H3Z2Y7
                  </address>
                </div>
                <h4 className="uppercase">Contact Info</h4>
                <ul className="contact-info-list">
                  <li>
                    <span>Phone: </span>
                    <a href="tel:+1-888-1554-456-123">+ 1-888-1554-456-123</a>
                  </li>
                  <li>
                    <span>Email: </span>
                    <a
                      href="mailto:themesupport@gmail.com"
                      className="sliding-link"
                    >
                      themesupport@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>Skype: </span>
                    <a href="#">ahasupport</a>
                  </li>
                </ul>
                <h4 className="uppercase">Business Hours</h4>
                <p>Monday – Friday: 9am to 20 pm</p>
                <p>Saturday: 9am to 17 pm</p>
                <p>Sunday: closed</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

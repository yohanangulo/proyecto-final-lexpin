'use client'

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useScripts } from '@/hooks/useScripts';
import SignInForm from '@/components/SignInForm';

const Login = () => {
  useScripts()

  return (

    <>
      <Header />
      {/* Page Title */}
      <main className="content-wrapper oh">
        <section className="page-title text-center">
          <div className="container relative clearfix">
            <div className="title-holder">
              <div className="title-text">
                <h1 className="uppercase">My account</h1>
              </div>
            </div>
          </div>
        </section>{' '}
        {/* end page title */}
        {/* ----------------- */}
        {/* login */}
        {/* ------------------- */}
        <section className="section-wrap login-register pt-0 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3 mb-40">
                <div className="login">
                  <h4 className="uppercase">login</h4>
                    <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end login */}
      </main>
      <Footer />
    </>
  )
}
export default Login

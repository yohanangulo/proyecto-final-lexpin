'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MyAccountLayout from './MyAccountLayout'
import AccountDetails from './AccountDetails'
import { useScripts } from '@/hooks/useScripts'
import { useSession } from 'next-auth/react'
import SignInForm from '@/components/SignInForm'
import Orders from './Orders'
import { useEffect, useState } from 'react'
import UserService from '@/services/user'
import { Loader2 } from 'lucide-react/dist/esm/lucide-react'

const initialUserData = {
  name: '',
  lastname: '',
  email: '',
  birthdate: '',
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
}

const MyAccount = () => {
  useScripts()

  const { data: session, status } = useSession()

  const [userData, setUserData] = useState(initialUserData)
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    if (status === 'authenticated') {

      const { name, lastname, email, birthdate } = session.user

      setUserData({
        name,
        lastname,
        email,
        birthdate: birthdate.slice(0, 10),
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      })
    }
  }, [status])

  const handlePanelNavigation = index => {
    if (index == 'accountDetails') setTabIndex(0)
    if (index == 'orders') setTabIndex(1)
  }

  const handleUserData = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const myAccountPanels = [
    <AccountDetails key='details' handleUserData={handleUserData} {...userData} userId={session?.user._id} />,
    <Orders key='orders' />,
  ]

  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        {/* page title */}
        <section className="page-title text-center">
          <div className="container relative clearfix">
            <div className="title-holder">
              <div className="title-text">
                <h1 className="uppercase">My Account</h1>
              </div>
            </div>
          </div>
          {/* end page title */}
        </section>
        {/* my account */}

        {status === 'loading' && <Loader2 color={'#1c1c1c'} size={50} strokeWidth={2} className='spinner-loader mt-20 mb-120' />}
        {status === 'authenticated' && (
          <MyAccountLayout
            session={session}
            handlePanelNavigation={handlePanelNavigation}
          >
            {myAccountPanels[tabIndex]}
          </MyAccountLayout>
        )}
        {status === 'unauthenticated' && (
          <section className="section-wrap login-register pt-0 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3 mb-40">
                  <div className="login">
                    <h4 className="uppercase">login to enter this area</h4>
                    <SignInForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* end my account */}
      </main>
      <Footer />
    </>
  )
}
export default MyAccount

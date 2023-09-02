import Link from "next/link"

const MyAccountLayout = ({ children, handlePanelNavigation, session }) => {
  console.log(session)
  return (
    <section className="section-wrap woocommerce-account pt-0 pb-60">
      <div className="container">
        <div className="woocommerce">
          <nav className="woocommerce-MyAccount-navigation">
            <ul>
              {session?.user.email === 'admin@coolstore.com' && (
                <li
                  className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard`}
                  onClick={() => handlePanelNavigation('dashboard')}
                >
                  <a href="/dashboard">Dashboard</a>
                </li>
              )}

              {session?.user.email === 'admin@coolstore.com' && (
                <li
                  className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders`}
                  onClick={() => handlePanelNavigation('orders')}
                >
                  <a href="#my-account">Sales</a>
                </li>
              )}
              {session?.user.email === 'admin@coolstore.com' && (
                <li
                  className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders`}
                >
                  <Link href='/users' >Users</Link>
                </li>
              )}

              {session?.user.email === 'admin@coolstore.com' && (
                <li
                  className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders`}
                >
                  <Link href='/products/create-product' >create product</Link>
                </li>
              )}
              {session?.user.email === 'admin@coolstore.com' && (
                <li
                  className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders`}
                >
                  <Link href='/stock-products' >products</Link>
                </li>
              )}

              <li
                onClick={() => handlePanelNavigation('accountDetails')}
                className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account`}
              >
                <a href="#my-account">Account details</a>
              </li>
              {/* <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                <Link
                  href="#"
                  onClick={async e => {
                    e.preventDefault()
                    await signOut()
                  }}
                >
                  Logout
                </Link>
              </li> */}
            </ul>
          </nav>
          <div className="woocommerce-MyAccount-content">{children}</div>
        </div>
      </div>
    </section>
  )
}
export default MyAccountLayout

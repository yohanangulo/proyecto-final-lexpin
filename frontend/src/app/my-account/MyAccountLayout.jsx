import Link from "next/link";
import { useSession, signOut } from 'next-auth/react';


const MyAccountLayout = ({ children, handlePanelNavigation, activePanel }) => {
  return (
    <section className="section-wrap woocommerce-account pt-0 pb-60">
      <div className="container">
        <div className="woocommerce">
          <nav className="woocommerce-MyAccount-navigation">
            <ul>
              <li
                className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard${
                  activePanel == "dashboard" ? " is-active" : ""
                }`}
                onClick={() => handlePanelNavigation("dashboard")}
              >
                <a href="#my-account">Dashboard</a>
              </li>
              <li
                className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders${
                  activePanel == "orders" ? " is-active" : ""
                }`}
                onClick={() => handlePanelNavigation("orders")}
              >
                <a href="#my-account">Orders</a>
              </li>
              <li
                onClick={() => handlePanelNavigation("accountDetails")}
                className={`woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account${
                  activePanel == "accountDetails" ? " is-active" : ""
                }`}
              >
                <a href="#my-account">Account details</a>
              </li>
              <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                <Link href="#"  onClick={async (e) => { e.preventDefault(); await signOut(); }}>
                  Logout</Link>
              </li>
            </ul>
          </nav>
          <div className="woocommerce-MyAccount-content">{children}</div>
        </div>
      </div>
    </section>
  );
};
export default MyAccountLayout;

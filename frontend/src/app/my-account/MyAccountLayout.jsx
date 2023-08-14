import Link from "next/link";
import AccountDetails from "./AccountDetails";
import Dashboard from "./Dashboard";
import Orders from "./Orders";

const MyAccountLayout = ({ children, setPanel }) => {
  return (
    <section className="section-wrap woocommerce-account pt-0 pb-60">
      <div className="container">
        <div className="woocommerce">
          <nav className="woocommerce-MyAccount-navigation">
            <ul>
              <li
                className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard cursor-pointer"
                onClick={() => setPanel(Dashboard)}
              >
                <a href="#top">Dashboard</a>
              </li>
              <li
                className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders cursor-pointer"
                onClick={() => setPanel(Orders)}
              >
                <a href="#top">Orders</a>
              </li>
              {/* add is-active class to highlight the link */}
              <li
                onClick={() => setPanel(AccountDetails)}
                className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account cursor-pointer"
              >
                <a href="#top">Account details</a>
              </li>
              <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout cursor-pointer">
                <Link href="/">Logout</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </div>
    </section>
  );
};
export default MyAccountLayout;

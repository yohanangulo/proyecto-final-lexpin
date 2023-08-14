'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyAccountLayout from "./MyAccountLayout";
import AccountDetails from "./AccountDetails";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Orders from "./Orders";

const MyAccount = () => {
  const [panel, setPanel] = useState(AccountDetails)
  const [activePanel, setActivePanel] = useState('accountDetails')

  const handlePanelNavigation = (panelName) => {
    setActivePanel(panelName)
    if (panelName == 'dashboard') setPanel(Dashboard)
    if (panelName == 'orders') setPanel(Orders)
    if (panelName == 'accountDetails') setPanel(AccountDetails)
  }

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
      
      <MyAccountLayout activePanel={activePanel} handlePanelNavigation={handlePanelNavigation}>
        {panel}
      </MyAccountLayout>

      {/* end my account */}
    </main>
    <Footer />
    {/* <ScriptTags /> */}
    </>
  );
};
export default MyAccount;

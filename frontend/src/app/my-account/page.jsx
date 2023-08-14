'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyAccountLayout from "./MyAccountLayout";
import AccountDetails from "./AccountDetails";
import { useState } from "react";
import ScriptTags from "@/components/ScriptTags";


const MyAccount = () => {
  const [panel, setPanel] = useState(AccountDetails)
  return (
    <>
    <Header />
    <main id="top" className="content-wrapper oh">
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
      
      <MyAccountLayout setPanel={setPanel}>
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

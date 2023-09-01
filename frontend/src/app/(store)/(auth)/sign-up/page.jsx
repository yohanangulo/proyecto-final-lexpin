"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useScripts } from "@/hooks/useScripts";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter()
  useScripts();
  // Estado para almacenar los valores del formulario de registro
  const [registerData, setRegisterData] = useState({
    name: "",
    lastname: "",
    email: "",
    birthdate: "",
    password: "",
  });



  // Manejador para actualizar el estado cuando cambian los campos del formulario de registro
  const handleRegisterInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario de registro
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
  

    try {
      const response = await axios.post(
        "http://localhost:3003/users",
        registerData
      );
      console.log(response.data);
      alert("Registro exitoso");
      setTimeout(() => {
        router.push('/sign-in')
      }, 3000);
    } catch (error) {
      console.log("Error de registro:", error);
      alert("Error de registro");
    }
  };
  return (
    <>
      <Header />
      {/* Page Title */}
      <main className="content-wrapper oh">
        <section className="page-title text-center">
          <div className="container relative clearfix">
            <div className="title-holder">
              <div className="title-text">
                <h1 className="uppercase">My Account</h1>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* end page title */}
        {/* ----------------- */}
        {/* register */}
        {/* ------------------- */}
        <section className="section-wrap login-register pt-0 pb-40">
          <div className="container">
            <div className="row">
              {/* --------------------- */}
              {/* Register */}
              {/* ------------------- */}
              <div className="col-sm-6 col-sm-offset-3 mb-40">
                <div>
                  <h4 className="uppercase">Sign Up</h4>
                  <form onSubmit={handleRegisterSubmit}>
                    <p className="form-row form-row-wide">
                      <label>
                        name
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="text"
                        className="input-text"
                        placeholder=""
                        name="name"
                        value={registerData.name}
                        onChange={handleRegisterInputChange}
                      />
                    </p>
                    <p className="form-row form-row-wide">
                      <label>
                        Lastname
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="text"
                        className="input-text"
                        placeholder=""
                        name="lastname"
                        value={registerData.lastname}
                        onChange={handleRegisterInputChange}
                      />
                    </p>
                    <p className="form-row form-row-wide">
                      <label>
                        email
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="text"
                        className="input-text"
                        placeholder=""
                        name="email"
                        value={registerData.email}
                        onChange={handleRegisterInputChange}
                      />
                    </p>
                    <p className="form-row form-row-wide">
                      <label>
                        birthdate
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="date"
                        className="input-text"
                        placeholder=""
                        name="birthdate"
                        value={registerData.birthdate}
                        onChange={handleRegisterInputChange}
                      />
                    </p>
                    <p className="form-row form-row-wide">
                      <label>
                        password
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="password"
                        className="input-text"
                        placeholder=""
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterInputChange}
                      />
                    </p>

                    <input
                      type="submit"
                      defaultValue="Register"
                      className="btn"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* end login */}
      </main>
      <Footer />
    </>
  );
};
export default SignUp;

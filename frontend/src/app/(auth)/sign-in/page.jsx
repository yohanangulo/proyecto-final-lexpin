"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useScripts } from "@/hooks/useScripts";

const Login = () => {
  // const history = useHistory();


  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Manejador para actualizar el estado cuando cambian los campos del formulario
  const handleInputChange = (event) => {
     setFormData({
      ...formData,[event.target.name]: event.target.value
     })       
  };

  // Función para manejar el envío del formulario de inicio de sesión
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3003/login", formData);

      if (response.status === 200) {
        history.push("/");
        alert("inicio de sesion exitoso")
      } else {
        alert("Error de inicio de sesión: Datos incorrectos");
      }
    } catch (error) {
      console.error("Error al intentar iniciar sesión:", error);

      if (error.response && error.response.status === 401) {
        alert("Error de inicio de sesión: Usuario no encontrado");
      }
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
                <h1 className="uppercase">My account</h1>
              </div>
            </div>
          </div>
        </section>{" "}
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

                 <form  onSubmit={handleLoginSubmit}>
                 <p className="form-row form-row-wide">
                    <label>
                       email
                      <abbr className="required" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      type="email"
                      className="input-text"
                      placeholder=""
                      defaultValue=""
                      name="email"
                      value={formData.username}
                      onChange={handleInputChange}

                    />
                    <label htmlFor="remember" className="checkbox">
                      Remember me
                    </label>

                    <input
                      type="password"
                      className="input-text"
                      placeholder=""
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </p>
                  <input type="submit" defaultValue="Login" className="btn" />
                  <input
                    type="checkbox"
                    className="input-checkbox"
                    id="remember"
                    name="remember"
                    defaultValue={1}
                  />
                  <label htmlFor="remember" className="checkbox">
                    Remember me
                  </label>
                  <a href="#">Lost Password?</a>
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
export default Login;

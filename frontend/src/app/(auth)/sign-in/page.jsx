"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import Scripts from "@/components/Scripts";

const Login = () => {
  // Estado para almacenar los valores del formulario de registro
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    lastname: "",
    email: "",
    birthdate: "",
    password: "",
  });

  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Manejador para actualizar el estado cuando cambian los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario de inicio de sesión
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3003/login",
        formData
      );

      if (response.data.success) {
        alert("Inicio de sesión exitoso");
        window.location.href = "/"; // Cambia la ruta a donde quieras redirigir después del inicio de sesión exitoso
      } else {
        alert("Credenciales incorrectas. Por favor, inténtelo nuevamente.");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      alert("Ha ocurrido un error. Por favor, inténtelo nuevamente.");
    }
  };

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
    if (registerData.password !== registerData.confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3003/users",
        registerData
      );
      console.log(response.data);
      alert("Registro exitoso");
      setTimeout(() => {
        window.location.reload(); // Recarga la página después de un tiempo
      }, 3000);
    } catch (error) {
      console.error("Error de registro:", error);
      console.log("Error de registro:", error);
      alert("Error de registro");
    }
  };
  return (
    <>
      <Scripts />
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
        {/* login */}
        {/* ------------------- */}
        <section className="section-wrap login-register pt-0 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-sm-offset-1 mb-40">
                <div className="login">
                  <h4 className="uppercase">login</h4>
                  <form onSubmit={handleLoginSubmit}>
                    <p className="form-row form-row-wide">
                      <label>
                        username or email
                        <abbr className="required" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        type="text"
                        className="input-text"
                        placeholder=""
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
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
                        type="text"
                        className="input-text"
                        placeholder=""
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </p>
                    <input type="submit" value="Login" className="btn" />
                    <input
                      type="checkbox"
                      className="input-checkbox"
                      id="remember"
                      name="remember"
                      value={1}
                    />
                    <label htmlFor="remember" className="checkbox">
                      Remember me
                    </label>
                    <a href="#">Lost Password?</a>
                  </form>
                </div>
              </div>
              {/* --------------------- */}
              {/* Register */}
              {/* ------------------- */}
              <div className="col-sm-5">
                <div className="register">
                  <h4 className="uppercase">Register</h4>
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
      {/* <ScriptTags /> */}
    </>
  );
};
export default Login;

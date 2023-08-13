"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const productInitialState = {
  name: "",
  description: "",
  price: "",
  stock: "",
  category: "",
};

const categories = ["Hombres", "Mujeres",];

const CreateProduct = () => {
  const [productData, setProductData] = useState(productInitialState);

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };


  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap">
          <div className="container">
            <div className="row heading-row mt-50">
              <div className="col-md-12 text-center">
                <h2 className="heading uppercase">
                  <small>crea un nuevo producto</small>
                </h2>
              </div>
            </div>
            {/* Forms */}
            <form autoComplete="off" onSubmit={handleSubmit} action="">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      value={productData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="price">Precio</label>
                    <input
                      name="price"
                      id="price"
                      type="number"
                      value={productData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea
                      id="_description"
                      name="description"
                      placeholder="Agrega una Descripción"
                      rows={3}
                      onChange={handleInputChange}
                      value={productData.description}
                    />
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-6">
                  <div>
                    <label htmlFor="stock">Stock</label>
                    <input
                      name="stock"
                      id="stock"
                      type="number"
                      value={productData.stock}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="category">Categoria</label>
                    <select
                      name="category"
                      id="category"
                      value={productData.category}
                      onChange={handleInputChange}
                    >
                      <option disabled value="" >-- Selecciona una categoria --</option> 
                      {categories.map((category) => (
                        <option key={category} value={category.toLowerCase()}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="images">
                      Selecciona imagenes para tu producto
                    </label>
                    <input name="images" id="images" type="file" />
                  </div>
                </div>
              </div>
              <button className="btn btn-md btn-dark">Crear</button>
            </form>
          </div>
        </section>
        {/* end row */}
      </main>
      <Footer />
    </>
  );
};
export default CreateProduct;

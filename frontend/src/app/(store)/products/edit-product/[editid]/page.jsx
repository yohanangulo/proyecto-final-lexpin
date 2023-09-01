"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { appFirebase } from '@/config/firebase.jsx';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';

const EditProduct = ({ params }) => {

  console.log(params)

  const productId = params.editid
  const db = getFirestore(appFirebase);
  const [product, setProduct] = useState({  
    name: '',
    price: '',
    description: '',
    stock: '',
    category: '', 
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        const productRef = doc(db, 'products', productId);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          setProduct({ ...productDoc.data(), id: productId });
        }
      }
    };

    fetchProduct();
  }, [db, productId]);

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    try {
      const productRef = doc(db, 'products', productId);
      await updateDoc(productRef, {
        name: product.name,
        price: product.price,
        description: product.description,
        stock: product.stock,
        category: product.category,
      });

      router.push('/products');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const fileHandler = () => {}

  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap">
          <div className="container">
            <div className="row heading-row mt-50">
              <div className="col-md-12 text-center">
                <h2 className="heading uppercase">
                  <small>Editar producto</small>
                </h2>
              </div>
            </div>
            <form autoComplete="off" onSubmit={handleUpdateProduct} action="">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      value={product.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="price">Precio</label>
                    <input
                      name="price"
                      id="price"
                      type="number"
                      value={product.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="description">Descripción</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Agrega una Descripción"
                      rows={3}
                      onChange={handleInputChange}
                      value={product.description}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label htmlFor="stock">Stock</label>
                    <input
                      name="stock"
                      id="stock"
                      type="number"
                      value={product.stock}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="category">Categoría</label>
                    <select
                      name="category"
                      id="category"
                      value={product.category}
                      onChange={handleInputChange}
                    >
                      <option disabled value="">-- Selecciona una categoría --</option>
                      {/* Define las opciones de categoría aquí */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="images">
                      Selecciona imágenes para tu producto
                    </label>
                    <input name="images" id="images" type="file" onChange={fileHandler}/>
                  </div>
                </div>
              </div>
              <button className="btn btn-md btn-dark">Actualizar</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EditProduct;
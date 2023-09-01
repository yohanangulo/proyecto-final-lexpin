"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import { useScripts } from "@/hooks/useScripts";
import React, { useEffect, useState } from 'react'
import { appFirebase } from '@/config/firebase'
import { getFirestore, doc, getDoc, query, collection, getDocs, deleteDoc } from 'firebase/firestore'

const Stokproducts = () => {
  useScripts();
  const db = getFirestore(appFirebase)

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'))
        const querySnapshot = await getDocs(q)

        const productList = []
        querySnapshot.forEach(doc => {
          productList.push({ ...doc.data(), id: doc.id })
        })

        setProducts(productList)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [db])
  const handleDeleteProduct = async (productId) => {
    try {
      // Realiza la eliminación del producto en Firestore
      await deleteDoc(doc(db, 'products', productId));
  
      // Actualiza la lista de productos en el estado
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error al borrar el producto:', error);
    }
  };

  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <h1 className="product-title text-center mt-20">Stock</h1>
        {products.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          products.map(product => (
            <section className="section-wrap single-product " key={product.id}>
              <div className="container relative">
                <div className="row">
                  <div className="col-sm-2 col-xs-12 mb-60">
                    <div className="flickity flickity-slider-wrap mfp-hover" id="gallery-main">
                      <div className="gallery-cell">
                        <a href={product.imagen} className="lightbox-img">
                          <img src={product.imagen} alt="" />
                          <i className="icon arrow_expand" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-xs-12 product-description-wrap">
                    <h1 className="product-title">{product.name}</h1>
               
                    <span className="price">
                      <ins>
                        <span className="ammount">{product.price}$</span>
                      </ins>
                    </span>
                    <p className="product-description">
                      {product.description}
                    </p>

                    <div className="product_meta">
                      <span className="posted_in">
                        Categoría: <a href="#">{product.category}</a>
                      </span>
                    </div>
                  </div>
                </div>
                <a
                      href="#"
                      className="btn btn-color btn-lg add-to-cart left" onClick={() => handleDeleteProduct(product.id)}
                    >
                      <span>Borrar Producto</span>
                    </a>
                <div className="row">
                  <div className="col-md-12">
                    <div className="tabs tabs-bb">
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <a href="#tab-description" data-toggle="tab">
                            {product.description}
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade in active" id="tab-description">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))
        )}
      </main>
      <Footer />
    </>
  );
};

export default Stokproducts;

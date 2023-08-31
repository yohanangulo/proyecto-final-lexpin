"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import withAuth from '../../../utils/withauth.jsx';
import {  useState, useEffect } from "react";
import { appFirebase } from '../../../config/firebase.jsx';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase);

const CreateProduct = () => {
  

  const categories = [
    "Shirts for Man",
    "Jens for Man",
    "Accesories for Man",
    "Shoes for Man",
    "Dresses for Woman",
    "Coats for Woman",
    "Accesories for Woman",
    "Sandals for Woman",
    "Wallets of Accesories",
    "Watches of Accesories",
    "Belts of Accesories",
    "Scarfs of Accesories",
    "Leather of Bags",
    "Sports of Bags",
    "Street Style of Bags",
    "Creative of Bags"
  ];

  const productInitialState = {
    name: "",
    description: "",
    price: "",
    stock: "",
    category: categories[0].toLowerCase(),
  };

  const [productData, setProductData] = useState(productInitialState);
  const [urlImDesc, setUrlImDesc] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);


  useEffect(()=>{
    if(editingProduct){
      loadEditProductData();
    }
  },[editingProduct]);

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const fileHandler = async (e) => {
    const archivoI = e.target.files[0];
    const refArchivo = ref(storage, `documentos/${archivoI.name}`);
    await uploadBytes(refArchivo, archivoI);
    const urlImDesc = await getDownloadURL(refArchivo);
    setUrlImDesc(urlImDesc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productData.name || !productData.price || !productData.description || !urlImDesc) {
      alert("Por favor, complete la información del producto y suba una imagen.");
    } else {
      try {
        const newProduct = {
          name: productData.name,
          description: productData.description,
          price: productData.price,
          stock: productData.stock,
          category: productData.category,
          imagen: urlImDesc
        };
        await addDoc(collection(db, 'products'), newProduct);
        // Limpiar el formulario después de crear el producto
        setProductData(productInitialState);
        setUrlImDesc("");
        alert('Producto creado correctamente');
      } catch (error) {
        console.error("Error al crear producto:", error);
        alert('Error al crear el producto');
      }
    }
  };
 
  const handleEdit = (product) => {
    setEditingProduct(product); // Establece el producto en edición
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    if (!productData.name || !productData.price || !productData.description) {
      alert("Por favor, complete la información del producto.");
    } else {
      try {
        const productRef = doc(db, 'products', editingProduct.id); // Referencia al documento del producto
        const updatedProduct = {
          name: productData.name,
          description: productData.description,
          price: productData.price,
          stock: productData.stock,
          category: productData.category,
          imagen: urlImDesc
        };
        await updateDoc(productRef, updatedProduct); // Actualiza el documento
        console.log('Producto actualizado correctamente');
        setProductData(productInitialState);
        setUrlImDesc("");
        setEditingProduct(null); // Finaliza la edición
      } catch (error) {
        console.error("Error al actualizar producto:", error);
        alert('Error al actualizar el producto');
      }
    }
  };

  // Carga los datos del producto en edición
  const loadEditingProductData = async () => {
    try {
      const productRef = doc(db, 'products', editingProduct.id);
      const productDoc = await getDoc(productRef);
      if (productDoc.exists()) {
        const product = productDoc.data();
        setProductData(product);
      }
    } catch (error) {
      console.error("Error al cargar datos de edición:", error);
    }
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
                    <input name="images" id="images" type="file" onChange={fileHandler}/>
                  </div>
                </div>
              </div>
              <button className="btn btn-md btn-dark">
              {editingProduct ? "Actualizar" : "Crear"}
                </button>
            </form>
          </div>
        </section>
        {/* end row */}
      </main>
      <Footer />
    </>
  );
};
export default withAuth(CreateProduct);

import React,{useEffect, useState} from "react";
import { appFirebase } from '../config/firebase.jsx';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const ProductItem = () => {
const db = getFirestore(appFirebase);

const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productList = [];
      querySnapshot.forEach((doc) => {
        productList.push({ ...doc.data(), id: doc.id });
      });
      setProducts(productList);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts();
}, [db]);

  return (
    <div className="product-item">
      {products.map(product => (
        <div key={product.id} className="product">
          <div className="product-img">
            <a href="#">
              <img
                src={product.imagen} 
                alt={product.name}    
              />
              <img
                src={product.imagen} 
                alt={product.name}    
                className="back-img"
              />
            </a>
            {product.stock === 0 && <span className="sold-out valign">out of stock</span>}
            {product.sale && <div className="product-label"><span className="sale">sale</span></div>}
            <div className="product-actions">
              <a
                href="#"
                className="product-add-to-compare"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to compare"
              >
                <i className="fa fa-exchange" />
              </a>
              <a
                href="#"
                className="product-add-to-wishlist"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to wishlist"
              >
                <i className="fa fa-heart" />
              </a>
            </div>
            <a href="#" className="product-quickview">
              Quick View
            </a>
          </div>
          <div className="product-details">
            <h3>
              <a className="product-title" href="shop-single-product.html">
                {product.name} {/* Replace with the actual product name from your data */}
              </a>
            </h3>
            <span className="price">
              {product.price && <del><span>{product.price}</span></del>}
              <ins><span className="ammount">{product.price}</span></ins>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductItem;

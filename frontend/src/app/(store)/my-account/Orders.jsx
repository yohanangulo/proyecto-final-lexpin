import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get('http://localhost:3003/cart')
      .then((response) => {
        const cartItemsData = response.data;
        setCartItems(cartItemsData);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error al obtener elementos del carrito:', error);
        setError(error); 
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }


  return (
    <div className="table-wrap mb-30">
      <table className="shop_table cart table">
        <thead>
          <tr>
            <th className="product-name" colSpan={2}>
              Product
            </th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id} className=" cart_item">
              <td className="product-thumbnail">
                <a href="#">
                  <img src={`URL_DE_TU_IMAGEN/${item.productId}`} alt="" />
                </a>
              </td>
              <td className="product-name">
                <a href="#">Nombre del producto</a>
                <ul>
                  <li>Size: XL</li>
                  <li>Color: White</li>
                </ul>
              </td>
              <td className="product-price">
                <span className="amount"> {item.price ? `$${item.price.toFixed(2)}` : 'N/A'}</span>
              </td>
              <td className="product-quantity">
                <span className="amount">{item.quantity} pcs</span>
              </td>
              <td className="product-subtotal">
                <span className="amount">{item.price ? `$${item.price.toFixed(2)}` : 'N/A'}</span>
              </td>
              <td className="product-remove">
                <a href="#" className="remove" title="Remove this item">
                  <i className="icon icon_close" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

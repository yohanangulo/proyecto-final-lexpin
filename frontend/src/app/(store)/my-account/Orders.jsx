import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get('http://localhost:3003/sales')
      .then((response) => {
        const salesData = response.data;
        setSales(salesData);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error al obtener elementos de ventas:', error);
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
          {sales.map((item) => (
            <tr key={item._id} className=" cart_item">
              <td className="product-thumbnail">
                <a href="#">
                  <img src={`URL_DE_TU_IMAGEN/${item.productId}`} alt="" />
                </a>
              </td>
              <td className="product-name">
                <a href="#">{item.name}</a>
                <ul>
                  <li>Size: {item.size}</li>
                  <li>Color: {item.color}</li>
                </ul>
              </td>
              <td className="product-price">
                <span className="amount"> {item.price ? `$${item.price.toFixed(2)}` : 'N/A'}</span>
              </td>
              <td className="product-quantity">
                <span className="amount">{item.quantity} pcs</span>
              </td>
              <td className="product-subtotal">
                <span className="amount">{item.total ? `$${item.total.toFixed(2)}` : 'N/A'}</span>
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

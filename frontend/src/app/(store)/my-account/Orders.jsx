import React, { useState, useEffect } from 'react';
import axios from 'axios';
import salesService from '@/services/sales'
import { useFetch } from '@/hooks/useFetch';
import { formatter } from '@/lib/utils';

const Orders = () => {

  const { data: cartItems, error, isLoading } =  useFetch(salesService.getAllSales())

  if (error) {
    return <div>Error: {error.message}</div>; 
  }
  
  if (isLoading) {
    return <div>Wait a minute, loading data</div>
  }

  console.log(cartItems[0].productos)
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
                  <small>product image</small>
                </a>
              </td>
              <td className="product-name">
                <a href="#">Product</a>
                <ul>
                  <li>Size: {item.size}</li>
                  <li>Color: {item.color}</li>
                </ul>
              </td>
              <td className="product-price">
                <span className="amount"> {formatter.format(item.precioConIva / item?.productos[0].cantidad) }</span>
              </td>
              <td className="product-quantity">
                <span className="amount">{item?.productos[0].cantidad} pcs</span>
              </td>
              <td className="product-subtotal">
                <span className="amount">{formatter.format(item.precioConIva)}</span>
              </td>
              {/* <td className="product-remove">
                <a className="remove" title="Remove this item">
                  <i className="icon icon_close" />
                </a>
              </td */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

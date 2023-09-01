const Orders = () => {
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
          <tr className="cart_item">
            <td className="product-thumbnail">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/shop_item_3.jpg" alt="" />
              </a>
            </td>
            <td className="product-name">
              <a href="#">Fashion Shorts</a>
              <ul>
                <li>Size: XL</li>
                <li>Color: White</li>
              </ul>
            </td>
            <td className="product-price">
              <span className="amount">$1250.00</span>
            </td>
            <td className="product-quantity">
              <span className="amount">2 pcs</span>
            </td>
            <td className="product-subtotal">
              <span className="amount">$1250.00</span>
            </td>
            <td className="product-remove">
              <a href="#" className="remove" title="Remove this item">
                <i className="icon icon_close" />
              </a>
            </td>
          </tr>
          <tr className="cart_item">
            <td className="product-thumbnail">
              <a href="#">
                <img src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/shop_item_7.jpg" alt="" />
              </a>
            </td>
            <td className="product-name">
              <a href="#">Business Suit</a>
              <ul>
                <li>Size: L</li>
                <li>Color: Black</li>
              </ul>
            </td>
            <td className="product-price">
              <span className="amount">$240.00</span>
            </td>
            <td className="product-quantity">
              <span className="amount">3 pcs</span>
            </td>
            <td className="product-subtotal">
              <span className="amount">$240.00</span>
            </td>
            <td className="product-remove">
              <a href="#" className="remove" title="Remove this item">
                <i className="icon icon_close" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Orders;

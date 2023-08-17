const ProductItem = () => {
  return (
    <div className="product-item">
      <div className="product-img">
        <a href="#">
          <img
            src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/product-item.jpg"
            alt=""
          />
          <img
            src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/product-item.jpg"
            alt=""
            className="back-img"
          />
        </a>
        <span className="sold-out valign">out of stock</span>
        <div className="product-label">
          <span className="sale">sale</span>
        </div>
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
            Night Party Dress
          </a>
        </h3>
        <span className="price">
          <del>
            <span>$388.00</span>
          </del>
          <ins>
            <span className="ammount">$159.99</span>
          </ins>
        </span>
      </div>
    </div>
  );
};
export default ProductItem;

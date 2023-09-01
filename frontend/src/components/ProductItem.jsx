import  Link  from 'next/link';
const ProductItem = product => {
  
  return (
    
    <div className="product-item">
      <div key={product.id} className="product">
        <div className="product-img">
        <a href={`/products/${product.id}`}>
            <img src={product.imagen} alt={product.name} />
            <img src={product.imagen} alt={product.name} className="back-img" />
          </a>
          {product.stock === 0 && (
            <span className="sold-out valign">out of stock</span>
          )}
          {product.sale && (
            <div className="product-label">
              <span className="sale">sale</span>
            </div>
          )}
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
              {product.name}{' '}
              
            </a>
          </h3>
          <span className="price">
            {product.price && (
              <del>
                <span>{product.price}</span>
              </del>
            )}
            <ins>
              <span className="ammount">{product.price}</span>
            </ins>
          </span>
        </div>
      </div>
    </div>
  )
}
export default ProductItem

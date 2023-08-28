export default function ProductListWidget() {
  const bestsellers = Array.from({ length: 2 })

  return (
    <ul className="product-list-widget">
      {bestsellers.map((product, i) => (
        <li key={'product' + i} className="clearfix">
          <a href="shop-single-product.html">
            <img
              src="https://cdn.jsdelivr.net/gh/yohanangulo/cdn@latest/img/shop/product-item.jpg"
              alt=""
            />
            <span className="product-title">Sleeveless dress</span>
          </a>
          <span className="price">
            <ins>
              <span className="ammount">$120.00</span>
            </ins>
          </span>
        </li>
      ))}
    </ul>
  )
}

import ProductListWidget from './ProductListWidget'

export default function Sidebar() {
  const categories = ['women', 'men', 'accessories', 'bags', 'watches', 'shoes']
  const categoriesList = categories.map(
    category => category[0].toUpperCase() + category.slice(1)
  )
  return (
    <aside className="col-md-3 sidebar left-sidebar">
      {/* Categories */}
      <div className="widget categories">
        <h3 className="widget-title uppercase">Categories</h3>
        <ul className="list-no-dividers">
          {categoriesList.map((category, i) => (
            <li key={category + i}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Bestsellers */}
      <div className="widget bestsellers">
        <div className="products-widget">
          <h3 className="widget-title uppercase">Bestsellers</h3>
          <ProductListWidget />
        </div>
      </div>
    </aside>
  )
}

export default function Pagination() {
  return (
    <div className="pagination-wrap">
      <p className="result-count">Showing: 1-12 of 80 results</p>
      <nav className="pagination right clear">
        <a href="#">
          <i className="fa fa-angle-left" />
        </a>
        <span className="page-numbers current">1</span>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">
          <i className="fa fa-angle-right" />
        </a>
      </nav>
    </div>
  )
}

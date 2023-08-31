import ProductItem from './ProductItem';

export default function NewArrivals() {
  const newArrivals = [1, 2, 3, 4]; // Agrega más elementos si es necesario
  return (
    <div className="row">
      {newArrivals.map((newArr, i) => (
        <div key={newArr + i} className="col-md-3 col-sm-6">
          <ProductItem />
        </div>
      ))}
    </div>
  );
}

import ProductItem from './ProductItem'
import { appFirebase } from '../config/firebase.jsx'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
} from 'firebase/firestore'

export default async function NewArrivals() {
  const db = getFirestore(appFirebase)

  const q = query(collection(db, 'products'), limit(8))
  const querySnapshot = await getDocs(q)

  const products = []
  querySnapshot.forEach(doc => {
    products.push({ ...doc.data(), id: doc.id })
  })

  return products.map((product, i) => (
    <div key={product.id} className="col-md-3 col-xs-6">
      <ProductItem {...product} />
    </div>
  ))
}

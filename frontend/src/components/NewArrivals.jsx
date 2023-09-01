import ProductItem from './ProductItem'
import { useEffect, useState } from 'react'
import { appFirebase } from '../config/firebase.jsx'
import { getFirestore, collection, getDocs, query, limit  } from 'firebase/firestore'

export default function NewArrivals() {
  const db = getFirestore(appFirebase)

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'), limit(4))
        const querySnapshot = await getDocs(q)

        const productList = []
        querySnapshot.forEach(doc => {
          productList.push({ ...doc.data(), id: doc.id })
        })

        setProducts(productList)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [db])

  return products.map((product, i) => (
    <div key={product.id} className="col-md-3 col-xs-6">
      <ProductItem {...product} />
    </div>
  ))
}

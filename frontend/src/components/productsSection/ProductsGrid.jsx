import ProductItem from '../ProductItem'
import { appFirebase } from '@/config/firebase'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function ProductsGrid() {
  const dummyProducts = Array.from({ length: 12 })
  const [products, setProducts] = useState([])

  const db = getFirestore(appFirebase)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'), limit(12))
        const querySnapshot = await getDocs(q)

        // const ref = doc(db, 'products', 'SzL3NafUfOMl0cFWlBk4')
        // const res = await deleteDoc(ref)

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

  console.log(products)

  return products.map((product, i) => (
    <div key={'product' + i} className="col-md-4 col-xs-6">
      <ProductItem {...product} />
    </div>
  ))
}

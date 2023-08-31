import ProductItem from './ProductItem'
import React, { useEffect, useState } from 'react'
import { appFirebase } from '../config/firebase.jsx'
import { getFirestore, collection, addDoc, getDocs, query, limit } from 'firebase/firestore'

export default function NewArrivals() {
  const db = getFirestore(appFirebase)

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'), query(limit(3)))
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
    <div className="col-md-3 col-xs-6">
      <ProductItem {...product} />
    </div>
  ))
}

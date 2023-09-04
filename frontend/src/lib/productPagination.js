import { db } from '@/config/firebase'
import { collection, getDocs, limit, orderBy, query, startAfter, limitToLast, endBefore } from 'firebase/firestore'

export const navigateProductsPage = async ({ perPage, action }) => {
  let q

  switch (action) {
    case 'next':
    q = query(
      collection(db, 'products'),
      orderBy('name'),
      startAfter(window.lastVisible),
      limit(perPage)
    )
      break;
    case 'previous':
    q = query(
      collection(db, 'products'),
      orderBy('name'),
      endBefore(window.firstVisible),
      limitToLast(perPage)
    )
      break
    default:
      q = query(collection(db, 'products'), orderBy('name'), limit(perPage))
      break;
  }

  try {
    const snap = await getDocs(q)

    window.lastVisible = snap.docs[snap.docs.length - 1]
    window.firstVisible = snap.docs[0]

    const productsList = []

    snap.forEach(doc => {
      productsList.push({ ...doc.data(), id: doc.id })
    })

    return productsList
  } catch (error) {
    console.error(error)
  }
}


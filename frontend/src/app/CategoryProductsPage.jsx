import React from 'react'
import Header from "@/components/Header";
import { useRouter } from 'next/navigation';

const CategoryProductsPage = () => {
    const router = useRouter();
    const { category } = router.query;
  return (
    <div>
        <Header />
      
    </div>
  )
}

export default CategoryProductsPage

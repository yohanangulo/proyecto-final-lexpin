'use client'
import { formatter } from '@/lib/utils'
import Link from 'next/link'
// import ProductImage from './ProductImage'
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react/dist/esm/lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const ProductItem = product => {
  const [isImgLoading, setIsImgLoading] = useState(true)

  const handleOnLoad = () => {
    setIsImgLoading(false)
  }

  return (
    <div className="product-item">
      <div key={product.id} className="product">
        <a href={`/products/${product.id}`}>
          <div style={{ aspectRatio: 2 / 3 }} className="product-img">
            {isImgLoading && (
              <>
                <Loader2
                  color={'#1c1c1c'}
                  size={40}
                  strokeWidth={2}
                  className="spinner-loader-product"
                />
                <div className="loading-product-bg" />
              </>
            )}
            <Image
              fill
              src={product.imagen}
              alt="product image"
              onLoad={handleOnLoad}
            />
            {product.stock === 0 && (
              <span className="sold-out valign">out of stock</span>
            )}
            {product.sale && (
              <div className="product-label">
                <span className="sale">sale</span>
              </div>
            )}
            <div className="product-actions">
              <span
                href="#"
                className="product-add-to-compare"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to compare"
              >
                <i className="fa fa-exchange" />
              </span>
              <span
                href="#"
                className="product-add-to-wishlist"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Add to wishlist"
              >
                <i className="fa fa-heart" />
              </span>
            </div>
            <span className="product-quickview">Quick View</span>
          </div>
        </a>
        <div className="product-details">
          <h3>
            <a className="product-title" href="shop-single-product.html">
              {product.name}{' '}
            </a>
          </h3>
          <span className="price">
            {/* {product.price && (
              <del>
                <span>{product.price}</span>
              </del>
            )} */}
            <ins>
              <span className="ammount">{formatter.format(product.price)}</span>
            </ins>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem

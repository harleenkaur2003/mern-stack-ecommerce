import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

const DetailProduct = () => {
  const { id } = useParams()
  const { state } = useContext(GlobalState)
  const [products] = state.productAPI.products
  const [detailProduct, setDetailProduct] = useState({})

  useEffect(() => {
    if (id && products.length > 0) {
      const found = products.find(product => product._id === id)
      if (found) setDetailProduct(found)
    }
  }, [id, products])

  if (!detailProduct._id) return <h2>Loading product details...</h2>

  return (
    <div className="detail">
      <img src={detailProduct.images} alt={detailProduct.title} />
      <div className="box-detail">
        <div className="row">
          <h2>{detailProduct.title}</h2>
          <h6>{detailProduct.product_id}</h6>
        </div>
        <span>${detailProduct.price}</span>
        <p>{detailProduct.description}</p>
        <p>{detailProduct.content}</p>
        <p>Sold: {detailProduct.sold}</p>
        <Link to="/cart" className="cart">Buy Now</Link>
      </div>
    </div>
  )
}

export default DetailProduct

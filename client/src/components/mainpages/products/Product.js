import React,{useContext} from 'react'
import {GlobalState} from'../../../GlobalState'
import ProductList from '../utils/ProductLists/ProductList'
import './products.css';

const Product = () => {
    const {state}=useContext(GlobalState)
    const [products] = state.productAPI.products
    const [isAdmin] =state.userAPI.isAdmin

    if (!products || products.length === 0) return <h2>Loading...</h2>;

  return (
    <div className='products'>
        {
            products.map(product=>{
                return <ProductList key={product._id} product={product} isAdmin={isAdmin}/>
            })
        }
      
    </div>
  )
}

export default Product

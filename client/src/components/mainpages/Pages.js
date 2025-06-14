import React from 'react' 
import Login from './login/Login'
import Register from './login/Register'
import Cart from './cart/Cart'
import { Route, Routes } from 'react-router-dom'
import DetailProduct from './utils/DetailProducts/DetailProduct'
import Product from './products/Product';
import CreateProduct from './products/CreateProduct';


<Route path="/create-product" element={<CreateProduct />} />


const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Product />}/>
      <Route  path='/login' element={<Login />}/>
      <Route  path='/register' element={<Register />}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/detail/:id' element={<DetailProduct />}/>
      <Route  path='/cart' element={<Cart />}/>
      <Route path="/create-product" element={<CreateProduct />} />
      
    </Routes>
  )
}

export default Pages
import React, { useState } from 'react';
import axios from 'axios';
import ImageUploader from '../../ImageUploader';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    product_id: '',
    title: '',
    price: '',
    description: '',
    content: '',
    images: '',
    category: '',
  });

  const handleImageUpload = (imagePath) => {
    setProduct({ ...product, images: imagePath });
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/product', product);
      alert('Product created successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Failed to create product');
    }
  };

  return (
    <div className="create-product">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="product_id" value={product.product_id} onChange={handleChange} placeholder="Product ID" required />
        <input name="title" value={product.title} onChange={handleChange} placeholder="Title" required />
        <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" required />
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Short Description" required />
        <textarea name="content" value={product.content} onChange={handleChange} placeholder="Full Content" required />
        <input name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
        <ImageUploader onUploadSuccess={handleImageUpload} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;

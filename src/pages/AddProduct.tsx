import React from 'react';
import ProductForm from '../components/ProductForm';
import { useProducts } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { addProduct } = useProducts();
  const nav = useNavigate();
  return (
    <div>
      <h2>Thêm sản phẩm</h2>
      <ProductForm onSubmit={(payload) => { addProduct(payload as any); nav('/'); }} />
    </div>
  );
};

export default AddProduct;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;

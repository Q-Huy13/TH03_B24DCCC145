import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import ProductForm from "../components/ProductForm";

const EditProduct = ()=>{
  const { id } = useParams();
  const { products, dispatch } = useProductContext();
  const nav = useNavigate();

  const product = products.find((p:any)=>p.id === Number(id));

  if(!product) return <div>Không tìm thấy sản phẩm</div>;

  const handleSubmit = (payload:any)=>{
    dispatch({type:"EDIT_PRODUCT", payload});
    alert("Đã sửa sản phẩm!");
    nav("/");
  }

  return (
    <div style={{padding:"10px"}}>
      <h2>Chỉnh sửa sản phẩm</h2>
      <ProductForm 
        initial={product} 
        isEdit={true}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditProduct;

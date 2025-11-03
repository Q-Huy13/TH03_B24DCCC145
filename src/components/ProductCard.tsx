import React from "react"
import { useProductContext } from "../contexts/ProductContext"

function ProductCard(props:any){
  const { product } = props
  const { dispatch } = useProductContext()

  // Hàm xóa (viết kiểu sinh viên mới học)
  const handleDel = (id:any)=>{
    var xacnhan = window.confirm("bạn có muốn xóa thật hông?? 😅")
    if(xacnhan){
      dispatch({type:"DELETE_PRODUCT", payload:id})
      alert("Xóa r nha!!!")
    } else{
      console.log("hông xóa nữa!!!")
    }
  }

  // chuyển trang kiểu “thủ công”
  const editClick = ()=>{
    window.location.href = "/edit/" + product.id
  }

  return(
    <div style={{
      border:"1px solid gray",
      margin:"8px",
      padding:"10px",
      borderRadius:"6px",
      width:"240px",
      display:"inline-block",
      backgroundColor:"#fefefe"
    }}>
      <h3 style={{color:"blue", fontSize:"18px"}}>{product.ten}</h3>
      <p>{product.danhMuc} - {product.gia} VND</p>
      <p>SL: {product.soLuong}</p>
      <p style={{fontStyle:"italic"}}>{product.moTa}</p>
      <div>
        <button onClick={editClick} style={{marginRight:"6px", cursor:"pointer"}}>Sửa</button>
        <button onClick={()=>handleDel(product.id)} style={{backgroundColor:"red", color:"white", cursor:"pointer"}}>Xóa</button>
      </div>
    </div>
  )
}

export default ProductCard

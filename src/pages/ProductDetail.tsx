import React from "react"
import { useParams,useNavigate } from "react-router-dom"
import { useProductContext } from "../contexts/ProductContext"

const ProductDetail = ()=>{
    const {id}=useParams()
    const {products}=useProductContext()
    const nav=useNavigate()

    let p:any
    try{
        p=products.find((item:any)=>item.id==Number(id))
    }catch(e){
        console.log("lỗi tìm sp:",e)
    }

    if(!p){
        return <div>Không tìm thấy sản phẩm 😢</div>
    }

    return (
        <div style={{margin:"10px"}}>
            <h2 style={{color:"blue"}}>{p.ten}</h2>
            <p><b>Danh mục:</b> {p.danhMuc}</p>
            <p><b>Giá:</b> {p.gia} VND</p>
            <p><b>Mô tả:</b> {p.moTa || "Không có mô tả 😶"}</p>
            <button style={{padding:"5px 10px"}} onClick={()=>nav("/")}>Quay lại</button>
        </div>
    )
}

export default ProductDetail

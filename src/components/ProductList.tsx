import React, {useState, useMemo} from "react";
import {useProductContext} from "../contexts/ProductContext";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Pagination from "./Pagination";

const ProductList = ()=>{
  const {products} = useProductContext();
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("All");
  const [minPrice,setMinPrice]=useState<any>();
  const [maxPrice,setMaxPrice]=useState<any>();
  const [page,setPage]=useState(1);
  const ITEMS_PER_PAGE=6;

  const filtered = useMemo(()=>{
    let data = products;
    if(query.trim()){
      const q = query.toLowerCase();
      data = data.filter((p:any)=>p.ten.toLowerCase().includes(q));
    }
    if(category!=="All") data=data.filter((p:any)=>p.danhMuc===category);
    if(minPrice) data=data.filter((p:any)=>p.gia>=minPrice);
    if(maxPrice) data=data.filter((p:any)=>p.gia<=maxPrice);
    return data;
  },[products,query,category,minPrice,maxPrice]);

  const totalPages=Math.ceil(filtered.length/ITEMS_PER_PAGE)||1;
  const paginated = filtered.slice((page-1)*ITEMS_PER_PAGE,page*ITEMS_PER_PAGE);

  if(page>totalPages) setPage(totalPages);

  return (
    <div style={{padding:10}}>
      <div style={{display:"flex",gap:"10px",marginBottom:10}}>
        <SearchBar query={query} setQuery={setQuery}/>
        <button onClick={()=>window.location.href="/add"}>Thêm sản phẩm</button>
      </div>
      <Filter 
        category={category} setCategory={setCategory}
        minPrice={minPrice} setMinPrice={setMinPrice}
        maxPrice={maxPrice} setMaxPrice={setMaxPrice}
      />
      <p>Tổng sản phẩm: {filtered.length} | Trang {page}/{totalPages}</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
        {paginated.map((p:any)=>(
          <ProductCard key={p.id} product={p}/>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} setPage={setPage}/>
    </div>
  )
}

export default
ProductList
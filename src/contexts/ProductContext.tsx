import React, { createContext, useContext, useReducer } from "react";
import { initialProducts } from "../data/initialProducts";
 // ✅ nạp data gốc

const ProductContext = createContext<any>(null);

function reducer(state: any, action: any) {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return state.filter((p: any) => p.id !== action.payload);
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "EDIT_PRODUCT":
      return state.map((p: any) =>
        p.id === action.payload.id ? action.payload : p
      );
    default:
      return state;
  }
}

export const ProductProvider = ({ children }: any) => {
  // ✅ Dữ liệu ban đầu là từ initialProducts
  const [products, dispatch] = useReducer(reducer, initialProducts);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
export const useProducts = () => useContext(ProductContext);

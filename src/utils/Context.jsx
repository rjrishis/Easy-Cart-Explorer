import React from 'react'
import { createContext,useState,useEffect } from 'react'
import Axios from "./Axios"

export const productContext = createContext();
const Context = (props) => {
  const [products,setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);
  // const getProducts = async ()=>{
  //   try {
  //     const {data} = await Axios("/products");
  //     setProducts(data);
    
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  // useEffect(()=>{
  //   getProducts();
  // },[])
  return (
    <productContext.Provider value={[products,setProducts]}>
      {props.children}
    </productContext.Provider>
  )
}

export default Context
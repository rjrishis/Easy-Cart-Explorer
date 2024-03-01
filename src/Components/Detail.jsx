import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../utils/Axios";
import Loading from "./Loading";
import { useContext } from "react";
import { productContext } from "../utils/Context";

const Detail = () => {
  const [prod, setProd] = useState(null);
  const [products, setProducts] = useContext(productContext);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  // const singleProduct = async ()=>{
  //   try {
  //     const {data} = await Axios(`/products/${id}`)
  //     setProd(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    if (!prod) {
      setProd(products.filter((p) => p.id == id)[0]);
    }
    // singleProduct()
  }, []);
  const deleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);  // Update the global state
    setProd(null);  // Update the local state
    localStorage.setItem('products', JSON.stringify(filteredProducts));
    navigate('/');
  };
  // useEffect(() => {
  //   if (prod === null) {
  //     navigate('/');
  //   }
  // }, [prod, navigate]);
  
  return prod ? (
    <div className="w-[70%] h-full m-auto flex items-center justify-between">
      <img className="w-[38%] h-[70%] ml-60" src={prod.image} alt="" />
      <div className="ml-10 content w-[50%]   flex flex-col gap-3">
        <h1 className="uppercase text-5xl">{prod.title}</h1>
        <h3 className="text-zinc-400">{prod.category}</h3>
        <h2 className="text-red-300">{prod.price}</h2>
        <p className="font-bold ">{prod.description}</p>
        <Link
          className="text-center border px-5 py-3 rounded border-blue-200 text-blue-300"
          to={`/edit/${prod.id}`}
        >
          Edit Product
        </Link>
        <button onClick={()=>deleteHandler(prod.id)} className="border px-5 py-3 rounded border-red-200 text-red-300">
          Delete Product
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Detail;

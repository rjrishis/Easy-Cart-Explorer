import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import Axios from "../utils/Axios";
const Home = () => {
  const [products] = useContext(productContext);
  // console.log(products)
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setfilteredProducts] = useState(null);
  const getProductsCategory = async () => {
    try {
      const { data } = await Axios(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if(!filteredProducts || category=="undefined") setfilteredProducts(products)
    if(category != 'undefined'){
      // getProductsCategory()
      setfilteredProducts(products.filter(p=>p.category==category))
    };
  }, [category,products]);
  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] flex flex-wrap pt-5 justify-center items-center ml-60">
        {filteredProducts&&filteredProducts.map((e, i) => (
          <Link
            key={e.id}
            to={`/detail/${e.id}`}
            className="card w-[18%] h-[30vh] border rounded shadow m-4 flex items-center flex-col  "
          >
            <div
              className="hover:scale-110 mb-2 w-[80%] h-[70%]  mt-4 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${e.image})` }}
            ></div>
            <h1 className="font-bold">{e.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;

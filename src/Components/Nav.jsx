import React from "react";
import { productContext } from "../utils/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(productContext);
  let distinct_Category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_Category = [...new Set(distinct_Category)];
  // console.log(distinct_Category);
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.6)`
  };
  // console.log(color());

  return (
    <nav className="w-[15%] h-screen bg-zinc-50 flex flex-col items-center pt-5 fixed">
      <a
        className="border px-5 py-3 rounded border-blue-200 text-blue-300 flex"
        href="/create"
      >
        ADD New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%] ">Category Filter</h1>
      <div className="w-[80%]">
        {distinct_Category.map((c, i) => (
          <Link key={i} to={`/?category=${c}`} className="flex items-center mb-3">
            <span style={{backgroundColor:color()}} className="rounded-full mr-2 w-[15px] h-[15px]  "></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

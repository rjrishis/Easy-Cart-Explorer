import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
const Edit = () => {
  const [products, setProducts] = useContext(productContext);
  const { id } = useParams();
  const [productt, setProductt] = useState({
    title:'',
    image:'',
    category:'',
    price:'',
    description:'',
  });
  //   const [title, setTitle] = useState("");
  //   const [image, setImage] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [description, setDescription] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setProductt(products.filter((p) => p.id == id)[0]);
  }, [id]);
  const changeHandler = (e)=>{
    setProductt({...productt ,[e.target.name]:e.target.value})
  }
  

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      productt.title.trim().length < 5 ||
      productt.image.trim().length < 5 ||
      productt.category.trim().length < 5 ||
      productt.price.trim().length < 1 ||
      productt.description.trim().length < 5
    ) {
      alert("Please fill all the fields");
      return;
    }
    console.log(productt);
    // const product = {
    //   id: nanoid(),
    //   title,
    //   image,
    //   category,
    //   price,
    //   description,
    // };
    // setProducts([...products, product]);
    // localStorage.setItem("products", JSON.stringify([...products, product]));
    // navigate("/");
     const pi = products.findIndex((p) => p.id == id);
     const copyData = [...products];
     copyData[pi] = {...products[pi],...productt}
     setProducts(copyData);
     localStorage.setItem("products", JSON.stringify(copyData));
     navigate("/");
  };
  return (
    <>
      <h1 className="absolute top-16 left-[19%] uppercase font-bold text-2xl">
        Add New product:
      </h1>

      <form
        className=" w-[70%] h-screen  m-auto flex flex-col items-center"
        onSubmit={submitHandler}
      >
        <input
          name="title"
          type="text"
          placeholder="     title"
          className="bg-zinc-200 text-black font-bold h-12 w-[90%] mt-[10%]"
          //   onChange={(e) => {
          //     setTitle(e.target.value);
          //   }}
          onChange={changeHandler}
          value={productt && productt.title}
        />
        <input
          name="image link"
          type="url"
          placeholder="     image"
          className="bg-zinc-200 text-black font-bold h-12 w-[90%] mt-5"
          //   onChange={(e) => {
          //     setImage(e.target.value);
          //   }}
          onChange={changeHandler}
          value={productt && productt.image}
        />
        <div className="w-full flex items-center justify-around">
          <input
            name="category"
            type="text"
            placeholder="     category"
            className="bg-zinc-200 text-black font-bold h-12 w-[40%] mt-5"
            // onChange={(e) => {
            //   setCategory(e.target.value);
            // }}
            onChange={changeHandler}
            value={productt && productt.category}
          />
          <input
            name="price"
            type="number"
            placeholder="     price"
            className="bg-zinc-200 text-black font-bold h-12 w-[40%] mt-5"
            // onChange={(e) => {
            //   setPrice(e.target.value);
            // }}
            onChange={changeHandler}
            value={productt && productt.price}
          />
        </div>
        <textarea
          name="description"
          id=""
          rows="10"
          placeholder="    description"
          className="w-[90%] mt-10 mb-0 m-auto bg-zinc-200 font-bold"
          //   onChange={(e) => {
          //     setDescription(e.target.value);
          //   }}
          onChange={changeHandler}
          value={productt && productt.description}
        ></textarea>
        <br />
        <button
          type="submit"
          className=" mt-1 w-[90%] border px-5 py-3 rounded border-blue-200 text-blue-300 flex"
        >
          ADD New Product
        </button>
      </form>
    </>
  );
};

export default Edit;

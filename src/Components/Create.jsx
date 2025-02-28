import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useContext(productContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ){
      alert("Please fill all the fields");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description
    }
      setProducts([...products, product]);
      localStorage.setItem('products', JSON.stringify([...products, product]));
      toast.success("product added successfully")

      navigate('/')
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
          type="text"
          placeholder="     title"
          className="bg-zinc-200 text-black font-bold h-12 w-[90%] mt-[10%]"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <input
          type="url"
          placeholder="     image link"
          className="bg-zinc-200 text-black font-bold h-12 w-[90%] mt-5"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
        />
        <div className="w-full flex items-center justify-around">
          <input
            type="text"
            placeholder="     category"
            className="bg-zinc-200 text-black font-bold h-12 w-[40%] mt-5"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
          />
          <input
            type="number"
            placeholder="     price"
            className="bg-zinc-200 text-black font-bold h-12 w-[40%] mt-5"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
        </div>
        <textarea
          name="description"
          id=""
          rows="10"
          placeholder="    description"
          className="w-[90%] mt-10 mb-0 m-auto bg-zinc-200 font-bold"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <br />
        <button
          type="submit"
          className=" mt-1 w-[90%] border px-5 py-3 rounded border-blue-200 text-blue-300 flex"
          href="/create"
        >
          ADD New Product
        </button>
      </form>
    </>
  );
};

export default Create;

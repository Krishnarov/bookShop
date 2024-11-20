import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Cards from "./cards";
import {Link} from 'react-router-dom'
import axios from 'axios'
function Courses() {
  const [book ,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{
       const res =await axios.get("http://localhost:4001/book");
       console.log(res.data);
       setBook(res.data);
       
      }catch (error){
        console.log(error);
        
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-16 pt-10 justify-center items-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Hero! :)</span>
          </h1>
          <p className="mt-3 md:mt-12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptates, eius corporis pariatur ut necessitatibus saepe illum
            numquam deleniti dolore tempora commodi ab voluptatum sit, ipsum
            quam beatae at repudiandae recusandae.
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards items={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;

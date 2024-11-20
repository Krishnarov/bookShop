import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../../public/list.json";
import Cards from "./cards";
import axios from "axios";
function Freebook() {
  const [freebook,setFreebook]=useState([])

  useEffect(()=>{
    const freebook_get=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/book")
        setFreebook(res.data.filter((i)=>i.category==='Free'));
        // console.log(freebook);
        
        
      }
      catch (error){
        console.log("error :",error);
        
      }
    }
    freebook_get()
  },[])
  // const filterlist = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white overflow-hidden">
        <div>
          <h1 className="text-xl font-semibold pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div>
        <Slider {...settings}>
          {freebook.map((item) => (
            <Cards items={item} key={item.id} />
          ))}
        </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;

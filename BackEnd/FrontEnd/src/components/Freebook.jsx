import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Cards from './Cards';
import axios from "axios"


function Freebook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () =>{
      try {
        const res = await axios.get("/book")
        console.log(res.data)
        const data = res.data.filter((data) => data.category === 'Free');
        setBook(data)
      } catch(error){
        console.log(error)
      }
    };
    getBook();
  
    
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3 ,
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
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:flex-row my-10">
        <div>
        <h1 className="text-2xl font-bold">
          Explore Free Programming Notes{' '}
          <span className="text-pink-500">Here!</span>
        </h1>
        <p>
          . . .
        </p>
        </div>
      <div className="slider-container mt-12">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id}/>
              
          ))}
        </Slider> 
      </div>
      </div>
    </>
  );
}

export default Freebook;

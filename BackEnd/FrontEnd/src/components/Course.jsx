import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import {Link}  from 'react-router-dom'
import axios from "axios"

function Course() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () =>{
      try {
        const res = await axios.get("/book")
        console.log(res.data)
        setBook(res.data)
      } catch(error){
        console.log(error)
      }
    };
    getBook();
  
    
  }, [])
  
  return(

  <>  
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">Welcome <span className="text-yellow-900"> dear :) </span> </h1>
        <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aliquam eos reprehenderit beatae eum unde cupiditate voluptates maiores mollitia magnam laboriosam, recusandae, dolore molestiae repudiandae. Ut voluptas sint molestias, vitae non sunt.</p>
        <Link to="/">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-2">Back</button>
        </Link>
        </div>  

        <div className=" mt-4 grid grid-cols-1 md:grid-cols-4">
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
  </>
  );
}

export default Course;

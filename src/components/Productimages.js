import React, { useState } from 'react'
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Productimages = ({images}) => {
    console.log(images);


    const [current , setCurrent] = useState(0);
    let  slideArray = images.slice(0,images.length/2);
    console.log(slideArray)

  return (
    <div className='flex'>

        <div className='flex flex-col'>
            {
                slideArray?.map((image,index) =>(
                   <div className='w-[100px] m-2' >
                     <img src={image} onClick={()=>setCurrent(index)}/>
                     </div>
                ))
            }
        </div>
        <div
        style={{
            backgroundImage : `url(${images[current]})`,
            backgroundSize : "cover",
            backgroundPosition: "center center"
        }}
        className="w-[200px] md:w-[400px] lg:h-[500px] duration-500 bg-red-100 ml-2"
        > </div>
        
    </div>
  )
}

export default Productimages
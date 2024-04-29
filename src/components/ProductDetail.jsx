import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faCartShopping,faEye} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
import productSliderBir from "/product-slider-1.jpg";
import productSliderIki from "/product-slider-2.jpg";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
function ProductDetail() {

     const slides=[
{
    url:productSliderBir,
    active: true
},{
    url:productSliderIki,
    active: false
},
    ];

    const[currentIndex, setCurrentIndex] =useState(0); 

const prevSlide=()=>{
const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}
const nextSlide=()=>{
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
}
const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex);
};
  return (
    <div className='w-full h-[598px] flex justify-center'>
    <div className='h-full w-[1050px] flex items-start'>
    <div className='w-full h-[550px] flex flex-row gap-7'>
        {/* ---------------------SLIDER----------------------- */}
        <div className='slider w-[510px] h-full flex flex-wrap gap-3'>
            <div className="relative w-[506px] h-[450px] bg-cover " style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        {/* Left arrow */}
      <div className="absolute text-white top-56 pl-7 cursor-pointer">
        <BsChevronCompactLeft size={50} onClick={prevSlide} />
      </div>
      {/* Right arrow */}
      <div className=" absolute text-white left-96 pl-10 top-56 cursor-pointer" >
        <BsChevronCompactRight onClick={nextSlide} size={50}/>
      </div>
            </div>
            {/* -------Küçük resimler------- */}
<div className='w-[219px] h-[75px] flex flex-row gap-5'>
    {slides.map((slide, slideIndex) => {
           return(
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`cursor-pointer ${slideIndex==currentIndex? "opacity-50" : "opacity-100"}`}>
                  <img className='w-[100px] h-[75px] object-fit' src={slide.url} alt="" />
                </div>
           ) 
          })}

</div>

        </div>

        <div className='w-[510px] h-[471px] bg-white flex flex-col py-3 px-8 gap-4'>
            <h1 className='font-semibold text-2xl'>Floating Phone</h1>

            <div className='flex flex-row gap-2 items-center'>
                <FontAwesomeIcon className='text-[#f3cd03] text-xl' icon={faStar} />
            <FontAwesomeIcon className='text-[#f3cd03] text-xl' icon={faStar} />
            <FontAwesomeIcon className='text-[#f3cd03] text-xl' icon={faStar} />
            <FontAwesomeIcon className='text-[#f3cd03] text-xl'  icon={faStar} />  
            <FontAwesomeIcon className='text-[#f3cd03] text-xl' icon={faStar} />  
            <span className='text-[#7b7b7b] text-base font-semibold'>10 Reviews</span>
            </div>

            <p className='font-bold text-3xl'>$1,139.33</p>
            <p className='font-semibold '><span className='text-[#7b7b7b]'>Availability :</span> <span className='text-[#28a8f0]'>In Stock</span></p>
            <p className='text-gray-500 pt-6'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <div className='border'></div>
            <div className="flex gap-2"><span className="bg-blue-500 rounded-full p-3"></span><span className="bg-green-800 rounded-full p-3"></span><span className="bg-orange-700 rounded-full p-3"></span><span className="bg-black rounded-full p-3"></span></div>
            <div className='flex flex-row gap-4'> 
            <button className='bg-blue-400 text-white rounded py-3 px-5 font-bold'>Select Options</button>
            <button className='border border-gray-300 rounded-full bg-white px-3 py-2'><FontAwesomeIcon icon={faHeart} className='text-xl'/></button>
            <button className='border border-gray-300 rounded-full bg-white px-3 py-2'><FontAwesomeIcon icon={faCartShopping} className='text-xl'/></button>
            <button className='border border-gray-300 rounded-full bg-white px-3 py-2'><FontAwesomeIcon icon={faEye} className='text-xl'/></button>
            
            </div>
        </div>

    </div>

    </div>

    </div>
  )
}

export default ProductDetail
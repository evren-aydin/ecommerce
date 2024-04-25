import shopHeroBir from "/shop-hero-1.jpg";
import shopHeroIki from "/shop-hero-2.png";
import {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {AiOutlineMinus } from "react-icons/ai";
function Slider() {
    
    // eslint-disable-next-line no-unused-vars
    const slides=[
{
    url:shopHeroIki
},{
    url:shopHeroBir
},
    ];
const[currentIndex, setCurrentIndex] =useState(0);
const prevSlide=()=>{
const isFirstSlide= currentIndex===0;
const newIndex= isFirstSlide ? slides.length -1 : currentIndex-1;
setCurrentIndex(newIndex);
}
const nextSlide=()=>{
    const isLastSlide = currentIndex===slides.length-1;
    const newIndex = isLastSlide?0:currentIndex+1;
    setCurrentIndex(newIndex);
}
const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex);
};
  return (
    <div className="w-full h-[709px] m-auto relative">
      <div className="relative w-full h-full bg-cover " style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        {/* Eklenen div */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <div className=" w-[1044px] h-[651px]  flex items-center">
            <div className="w-full h-[427px] flex flex-col gap-10 justify-center">
            <h2 className=" font-semibold text-white">SUMMER 2020</h2>
            <h1 className="text-white text-7xl font-bold w-[400px]">Vita Classic </h1>
            <h1 className="text-white text-7xl font-bold w-[400px]">Product</h1>
            <p className="text-white w-[360px] h-[160px] text-lg">We know how large object will act. We know how large object will act. We know</p>

            <div className="flex flex-row gap-10 items-center w-[380px]">
            <p className="text-white font-bold text-3xl">$16.48</p> 
            <button className="bg-green-500 text-white font-semibold text-xl p-3 w-[221px] rounded">ADD TO CARD</button>
            </div>
            </div>
          </div>
        </div>
        {/* Slider Navigasyonu */}
        <div className="flex top-4 justify-center py-2 pt-[570px] ">
          {slides.map((slide, slideIndex) => {
           return(
            <div key={slideIndex} onClick={() => goToSlide(slide)} className={`cursor-pointer  ${slideIndex==currentIndex?"text-white":"text-gray-300"}`}>
              <AiOutlineMinus size={70}/>
            </div>
           ) 
          })}
        </div>
      </div>
      {/* Left arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 p-4 text-white cursor-pointer">
        <BsChevronCompactLeft size={50} onClick={prevSlide} />
      </div>
      {/* Right arrow */}
      <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 p-4 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={50}/>
      </div>
    </div>
  );
}

export default Slider
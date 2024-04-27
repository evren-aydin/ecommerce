//import { Carousel } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faAngleDown,faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faUser,faHeart} from '@fortawesome/free-regular-svg-icons';
import { faInstagram,faYoutube,faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import shopHerobir from "/shop-hero-1.jpg";
import shopHeroIki from "/shop-hero-2.png";
import {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {AiOutlineMinus } from "react-icons/ai";
function Header() {
       
    // eslint-disable-next-line no-unused-vars
    const slides=[
{
    url:shopHerobir  
},{
    url:shopHeroIki
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
    <header>

        <div className="w-screen h-[58px] bg-[#252B42] flex items-center justify-around">
            
            <p className='text-white flex gap-10 items-center'><span><FontAwesomeIcon icon={faPhone} className='text-white'/>  (225) 555-0118</span>
            <span className='text-white'><FontAwesomeIcon icon={faEnvelope} className='text-white'/> michelle.rivera@example.com</span>
            </p>
            
            <p className='text-white '> Follow Us and get a chance to win 80% off </p>
            <div className='flex gap-3 items-center'>
                <p className='text-white '> Follow Us :
            
            </p>
            <a href=""><FontAwesomeIcon icon={faInstagram} className='text-white'/></a>
            <a href=""><FontAwesomeIcon icon={faYoutube} className='text-white'/></a>
            <a href=""><FontAwesomeIcon icon={faFacebook} className='text-white' /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} className='text-white'/></a>
            
            </div>
            
            
        </div>

        <div className="w-screen h-[78px] bg-[#ffffff] flex items-center gap-4">

            <h1 className='font-bold text-2xl pl-28 pr-36'>Bandage</h1>

            <div className='flex justify-between w-full'>
                
            
            <nav className='flex pt-1 gap-5 text-gray-500 font-semibold text-sm'>
                <Link to="/">Home</Link>
                <a href="">Shop <FontAwesomeIcon icon={faAngleDown} /></a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="">Pages</a>
            </nav>

            <nav className='pr-16 text-[#51b8f3] flex gap-5'>
            
            <a href='#'><FontAwesomeIcon icon={faUser} /> Login / Register</a>
            <a href='#'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            <a href='#'><FontAwesomeIcon icon={faCartShopping} /> 1</a>
            <a href='#'><FontAwesomeIcon icon={faHeart} /> 1</a>
            

            </nav>

            </div>

            
            

    </div>

        <div className="w-full h-[780px] m-auto relative">
      <div className="relative w-full h-full bg-cover " style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        {/* Eklenen div */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <div className=" w-[1044px] h-[651px]  flex items-center">
            <div className="w-full h-[427px] flex flex-col gap-8  justify-center">
            <h2 className=" font-semibold text-white">SUMMER 2020</h2>
            <h1 className="text-white text-6xl font-bold">NEW COLLECTION</h1>
            <p className="text-white w-[300px] h-[60px] text-lg">We know how large object will act. but things on a small scale.</p>
            <button className="bg-green-500 text-white font-semibold text-xl p-2 w-[221px] rounded-md">SHOP NOW</button></div>
          </div>
        </div>
        {/* Slider Navigasyonu */}
        <div className="flex top-4 justify-center py-2 pt-[700px] ">
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
    </header>
  )
}

export default Header
/* eslint-disable react/no-unescaped-entities */
import ProductCover from "/product-cover-5.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faEye,faStar,faDownload,faChartArea,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faHeart,faClock,faChartBar } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';

function ProductCard() {
  return (
    <div className="relative w-[348px] h-[704px] flex flex-col shadow-lg">
      
        
        <img className="" src={ProductCover} alt="" />
        <label className="absolute flex justify-start text-white bg-[#e74040] rounded px-3 mt-5 ml-4">Sale</label>
        <div className="absolute inset-0 flex items-center justify-center pb-44 gap-3">
        <FontAwesomeIcon icon={faHeart} className="bg-white rounded-full p-3"/>
        <FontAwesomeIcon icon={faCartShopping}  className="bg-white rounded-full p-3"/>
        <FontAwesomeIcon icon={faEye} className="bg-white rounded-full p-3" />
        </div>
        
      
    
    
    <div className="static w-[348px] h-[404px] ">
      <div className=" mx-7 my-7 flex flex-col gap-3">
      <p className="flex justify-between"><span className="text-[#23a6f0] font-bold">English Departement</span><span className=" rounded-full bg-black text-white py-1 px-2"><FontAwesomeIcon icon={faStar} className="text-yellow-500" /> 4.9 </span></p>
      <h1 className="text-black font-semibold">Graphic Design</h1>
      <p className="text-gray-500 w-[280px]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <p className="flex gap-2"><span className="text-gray-500"><FontAwesomeIcon icon={faDownload} /></span> <span className="font-semibold text-gray-600"> 15 Sales</span></p>
      <p className="flex gap-2"><span className="text-gray-400 font-bold text-lg">$16.48</span> <span className="text-green-800 font-bold text-lg"> $6.48</span></p>
      <p className="flex gap-2"><span className="bg-blue-500 rounded-full p-3"></span><span className="bg-green-800 rounded-full p-3"></span><span className="bg-orange-700 rounded-full p-3"></span><span className="bg-black rounded-full p-3"></span></p>
      <p className="flex gap-2">
      <span className="text-gray-500 font-light"><FontAwesomeIcon icon={faClock} className="text-blue-500" /> 22hr 30min</span> 
      <span className="text-gray-500 font-light"><FontAwesomeIcon className="text-orange-700" icon={faChartBar} /> 64 Lessons</span>
      <span className="text-gray-500 font-light"><FontAwesomeIcon className="text-green-700" icon={faChartArea} /> Progress</span>
      </p>
      <button className=" rounded-full p-3 w-[142px] bg-white text-blue-500 border-blue-500 border">Learn More <FontAwesomeIcon className="" icon={faAngleRight} /> </button>
      </div>
      
    </div>
    </div>
  )
}

export default ProductCard
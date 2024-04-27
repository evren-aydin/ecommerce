/* eslint-disable react/no-unescaped-entities */

import ContainerFluid from "../components/ContainerFluid";
import DesktopBlog from "../components/DesktopBlog";
import ProductCardMini from "../components/ProductCardMini";
import Slider from "../components/Slider";
import filter1 from "/filter1.png";
import filter2 from "/filter2.png";
import filter3 from "/filter3.png";
import filter4 from "/filter4.png";
function pageContent() {
  return (
    <>
    <div className="w-full h-[770px] relative flex justify-center bg-[#fafafa] sm:w-[414px] sm:h-[1850px]">

      <div className="static h-full w-[1050px] flex flex-col items-center justify-center gap-11 sm:w-[333px] sm:h-[1850px]">
        <div className="text-center flex flex-col gap-3 w-[607px] h-[62px]">
          <h1 className="font-bold text-2xl">EDITOR'S PICK</h1>
          <p className="text-gray-500 text-md">Problems trying to resolve the conflict between</p>
        </div>

        <div className="w-[1050px] h-[500px] flex flex-row gap-8 sm:w-[325px] sm:h-[1560px] sm:flex sm:flex-wrap">

        <div className="div1 w-[510px] h-full relative sm:w-[324px] sm:h-[500px]">
        <img src={filter1} alt=""  className="object-contain sm:w-full sm:h-full"/>
        <button className="font-bold bg-white px-14 py-2 absolute bottom-5 left-5">MEN</button>
        </div>
        <div className="div2 w-[240px] h-full relative sm:w-[324px] sm:h-[500px] sm:flex sm:justify-center">
        <img src={filter2} alt=""  className="object-contain"/>
        <button className="font-bold bg-white px-8 py-2 absolute bottom-5 left-5">WOMEN</button>
        </div>

        <div className="div3 w-[240px] h-full  flex flex-col gap-4 sm:w-[324px] sm:h-[500px] ">
        <div className="relative"><img src={filter3} alt="" className="object-contain"/><button className="font-bold bg-white px-5 py-2 absolute bottom-3 left-2">ACCESSORIES</button></div>
        <div className="relative"><img src={filter4} alt="" className="object-contain"/><button className="font-bold bg-white px-5 py-2 absolute bottom-3 left-2">KIDS</button></div>
        </div>

        </div>

      </div>
        

    </div>

    <div className="relative w-full h-[1652px] flex justify-center">
      <div className="static h-full w-[1124px]  flex flex-col justify-center items-center gap-14">
      <div className="h-[102px] w-[692px]  text-center flex flex-col gap-4">
      <p className="text-gray-500 font-light"> Featured Products</p>
      <p className="text-xl font-bold">BESTSELLER PRODUCT</p>
      <p className="text-sm text-gray-500">Problems trying to resolve the conflict between</p>

      </div>
      <div className="w-[1049px] h-[615px] flex flex-row gap-8">
      <ProductCardMini/>
      <ProductCardMini/>
      <ProductCardMini/>
      <ProductCardMini/>
      </div>
      <div className="w-[1049px] h-[615px] flex flex-row gap-8">
      <ProductCardMini/>
      <ProductCardMini/>
      <ProductCardMini/>
      <ProductCardMini/>

      </div>

      </div>
    </div>
    <Slider/>
    <ContainerFluid/>
    <DesktopBlog/>
    </>
  )
}

export default pageContent
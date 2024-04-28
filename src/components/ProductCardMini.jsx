import productMini from "/product-mini.png"
function ProductCardMini() {

  return (

    <div className="w-[238px] h-[615px] relative flex flex-col ">
        <img src={productMini} alt="" className="static"/>
        <div className="static w-[239px] h-[188px] flex flex-col gap-3 justify-center items-center">

            <h1 className="text-black font-bold">Graphic Design</h1>
            <h2 className="text-gray-400 text-sm font-bold">English Departement</h2>
            <p className="flex gap-2"><span className="text-gray-400 font-bold">$16.48</span> <span className="text-green-800 font-bold "> $6.48</span></p>
            <div className="flex gap-2"><div className="bg-blue-500 rounded-full w-4 h-4"></div><div className="bg-green-800 rounded-full w-4 h-4"></div><div className="bg-orange-700 rounded-full w-4 h-4 "></div><div className="bg-black rounded-full w-4 h-4"></div></div>
        </div>

    </div>
  )
}

export default ProductCardMini
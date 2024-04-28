import ProductCard from "./ProductCard";


function DesktopBlog() {
  return (
    <div className='relative w-full h-[1044px] flex justify-center sm:w-[414px] sm:h-[2500px] '>
      <div className="static h-full  w-[1050px] flex justify-center items-center flex-col gap-12 sm:w-[329px] sm:h-[2250px] sm:flex-col ">
        <div className="w-[692px] h-[134px] flex flex-col justify-center items-center text-center gap-3 sm:w-[300px] sm:h-[184px] ">
        <p className="text-[#36aef1] font-bold text-sm">Practice Advice</p>
        <h1 className="font-bold text-5xl">Featured Posts</h1>
        <p className="text-gray-500 w-[400px] sm:w-[280px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

        </div>

        <div className="w-[1045px] h-[704px] flex flex-row gap-2 sm:w-full sm:h-[1878px] sm:flex-col sm:items-center">

          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>


      </div>
      
    </div>
  )
}

export default DesktopBlog
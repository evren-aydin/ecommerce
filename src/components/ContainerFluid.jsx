import containerFluid from "/containerFluid.png";

function ContainerFluid() {
  return (
    <div className="w-full h-[692px] relative ">
        <div className="static px-20 flex flex-row gap-16 items-center">

            <img src={containerFluid} alt="" className="" />

        <div className="w-[573px] h-[326px]  flex flex-col gap-7">
        <h2 className="text-gray-500 font-semibold">SUMMER 2020</h2>
        <h1 className="font-bold text-5xl">Part of the Neural Universe</h1>
        <p className="w-[270px] text-gray-500">We know how large objects will act, but things on a small scale.</p>
        <div className="flex flex-row gap-4">
            <button className="rounded bg-[#2dc071]  w-[171px] h-[52px] text-white">BUY NOW</button>
            <button className="rounded-md bg-white w-[171px] h-[52px] text-[#2dc071] border border-[#2dc071]">READ MORE</button>
        </div>
        </div>
        </div>
        

    </div>
  )
}

export default ContainerFluid
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faBorderAll,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import ShopCard from "../components/ShopCard";
import Footer from "../layout/Footer";
import Clients from "../components/Clients";
import HeaderUst from "../components/HeaderUst.jsx";
import HeaderAlt from "../components/HeaderAlt.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { BounceLoader } from "react-spinners";
function ShopPage() {
  const [loading, setLoading] = useState(false);

  const topCategories = useSelector((store) => store.product.topCategories);
  const products = useSelector((store) => store.product.productList);
  //const total = useSelector((store) => store.product.total);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="relative min-h-screen">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <BounceLoader
            color={"#1b207d"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <HeaderUst />
          <HeaderAlt />
          <div className="w-full h-[92px] flex justify-center items-center sm:w-[414px] sm:h-[202px]">
            <div className="w-[1049px] h-[44px] flex justify-between items-center sm:w-full sm:h-[154px] sm:items-center sm:flex-col sm:py-4">
              <h1 className="font-bold text-2xl">Shop</h1>
              <p className="flex flex-row gap-3">
                <span className="font-bold">Home</span>
                <span className="text-gray-400">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>{" "}
                <span className="text-gray-400">Shop</span>
              </p>
            </div>
          </div>
          <div className="w-full h-[271px] flex justify-center sm:w-[414px] sm:h-[1628px]">
            <div className="w-[1088px] relative h-full items-start flex flex-row gap-3 sm:h-full sm:w-[333px] sm:justify-center sm:flex-col sm:items-center">
              {topCategories.map((category) => (
                <div key={category.id} className="relative">
                  <img
                    src={category.img}
                    alt={category.title}
                    className="sm:w-[332px] sm:h-[300px] h-[223px] w-[205px]"
                  />
                  <p className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    {category.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[98px] flex justify-center sm:w-[412px] sm:h-[216px] sm:justify-center sm:items-center">
            <div className="w-[1050px] h-full flex items-center sm:w-[252px] sm:h-[168px] ">
              <div className="w-full h-[50px] flex flex-row justify-between items-center sm:w-full sm:h-full sm:flex-col">
                <p className="text-gray-500 font-semibold">
                  Showing all 12 result
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <p className="text-gray-500 font-semibold">Views:</p>
                  <button className="p-2 border border-gray-200 rounded px-3">
                    <FontAwesomeIcon icon={faBorderAll} />
                  </button>
                  <button className="p-2 border border-gray-200 rounded px-3">
                    <FontAwesomeIcon icon={faListCheck} />
                  </button>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <button className="p-2 border border-gray-200 rounded px-3 text-gray-500">
                    Popularity <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  <button className="p-2 rounded-md px-5 bg-[#23a6f0] text-white font-bold">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1650px] flex justify-center sm:w-[414px] sm:h-[2200px] sm:justify-center ">
            <div className="h-full w-[1124px] flex flex-col p-4 gap-4 items-center sm:h-full sm:w-[328px] ">
              <div className="h-[488px] w-[1048px] flex flex-row gap-6 sm:w-full sm:h-[2000px] sm:flex-col sm:items-center">
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
              </div>
              <div className="h-[488px] w-[1048px] flex flex-row gap-6 sm:hidden">
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
              </div>
              <div className="h-[488px] w-[1048px] flex flex-row gap-6 sm:hidden">
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
              </div>
              <div className="Pagination w-[313px] h-[74px] sm:pt-12">
                <nav className="w-full h-full ">
                  <ul className="flex flex-row border rounded-md">
                    <li className="p-5 px-6 ">
                      <a href="#">First</a>
                    </li>
                    <li className="p-5 border">
                      <a href="#">1</a>
                    </li>
                    <li className="p-5 border">
                      <a href="#">2</a>
                    </li>
                    <li className="p-5 border">
                      <a href="#">3</a>
                    </li>
                    <li className="p-5 px-6">
                      <a href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <Clients />
          <Footer />
        </>
      )}
    </div>
  );
}

export default ShopPage;

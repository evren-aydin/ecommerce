import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProductDetail from "../components/ProductDetail";
import productFotoBir from "/product-page-foto-1.png";
import ShopCard from "../components/ShopCard";
import Clients from "../components/Clients";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function ProductDetailPage() {
  const { gender, categoryName, categoryId, productNameSlug, productId } =
    useParams();

  const productData = useSelector((store) => store.product.productList);
  const products = productData.products || [];

  const getProductsById = (id) => {
    return products.find((product) => product.id === parseInt(id));
  };
  const product = getProductsById(productId);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="w-full h-[33px] flex justify-center items-center sm:w-[414px] sm:h-[150px]">
        <div className="w-[1049px] h-[32px] flex justify-start items-center sm:w-full sm:h-[70px] sm:items-center sm:flex-col sm:py-4">
          <button onClick={goBack} className="flex flex-row gap-2 pt-4">
            <FontAwesomeIcon
              className=" text-2xl text-[#ce5454ef]"
              icon={faCircleLeft}
            />{" "}
            <span className="font-bold text-[#1B207D]">Back</span>
          </button>
        </div>
      </div>
      <div className="w-full h-[92px] flex justify-center items-center sm:w-[414px] sm:h-[150px]">
        <div className="w-[1049px] h-[44px] flex justify-start items-center sm:w-full sm:h-[70px] sm:items-center sm:flex-col sm:py-4">
          <p className="flex flex-row gap-3">
            <span className="font-bold">Home</span>
            <span className="text-gray-400">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>{" "}
            <span className="text-gray-400">Shop</span>
          </p>
        </div>
      </div>

      <ProductDetail product={product} />

      <div className="w-full h-[572px] flex flex-col gap-4 sm:w-[414px] sm:h-[1306px] sm:items-center">
        <div className="w-full h-[91px] flex justify-center items-center flex-col sm:w-full">
          <div className="h-[72px] w-[1051px] flex flex-row justify-center items-center gap-2 sm:w-full sm:gap-4">
            <p className="text-gray-500 py-3 px-5 sm:py-0 sm:px-0">
              Description
            </p>
            <p className="text-gray-500 py-3 px-5 sm:py-0 sm:px-0">
              Additional Information
            </p>
            <p className="text-gray-500 py-3 px-5 sm:py-0 sm:px-0">
              Reviews (0)
            </p>
          </div>
          <div className="border w-[1049px] "></div>
        </div>

        <div className="w-full h-[499px] flex justify-center sm:w-[332px] sm:h-[1275px] ">
          <div className="h-full w-[1056px] flex items-center sm:w-full sm:h-[1171px] ">
            <div className="w-full h-[427px] flex flex-row gap-7 sm:w-full sm:h-[1100px] sm:flex-col">
              <div className="w-[332px] h-[392px]">
                <img
                  src={productFotoBir}
                  className="shadow-md shadow-gray-400"
                  alt=""
                />
              </div>
              <div className="w-[332px] h-full flex flex-col gap-3">
                <h1 className="text-xl font-bold">the quick fox jumps over </h1>
                <p className="text-gray-500">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-gray-500">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-gray-500">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div className="w-[332px] h-[367px] flex flex-col gap-3">
                <h1 className="text-xl font-bold">the quick fox jumps over </h1>
                <p className="text-gray-500 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-gray-500 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-gray-500 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-gray-500 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  the quick fox jumps over the lazy dog
                </p>
                <h1 className="text-xl font-bold">the quick fox jumps over </h1>
                <p className="text-gray-500 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-gray-500 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-gray-500 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  the quick fox jumps over the lazy dog
                </p>
                <p className="text-gray-500 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faAngleRight} />
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1162px] flex justify-center sm:w-[414px] sm:h-[2200px] sm:justify-center bg-[#fafafa] ">
        <div className="h-full w-[1124px] flex flex-col p-4 gap-4  sm:h-full sm:w-[328px] bg-[#fafafa]">
          <h1 className="font-bold text-3xl pl-2 sm:text-xl sm:text-center">
            {" "}
            BESTSELLER PRODUCT
          </h1>
          <div className="border w-[1030px] ml-2 sm:w-[290px]"></div>
          <div className="h-[488px] w-[1048px] flex flex-row gap-6 sm:w-full justify-center sm:h-[2000px] sm:flex-col sm:items-center">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
          <div className="h-[488px] w-[1048px] flex flex-row gap-6 justify-center sm:hidden">
            <ShopCard />
            <ShopCard />
            <ShopCard />
            <ShopCard />
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
}

export default ProductDetailPage;

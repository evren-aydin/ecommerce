import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import productSliderIki from "/product-resim-2.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { setCart } from "../store/actions/shoppingCartActions";
function ProductDetail({ product }) {
  const slides = [
    {
      url: product.images[0]?.url,
      active: true,
    },
    {
      url: productSliderIki,
      active: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleShoppingClick = () => {
    const cartItem = {
      count: 1,
      checked: true,
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        store_id: product.store_id,
        category_id: product.category_id,
        rating: product.rating,
        sell_count: product.sell_count,
        images: product.images[0]?.url,
      },
    };
    dispatch(setCart(cartItem));
  };
  return (
    <div className="w-full h-[598px] flex justify-center bg-[#fafafa] sm:w-[414px] sm:h-[991px]">
      <div className="h-full w-[1050px] flex items-start bg-[#fafafa] sm:h-full sm:w-[348px]">
        <div className="w-full h-[550px] flex flex-row gap-7 sm:gap-28 bg-[#fafafa] sm:w-full sm:h-[895px] sm:items-center sm:flex-col sm:justify-center">
          {/* ---------------------SLIDER----------------------- */}
          <div className="slider w-[510px] h-full flex flex-wrap gap-3 sm:w-full sm:h-[394px] sm:pt-20 sm:pl-7">
            <div
              className="relative w-[506px] h-[450px] bg-cover bg-center flex items-center justify-center sm:w-full sm:h-[277px]"
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            >
              {/* Left arrow */}
              <div className="absolute text-blue top-1/2 left-3 transform -translate-y-1/2 cursor-pointer sm:left-2">
                <BsChevronCompactLeft size={50} onClick={prevSlide} />
              </div>
              {/* Right arrow */}
              <div className="absolute text-blue top-1/2 right-3 transform -translate-y-1/2 cursor-pointer sm:right-2">
                <BsChevronCompactRight onClick={nextSlide} size={50} />
              </div>
            </div>
            {/* -------Küçük resimler------- */}
            <div className="w-[219px] h-[75px] flex flex-row gap-5">
              {slides.map((slide, slideIndex) => {
                return (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`cursor-pointer ${
                      slideIndex == currentIndex ? "opacity-50" : "opacity-100"
                    }`}
                  >
                    <img
                      className="w-[100px] h-[75px] object-fit"
                      src={slide.url}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[510px] h-[471px] flex flex-col py-3 px-8 gap-4 bg-[#fafafa] sm:w-full sm:h-[471px]">
            <h1 className="font-semibold text-2xl sm:text-xl">
              {product.name}
            </h1>

            <div className="flex flex-row gap-2 items-center">
              <FontAwesomeIcon
                className="text-[#f3cd03] text-xl sm:text-lg"
                icon={faStar}
              />
              <FontAwesomeIcon
                className="text-[#f3cd03] text-xl sm:text-lg"
                icon={faStar}
              />
              <FontAwesomeIcon
                className="text-[#f3cd03] text-xl sm:text-lg"
                icon={faStar}
              />
              <FontAwesomeIcon
                className="text-[#f3cd03] text-xl sm:text-lg"
                icon={faStar}
              />
              <FontAwesomeIcon
                className="text-[#f3cd03] text-xl sm:text-lg"
                icon={faStar}
              />
              <span className="text-[#7b7b7b] text-base font-semibold">
                10 Reviews
              </span>
            </div>

            <p className="font-bold text-3xl sm:text-2xl">{product.price} ₺</p>
            <p className="font-semibold ">
              <span className="text-[#7b7b7b]">Availability :</span>{" "}
              <span className="text-[#28a8f0]">{product.stock}</span>
            </p>
            <p className="text-gray-500 pt-6 sm:pt-0 sm:text-sm">
              {product.description}. İncelemiş olduğunuz ürünün satış fiyatını
              satıcı belirlemektedir. kargonun bedava olup olmamasına ve
              ürünlerin hızlı teslimat ile teslim edilip edilememesine,
              ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır.15
              gün içinde ücretsiz iade.
            </p>
            <div className="border"></div>
            <div className="flex gap-2">
              <span className="bg-blue-500 rounded-full p-3"></span>
              <span className="bg-green-800 rounded-full p-3"></span>
              <span className="bg-orange-700 rounded-full p-3"></span>
              <span className="bg-black rounded-full p-3"></span>
            </div>
            <div className="flex flex-row gap-4 pt-10 sm:pt-0">
              <button className="bg-blue-400 text-white rounded py-3 px-5 font-bold sm:py-0 sm:px-8 sm:text-xs">
                Select Options
              </button>
              <button className="border border-gray-300 rounded-full bg-white px-3 py-2">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl sm:text-sm"
                />
              </button>
              <button
                onClick={handleShoppingClick}
                className="border border-gray-300 rounded-full bg-white px-3 py-2"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-xl sm:text-sm"
                />
              </button>
              <button className="border border-gray-300 rounded-full bg-white px-3 py-2">
                <FontAwesomeIcon icon={faEye} className="text-xl sm:text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

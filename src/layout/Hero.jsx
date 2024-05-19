import shopHerobir from "/shop-hero-1.jpg";
import shopHeroIki from "/shop-hero-2.png";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

function Hero() {
  // eslint-disable-next-line no-unused-vars
  const slides = [
    {
      url: shopHerobir,
    },
    {
      url: shopHeroIki,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <header>
      <div className="w-full h-[780px] m-auto relative sm:w-[412px] sm:h-[753px]">
        <div
          className="relative w-full h-full bg-cover"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        >
          {/* Eklenen div */}

          <div className="absolute top-0 left-0 w-full h-full flex justify-center sm:items-center">
            <div className=" w-[1044px] h-[651px] flex items-center mr-80 md:mr-0">
              <div className="w-full h-[427px] flex flex-col gap-8 justify-center sm:items-center sm:text-center">
                <h2 className=" font-semibold text-white text-xl">
                  SUMMER 2020
                </h2>
                <h1 className="text-white text-7xl font-bold sm:text-5xl">
                  NEW COLLECTION
                </h1>
                <p className="text-white w-[330px] h-[60px] text-xl">
                  We know how large object will act. but things on a small
                  scale.
                </p>
                <button className="bg-[#2dc071] text-white font-semibold text-xl p-3 w-[221px] rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          {/* Slider Navigasyonu */}
          <div className="flex top-4 justify-center py-2 pt-[700px] sm:hidden">
            {slides.map((slide, slideIndex) => {
              return (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slide)}
                  className={`cursor-pointer  ${
                    slideIndex == currentIndex ? "text-white" : "text-gray-300"
                  }`}
                >
                  <AiOutlineMinus size={70} />
                </div>
              );
            })}
          </div>
        </div>
        {/* Left arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 p-4 text-white cursor-pointer sm:left-0">
          <BsChevronCompactLeft size={50} onClick={prevSlide} />
        </div>
        {/* Right arrow */}
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 p-4 text-white cursor-pointer sm:right-0">
          <BsChevronCompactRight onClick={nextSlide} size={50} />
        </div>
      </div>
    </header>
  );
}

export default Hero;

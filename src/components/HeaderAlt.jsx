import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import md5 from "md5";
import { useState } from "react";

function HeaderAlt() {
  const user = useSelector((store) => store.client.user);
  const categories = useSelector((store) => store.product.categories);
  const email = user.email;

  const gravatarUrl =
    user && email ? `https://www.gravatar.com/avatar/${md5(email)}?s=100` : "";

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div>
      {/* sm: MOBIL VIEW */}
      <div className="sm:w-[414px] sm:h-[879px] sm:flex  sm:flex-col sm:items-center sm:gap-32">
        <div className="sm:h-[60px] sm:w-[414px] sm:flex sm:flex-row sm:justify-between sm:px-12 sm:items-center sm:pt-10">
          <h1 className="hidden sm:block font-bold text-2xl">Bandage</h1>

          <a className="hidden cursor-pointer sm:block sm:text-xl">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
        <div className="hidden sm:flex sm:w-[123px] font- sm:h-[270px] sm:flex-col sm:justify-center sm:items-center sm:gap-8">
          <a className="text-4xl text-gray-500 font-semibold ">Home</a>
          <a className="text-4xl text-gray-500 font-light ">Shop</a>
          <a className="text-4xl text-gray-500 font-semibold ">About</a>
          <a className="text-4xl text-gray-500 font-semibold ">Pricing</a>
          <a className="text-4xl text-gray-500 font-semibold ">Contact</a>
          <a className="text-4xl text-gray-500 font-semibold ">Team</a>
        </div>

        <nav className=" text-[#51b8f3] sm:flex-col sm:text-center sm:gap-8 sm:flex hidden">
          {Object.keys(user).length !== 0 ? (
            <div className="flex items-center gap-2">
              <img src={gravatarUrl} className="w-8 h-8 rounded-full" />
              <p className="text-2xl">{user.name}</p>
            </div>
          ) : (
            <>
              <Link to="/login" className="font-bold">
                <FontAwesomeIcon icon={faUser} />
                Login
              </Link>
              <p className="font-bold">/</p>
              <Link to="/signup" className="font-bold">
                Register
              </Link>
            </>
          )}
          <a href="#" className="text-4xl">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <a href="#" className="text-4xl">
            <FontAwesomeIcon icon={faCartShopping} /> 1
          </a>
          <a href="#" className="text-4xl">
            <FontAwesomeIcon icon={faHeart} /> 1
          </a>
        </nav>
      </div>
      {/* --------------------------------------------------- */}
      <div className="w-full h-[87px] justify-center flex items-center sm:hidden ">
        <div className="w-[1200px] h-[58px] flex items-center gap-40 pl-16 ">
          <h1 className="font-bold text-2xl">Bandage</h1>

          <nav className="flex pt-1 gap-5 text-gray-500 font-semibold text-sm items-center ">
            <Link to="/">Home</Link>
            {/* ------SHOP-------- */}
            <div className="flex items-center justify-center relative">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center bg-white "
                >
                  Shop
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute left-0 w-48 mt-2 bg-white border rounded shadow-lg z-50">
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <a
                            className="flex px-4 py-2 gap-4 text-gray-700 hover:bg-gray-100"
                            href={`/shop/${category.gender}/${category.title}`}
                          >
                            <img src={category.img} className="w-7 h-6" />
                            {category.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/team">Team</Link>
          </nav>

          <nav className=" text-[#51b8f3] flex gap-5">
            {Object.keys(user).length !== 0 ? (
              <>
                <img src={gravatarUrl} className="w-8 h-8 rounded-full" />
                <p>{user.name}</p>
              </>
            ) : (
              <>
                <Link to="/login" className="font-bold">
                  <FontAwesomeIcon icon={faUser} />
                  Login
                </Link>
                <p className="font-bold">/</p>
                <Link to="/signup" className="font-bold">
                  Register
                </Link>
              </>
            )}

            <a href="#">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faCartShopping} /> 1
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faHeart} /> 1
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderAlt;

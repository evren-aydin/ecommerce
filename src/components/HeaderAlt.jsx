import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
function HeaderAlt() {
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
          <a href="#" className="font-semibold text-4xl">
            <FontAwesomeIcon icon={faUser} /> Login / Register
          </a>
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
        <div className="w-[1100px] h-[58px] flex items-center gap-40 pl-6 ">
          <h1 className="font-bold text-2xl">Bandage</h1>

          <nav className="flex pt-1 gap-5 text-gray-500 font-semibold text-sm ">
            <Link to="/">Home</Link>
            <Link to="/shop">
              Shop <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/team">Team</Link>
          </nav>

          <nav className=" text-[#51b8f3] flex gap-5">
            <a href="#" className="font-bold">
              <FontAwesomeIcon icon={faUser} />
              Login
            </a>
            <p className="font-bold">/</p>
            <Link to="/signup" className="font-bold">
              Register
            </Link>
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

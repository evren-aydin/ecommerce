import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";

function HeaderDuz() {
  return (
    <div>
      <div className="w-[1332px]  h-[91px] flex flex-row items-center justify-center gap-32 sm:w-[414px] sm:h-[532px] sm:flex-col sm:bg-[#f6f6f6] sm:gap-20">
        <h1 className="font-mont font-bold text-2xl sm:px-8 sm:flex-row sm:flex sm:justify-between sm:w-[400px]">
          Bandage
          <span className="sm:flex sm:flex-row sm:gap-4 sm:text-gray-600">
            <a className="hidden cursor-pointer sm:block sm:text-xl">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a className="hidden cursor-pointer sm:block sm:text-xl">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a className="hidden cursor-pointer sm:block sm:text-xl">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </span>
        </h1>

        <div className="flex justify-between w-[815px] h-[58px] items-center sm:w-[123px] sm:h-[270px] sm:flex-col ">
          <nav className="text-gray-500 font-bold text-sm font-mont flex gap-6 sm:w-full sm:h-full sm:flex-col sm:text-3xl sm:text-center">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/team">Team</Link>
          </nav>

          <nav className="font-mont font-bold text-sm flex gap-10 items-center sm:hidden ">
            <a className="text-[#23a6f0] " href="">
              Login
            </a>
            <button className="text-white bg-[#23a6f0] py-4 px-7 flex gap-4 items-center rounded-md">
              Become a member <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderDuz;

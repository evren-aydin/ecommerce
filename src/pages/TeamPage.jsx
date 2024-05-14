import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import resim1 from "/teamPage/resim1.png";
import resim2 from "/teamPage/resim2.png";
import resim3 from "/teamPage/resim3.png";
import resim4 from "/teamPage/resim4.png";
import resim5 from "/teamPage/resim5.png";
import user4 from "/teamPage/user4.jpg";
import user5 from "/teamPage/user5.png";
import user6 from "/teamPage/user6.png";
import erhan from "/teamPage/erhan-hoca.jpg";
import gokhan from "/teamPage/gökhan-hoca.jpg";
import evren from "/teamPage/evren.jpg";
import Footer from "../layout/Footer";
import HeaderAlt from "../components/HeaderAlt";

function TeamPage() {
  return (
    <div>
      <div className="w-full h-[384px] gap-3 flex flex-col items-center bg-cover sm:w-[414px] sm:h-[800px] sm:object-fit">
        <HeaderAlt />
        <div className="w-[870px] h-[280px] flex justify-center items-center sm:w-[414px] sm:h-[200px] ">
          <div className="w-[788px] h-[180px] text-center font-mont flex flex-col items-center gap-8 sm:w-full sm:h-full">
            <p className="text-gray-500 font-semibold">WHAT WE DO</p>
            <h1 className="text-5xl font-bold sm:text-3xl">
              Innovation tailored for you
            </h1>
            <div className="flex flex-row font-semibold items-center gap-3">
              <p className="">Home</p>
              <FontAwesomeIcon className="text-gray-500" icon={faAngleRight} />
              <p className="text-gray-500">Team</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[530px] flex flex-row justify-center gap-2 sm:flex-col sm:w-[413px] sm:h-[1070px]">
        <div className="w-[700px] h-[530px] sm:w-full sm:h-[530px]">
          <img src={resim1} className="object-cover w-full h-full" alt="" />
        </div>

        <div className="w-[740px] h-[530px] flex flex-wrap gap-2 justify-center sm:grid sm:grid-cols-2 sm:w-full sm:h-[530px]">
          <img
            src={resim2}
            className="w-[361px] h-[260px] sm:w-[204px] sm:h-[260px] object-cover"
            alt=""
          />
          <img
            src={resim3}
            className="w-[361px] h-[260px] sm:w-[204px] sm:h-[260px] object-cover"
            alt=""
          />
          <img
            src={resim4}
            className="w-[361px] h-[260px] sm:w-[204px] sm:h-[260px] object-cover"
            alt=""
          />
          <img
            src={resim5}
            className="w-[361px] h-[260px] sm:w-[204px] sm:h-[260px] object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[1759px] flex justify-center sm:w-[414px] sm:h-[4180px]">
        <div className="h-full w-[1050px] flex flex-col items-center font-mont py-24 font-bold gap-28 sm:w-[361px] sm:h-full ">
          <h1 className="text-4xl sm:w-[250px] sm:text-center sm:text-5xl">
            Meet Our Team
          </h1>
          <div className="div1 flex flex-row w-[1034px] h-[383px] gap-9 justify-center sm:w-[329px] sm:h-[1394px] sm:flex-col sm:items-center">
            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={erhan} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Erhan Fırat</p>
                <p className="text-sm text-gray-500">Project Owner</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>

            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={gokhan} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Gökhan Özdemir</p>
                <p className="text-sm text-gray-500">Scrum Master</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>

            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={evren} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Evren Aydın</p>
                <p className="text-sm text-gray-500">Full Stack Developer</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
          <div className="div2  flex flex-row w-[1034px] h-[383px] gap-9 justify-center sm:w-[329px] sm:h-[1394px] sm:flex-col sm:items-center">
            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={user4} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Username</p>
                <p className="text-sm text-gray-500">Profession</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={user5} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Username</p>
                <p className="text-sm text-gray-500">Profession</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={user6} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Username</p>
                <p className="text-sm text-gray-500">Profession</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
          <div className="div3 flex flex-row w-[1034px] h-[383px] gap-9 justify-center sm:w-[329px] sm:h-[1394px] sm:flex-col sm:items-center">
            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={user6} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Username</p>
                <p className="text-sm text-gray-500">Profession</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={user5} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Username</p>
                <p className="text-sm text-gray-500">Profession</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
            <div className="Card w-[316px] h-[383px] flex flex-col gap-6 items-center ">
              <img src={user4} alt="" />
              <div className="flex flex-col gap-3 items-center">
                <p>Username</p>
                <p className="text-sm text-gray-500">Profession</p>
                <div className="flex flex-row gap-5 text-2xl text-[#23a6f0]">
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[442px] flex justify-center sm:w-[414px] sm:h-[586px]">
        <div className="h-full w-[1050px] flex justify-center items-center sm:w-[332px] sm:h-full">
          <div className="w-[607px] h-[282px] font-mont flex items-center flex-col justify-center text-center gap-8 sm:w-full sm:h-[352px]">
            <h1 className="text-4xl font-bold">
              Start your 14 days free trial
            </h1>
            <p className="text-gray-500 w-[410px] sm:w-[332px] font-semibold text-sm">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent.
            </p>
            <button className="py-4 px-8 text-white bg-blue-400 rounded-md font-bold">
              Try it free now
            </button>

            <div className="flex flex-row gap-9 text-3xl ">
              <a href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamPage;

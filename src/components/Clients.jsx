import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

function Clients() {
  return (
    <div>
      <div className="w-full h-[479px] flex items-center flex-col font-mont bg-[#FAFAFA] gap-12 justify-center sm:gap-0 sm:w-[414px] sm:h-[1444px]">
        <div className="w-[864px] h-[120px] flex flex-col gap-9 text-center items-center sm:w-[325px] sm:h-[240px]">
          <h1 className="text-4xl font-bold">Big Companies Are Here</h1>
          <p className="text-gray-500 w-[500px] sm:w-[300px] font-semibold text-sm">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="w-full h-[175px] flex justify-center bg-[#FAFAFA] sm:w-[414px] sm:h-[1000px] sm:items-center">
          <div className="h-full w-[1050px] flex flex-row justify-center items-center gap-16 sm:w-full sm:h-[952px] sm:flex-col">
            <FontAwesomeIcon
              className="text-gray-500 text-8xl"
              icon={faHooli}
            />
            <FontAwesomeIcon className="text-gray-500 text-8xl" icon={faLyft} />
            <FontAwesomeIcon
              className="text-gray-500 text-8xl"
              icon={faPiedPiperHat}
            />
            <FontAwesomeIcon
              className="text-gray-500 text-8xl"
              icon={faStripe}
            />
            <FontAwesomeIcon className="text-gray-500 text-8xl" icon={faAws} />
            <FontAwesomeIcon
              className="text-gray-500 text-8xl"
              icon={faRedditAlien}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function HeaderUst() {
  return (
    <div>
      <div className="w-screen h-[58px] bg-[#252b42] flex items-center justify-center gap-20 lm:hidden">
        <p className="text-white flex gap-10 items-center">
          <span>
            <FontAwesomeIcon icon={faPhone} className="text-white" /> (225)
            555-0118
          </span>
          <span className="text-white">
            <FontAwesomeIcon icon={faEnvelope} className="text-white" />
            michelle.rivera@example.com
          </span>
        </p>

        <p className="text-white font-bold">
          Follow Us and get a chance to win 80% off
        </p>
        <div className="flex gap-3 items-center">
          <p className="text-white font-bold"> Follow Us :</p>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} className="text-white" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faYoutube} className="text-white" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} className="text-white" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderUst;

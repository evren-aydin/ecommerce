//import { Carousel } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faAngleDown,faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faUser,faHeart} from '@fortawesome/free-regular-svg-icons';
import { faInstagram,faYoutube,faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';
import headerResim from "/col-md-6.png";
function Header() {
  return (
    <header>

        <div className="w-screen h-[58px] bg-[#252B42] flex items-center justify-around">
            
            <p className='text-white flex gap-10 items-center'><span><FontAwesomeIcon icon={faPhone} className='text-white'/>  (225) 555-0118</span>
            <span className='text-white'><FontAwesomeIcon icon={faEnvelope} className='text-white'/> michelle.rivera@example.com</span>
            </p>
            
            <p className='text-white '> Follow Us and get a chance to win 80% off </p>
            <div className='flex gap-3 items-center'>
                <p className='text-white '> Follow Us :
            
            </p>
            <a href=""><FontAwesomeIcon icon={faInstagram} className='text-white'/></a>
            <a href=""><FontAwesomeIcon icon={faYoutube} className='text-white'/></a>
            <a href=""><FontAwesomeIcon icon={faFacebook} className='text-white' /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} className='text-white'/></a>
            
            </div>
            
            
        </div>

        <div className="w-screen h-[78px] bg-[#ffffff] flex items-center gap-4">

            <h1 className='font-bold text-2xl pl-28 pr-36'>Bandage</h1>

            <div className='flex justify-between w-full'>
                
            
            <nav className='flex pt-1 gap-5 text-gray-500 font-semibold text-sm'>
                <a href="">Home</a>
                <a href="">Shop <FontAwesomeIcon icon={faAngleDown} /></a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="">Pages</a>
            </nav>

            <nav className='pr-16 text-[#51b8f3] flex gap-5'>
            
            <a href='#'><FontAwesomeIcon icon={faUser} /> Login / Register</a>
            <a href='#'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            <a href='#'><FontAwesomeIcon icon={faCartShopping} /> 1</a>
            <a href='#'><FontAwesomeIcon icon={faHeart} /> 1</a>
            

            </nav>

            </div>

            
            

    </div>

        <div className="relative w-screen h-[716px] bg-[#ffffff] flex justify-center items-center">
        <div className='static w-[1292px] h-[622px] rounded-xl bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] flex justify-center items-center pl-40'>

            <div className='static flex flex-col justify-around w-[548px] h-[316px]'>
                <p className='text-[#5caddc] font-bold'>SUMMER 2020</p>
                <h1 className='text-5xl font-extrabold'>NEW COLLECTION</h1>
                <p className='text-gray-500 w-[270px]'>We know how large objects will act. but things on a small scale.</p>
                <button className='w-48 text-white bg-[#23a6f0] px-7 py-3 rounded-md font-bold'>SHOP NOW</button>
            </div>

            <img src={headerResim} className='static' alt="" />
        </div>
        </div>
    </header>
  )
}

export default Header
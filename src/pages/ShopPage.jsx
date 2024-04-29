
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faAngleDown,faMagnifyingGlass,faCartShopping,faBars,faAngleRight,faBorderAll,faListCheck} from '@fortawesome/free-solid-svg-icons';
import { faUser,faHeart} from '@fortawesome/free-regular-svg-icons';
import { faInstagram,faYoutube,faFacebook,faTwitter,faHooli,faLyft,faPiedPiperHat, faStripe, faAws, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import shopHead from "/shop-head.png";
import ShopCard from '../components/ShopCard';
import Footer from '../layout/Footer';

function ShopPage() {

   
  return (
    <div> <div className="w-screen h-[58px] bg-[#23856d] flex items-center justify-center gap-20 lm:hidden">
            
            <p className='text-white flex gap-10 items-center'><span><FontAwesomeIcon icon={faPhone} className='text-white'/>  (225) 555-0118</span>
            <span className='text-white'><FontAwesomeIcon icon={faEnvelope} className='text-white'/> michelle.rivera@example.com</span>
            </p>
            
            <p className='text-white font-bold'> Follow Us and get a chance to win 80% off </p>
            <div className='flex gap-3 items-center'>
                <p className='text-white font-bold'> Follow Us :
            
            </p>
            <a href=""><FontAwesomeIcon icon={faInstagram} className='text-white'/></a>
            <a href=""><FontAwesomeIcon icon={faYoutube} className='text-white'/></a>
            <a href=""><FontAwesomeIcon icon={faFacebook} className='text-white' /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} className='text-white'/></a>
            
            </div>
            
            
        </div>
        {/* sm: MOBIL VIEW */}
      <div className='sm:w-[414px] sm:h-[879px] sm:flex  sm:flex-col sm:items-center sm:gap-32'>
        <div className='sm:h-[60px] sm:w-[414px] sm:flex sm:flex-row sm:justify-between sm:px-12 sm:items-center sm:pt-10'>
          <h1 className='hidden sm:block font-bold text-2xl'>Bandage</h1>
             
            <a className='hidden cursor-pointer sm:block sm:text-xl'><FontAwesomeIcon icon={faBars} /></a>

          
        </div>
         <div className='hidden sm:flex sm:w-[123px] font- sm:h-[270px] sm:flex-col sm:justify-center sm:items-center sm:gap-8'>
              <a  className="text-4xl text-gray-500 font-semibold ">Home</a>
              <a  className="text-4xl text-gray-500 font-light ">Shop</a>
              <a  className="text-4xl text-gray-500 font-semibold ">About</a>
              <a className="text-4xl text-gray-500 font-semibold ">Blog</a>
              <a className="text-4xl text-gray-500 font-semibold ">Contact</a>
              <a className="text-4xl text-gray-500 font-semibold ">Pages</a>

            </div>

            <nav className=' text-[#51b8f3] sm:flex-col sm:text-center sm:gap-8 sm:flex hidden'>
            
            <a href='#' className='font-semibold text-4xl'><FontAwesomeIcon icon={faUser} /> Login / Register</a>
            <a href='#' className='text-4xl'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            <a href='#' className='text-4xl'><FontAwesomeIcon icon={faCartShopping} /> 1</a>
            <a href='#' className='text-4xl'><FontAwesomeIcon icon={faHeart} /> 1</a>
            
            </nav>
      </div>
{/* --------------------------------------------------- */}
        <div className="w-full h-[87px] justify-center flex items-center sm:hidden">
            <div className='w-[1100px] h-[58px] flex item-center gap-44 pl-6'>

            <h1 className='font-bold text-2xl'>Bandage</h1>

            
            <nav className='flex pt-1 gap-5 text-gray-500 font-semibold text-sm '>
                <Link to="/">Home</Link>
                <Link className=" text-black font-normal"  to="/shop">Shop <FontAwesomeIcon icon={faAngleDown} /></Link>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
                <a href="">Pages</a>
            </nav>

            <nav className=' text-[#51b8f3] flex gap-5'>
            
            <a href='#' className='font-bold'><FontAwesomeIcon icon={faUser} /> Login / Register</a>
            <a href='#'><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
            <a href='#'><FontAwesomeIcon icon={faCartShopping} /> 1</a>
            <a href='#'><FontAwesomeIcon icon={faHeart} /> 1</a>
            
            </nav>

            </div>
            

    </div>
    <div className='w-full h-[92px] flex justify-center items-center sm:w-[414px] sm:h-[202px]'>
        <div className='w-[1049px] h-[44px] flex justify-between items-center sm:w-full sm:h-[154px] sm:items-center sm:flex-col sm:py-4'>
            <h1 className='font-bold text-2xl'>Shop</h1>
            <p className='flex flex-row gap-3'><span className='font-bold'>Home</span><span className='text-gray-400'><FontAwesomeIcon icon={faAngleRight} /></span> <span className='text-gray-400'>Shop</span></p>
        </div>

    </div>

    <div className='w-full h-[271px] flex justify-center sm:w-[414px] sm:h-[1628px]'>
        <div className='w-[1088px] h-full items-start flex flex-row gap-3 sm:h-full sm:w-[333px] sm:justify-center sm:flex-col sm:items-center'>
        <img src={shopHead} className='sm:w-[332px] sm:h-[300px]' alt="" />
        <img src={shopHead} className='sm:w-[332px] sm:h-[300px]' alt="" />
        <img src={shopHead} className='sm:w-[332px] sm:h-[300px]' alt="" />
        <img src={shopHead} className='sm:w-[332px] sm:h-[300px]' alt="" />
        <img src={shopHead} className='sm:w-[332px] sm:h-[300px]' alt="" />
        </div>
    </div>
    <div className='w-full h-[98px] flex justify-center sm:w-[412px] sm:h-[216px] sm:justify-center sm:items-center'>
        <div className='w-[1050px] h-full flex items-center sm:w-[252px] sm:h-[168px] '>
            <div className='w-full h-[50px] flex flex-row justify-between items-center sm:w-full sm:h-full sm:flex-col'>
                <p className='text-gray-500 font-semibold'>Showing all 12 result</p>
                <div className='flex flex-row gap-4 items-center'>
                    <p className='text-gray-500 font-semibold'>Views:</p>
                    <button className='p-2 border border-gray-200 rounded px-3'><FontAwesomeIcon icon={faBorderAll} /></button>
                    <button className='p-2 border border-gray-200 rounded px-3'><FontAwesomeIcon icon={faListCheck} /></button>
                </div>
                <div className='flex flex-row gap-4 items-center'>

                    <button className='p-2 border border-gray-200 rounded px-3 text-gray-500'>Popularity <FontAwesomeIcon icon={faAngleDown} /></button>
                    <button className='p-2 rounded-md px-5 bg-[#23a6f0] text-white font-bold'>Filter</button>
                </div>
            </div>
        </div>
    </div>
    <div className='w-full h-[1650px] flex justify-center sm:w-[414px] sm:h-[2200px] sm:justify-center '>
        <div className='h-full w-[1124px] flex flex-col p-4 gap-4 items-center sm:h-full sm:w-[328px] '>
            <div className='h-[488px] w-[1048px] flex flex-row gap-6 sm:w-full sm:h-[2000px] sm:flex-col sm:items-center'>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
            </div>
            <div className='h-[488px] w-[1048px] flex flex-row gap-6 sm:hidden'>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
            </div>
            <div className='h-[488px] w-[1048px] flex flex-row gap-6 sm:hidden'>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
            </div>
            <div className='Pagination w-[313px] h-[74px] sm:pt-12'>
                <nav className='w-full h-full '>
                    <ul className='flex flex-row border rounded-md'>
                        <li className='p-5 px-6 '>
                            <a href="#">First</a>
                        </li>
                        <li className='p-5 border'>
                            <a href="#">1</a>
                        </li>
                        <li className='p-5 border'>
                            <a href="#">2</a>
                        </li>
                        <li className='p-5 border'>
                            <a href="#">3</a>
                        </li>
                        <li className='p-5 px-6'>
                            <a href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </div>
    <div className='w-full h-[175px] flex justify-center bg-[#FAFAFA] sm:w-[414px] sm:h-[1173px] sm:items-center'>
        <div className='h-full w-[1050px] flex flex-row justify-center items-center gap-16 sm:w-full sm:h-[952px] sm:flex-col'>
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faHooli} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faLyft} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faPiedPiperHat} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faStripe} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faAws} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faRedditAlien} />
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ShopPage
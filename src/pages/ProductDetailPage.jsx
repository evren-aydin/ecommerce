
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faAngleDown,faMagnifyingGlass,faCartShopping,faBars,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faUser,faHeart} from '@fortawesome/free-regular-svg-icons';
import { faInstagram,faYoutube,faFacebook,faTwitter ,faHooli,faLyft,faPiedPiperHat, faStripe, faAws, faRedditAlien} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ProductDetail from "../components/ProductDetail"
import productFotoBir from "/product-page-foto-1.png";
import ShopCard from '../components/ShopCard';
import Footer from '../layout/Footer';
function ProductDetailPage() {
  return (
    <div>
        
    <div className="w-screen h-[58px] bg-[#23856d] flex items-center justify-center gap-20 lm:hidden">
            
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
                <Link to="/contact">Contact</Link>
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
    <div className='w-full h-[92px] flex justify-center items-center sm:w-[414px] sm:h-[150px]'>
        <div className='w-[1049px] h-[44px] flex justify-start items-center sm:w-full sm:h-[70px] sm:items-center sm:flex-col sm:py-4'>
            
            <p className='flex flex-row gap-3'><span className='font-bold'>Home</span><span className='text-gray-400'><FontAwesomeIcon icon={faAngleRight} /></span> <span className='text-gray-400'>Shop</span></p>
        </div>

    </div>

    <ProductDetail/>

    <div className='w-full h-[572px] flex flex-col gap-4 sm:w-[414px] sm:h-[1306px] sm:items-center'>
            <div className='w-full h-[91px] flex justify-center items-center flex-col sm:w-full'>
                <div className='h-[72px] w-[1051px] flex flex-row justify-center items-center gap-2 sm:w-full sm:gap-4'>
                    <p className='text-gray-500 py-3 px-5 sm:py-0 sm:px-0'>Description</p>
                    <p className='text-gray-500 py-3 px-5 sm:py-0 sm:px-0'>Additional Information</p>
                    <p className='text-gray-500 py-3 px-5 sm:py-0 sm:px-0'>Reviews (0)</p>
                    
                </div>
                <div className='border w-[1049px] '></div>
            </div>
            
            <div className='w-full h-[499px] flex justify-center sm:w-[332px] sm:h-[1275px] '>
                
                <div className='h-full w-[1056px] flex items-center sm:w-full sm:h-[1171px] '>
                    
                    <div className='w-full h-[427px] flex flex-row gap-7 sm:w-full sm:h-[1100px] sm:flex-col'>
                        <div className='w-[332px] h-[392px]'>
                            <img src={productFotoBir} className='shadow-md shadow-gray-400' alt="" />
                        </div>
                        <div className='w-[332px] h-full flex flex-col gap-3'>
                        <h1 className='text-xl font-bold'>the quick fox jumps over </h1>
                        <p className='text-gray-500'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className='text-gray-500'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className='text-gray-500'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                        </div>
                        <div className='w-[332px] h-[367px] flex flex-col gap-3'>
                        <h1 className='text-xl font-bold'>the quick fox jumps over </h1>
                        <p className='text-gray-500 flex gap-3 items-center'><FontAwesomeIcon icon={faAngleRight} />the quick fox jumps over the lazy dog</p>
                        <p className='text-gray-500 flex gap-3 items-center'><FontAwesomeIcon icon={faAngleRight} />the quick fox jumps over the lazy dog</p>
                        <p className='text-gray-500 flex gap-3 items-center'><FontAwesomeIcon icon={faAngleRight} />the quick fox jumps over the lazy dog</p>
                        <p className='text-gray-500 flex gap-3 items-center'><FontAwesomeIcon icon={faAngleRight} />the quick fox jumps over the lazy dog</p>
                        <h1 className='text-xl font-bold'>the quick fox jumps over </h1>
                        <p className='text-gray-500 flex gap-3 items-center'><FontAwesomeIcon icon={faAngleRight} />the quick fox jumps over the lazy dog</p>
                        <p className='text-gray-500 flex gap-3 items-center'><FontAwesomeIcon icon={faAngleRight} />the quick fox jumps over the lazy dog</p>
                        <p className='text-gray-500 flex gap-3 items-center'><FontAwesomeIcon icon={faAngleRight} />the quick fox jumps over the lazy dog</p>
                        <p className='text-gray-500 flex gap-3 items-center'><FontAwesomeIcon icon={faAngleRight} />the quick fox jumps over the lazy dog</p>
                        </div>

                    </div>
                </div>
            </div>


    </div>

<div className='w-full h-[1162px] flex justify-center sm:w-[414px] sm:h-[2200px] sm:justify-center bg-[#fafafa] '>
        <div className='h-full w-[1124px] flex flex-col p-4 gap-4  sm:h-full sm:w-[328px] bg-[#fafafa]'>
            <h1 className='font-bold text-3xl pl-2 sm:text-xl sm:text-center'> BESTSELLER PRODUCT</h1>
            <div className='border w-[1030px] ml-2 sm:w-[290px]'></div>
            <div className='h-[488px] w-[1048px] flex flex-row gap-6 sm:w-full justify-center sm:h-[2000px] sm:flex-col sm:items-center'>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
            </div>
            <div className='h-[488px] w-[1048px] flex flex-row gap-6 justify-center sm:hidden'>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
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

export default ProductDetailPage
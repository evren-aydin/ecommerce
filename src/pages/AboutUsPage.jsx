import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong,  faBars, faCartShopping,  faMagnifyingGlass,} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faAws, faFacebook, faHooli, faInstagram, faLyft, faPiedPiperHat, faRedditAlien, faStripe, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import AbourUsBackground from "/AboutUs_background.png";

import Footer from '../layout/Footer';
import video from "/video.mp4";
import erhan from "/teamPage/erhan-hoca.jpg";
import gokhan from "/teamPage/gökhan-hoca.jpg";
import evren from "/teamPage/evren.jpg";
import aboutResim from "/aboutUsResim.png";
import aboutSm from "/about-sm-resim.png";
function AboutUsPage() {
  return (
    <div>
        
        <div className="w-full h-[882px] gap-3 flex flex-col items-center bg-contain sm:bg-cover sm:w-[414px] sm:h-[1450px] sm:object-fit" style={{ backgroundImage: `url(${AbourUsBackground})`}}>

            <div className="w-[1332px] h-[91px] flex flex-row items-center justify-center gap-32 sm:w-[414px] sm:h-[532px] sm:flex-col sm:bg-[#f6f6f6] sm:gap-20">

                <h1 className="font-mont font-bold text-2xl sm:px-8 sm:flex-row sm:flex sm:justify-between sm:w-[400px]">Bandage
                <span className='sm:flex sm:flex-row sm:gap-4 sm:text-gray-600'><a className='hidden cursor-pointer sm:block sm:text-xl'><FontAwesomeIcon icon={faMagnifyingGlass}  /></a>
            <a className='hidden cursor-pointer sm:block sm:text-xl'><FontAwesomeIcon icon={faCartShopping} /></a>
            <a className='hidden cursor-pointer sm:block sm:text-xl'><FontAwesomeIcon icon={faBars} /></a></span>
                
                </h1>
                
                <div className="flex justify-between w-[815px] h-[58px] items-center sm:w-[123px] sm:h-[270px] sm:flex-col ">
                <nav className="text-gray-500 font-bold text-sm font-mont flex gap-6 sm:w-full sm:h-full sm:flex-col sm:text-3xl sm:text-center">
                    <Link to="/">Home</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <nav className="font-mont font-bold text-sm flex gap-10 items-center sm:hidden ">
                    <a className="text-[#23a6f0] " href="">Login</a>
                    <button className="text-white bg-[#23a6f0] py-4 px-7 flex gap-4 items-center rounded-md">Become a member <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </nav>
                </div>
            </div>
            <div className='w-[1050px] h-[742px] flex items-center sm:w-[418px] sm:h-[1080px]  sm:items-start'>

                <div className='w-[1044px] h-[518px] flex flex-row gap-8 items-center sm:w-full sm:h-[1071] sm:flex-col sm:pt-20 '>
                    <div className='w-[599px] h-full font-mont flex flex-col gap-10 sm:w-[417px] sm:h-[590px] sm:items-center sm:text-center'>
                    <p className='font-bold text-xl' >ABOUT COMPANY</p>
                    <h1 className='font-bold text-6xl'>ABOUT US</h1>
                    <p className='text-gray-500 w-[400px] h-[60px] font-semibold text-xl'>We know how large objects will act, but things on a small scale</p>
                    <button className='text-white bg-[#23a6f0] py-4 px-8 font-bold rounded-md w-[200px]'>Get Quote Now</button>
                    </div>
                    <div className='w-[415px] h-[280px] sm:w-[387px] sm:h-[440px]'>
                        <img src={aboutSm} className='hidden sm:block' alt="" />
                    </div>
                </div>
            </div>

        </div>
        <div className='w-full h-[236px] flex justify-center items-center font-mont sm:w-[414px] sm:h-[500px] '>
            <div className='w-[1018px] h-[188px] flex flex-row  gap-32 sm:gap-4 items-center sm:h-full sm:w-[381px] sm:flex-col sm:justify-center'>
                <div className='flex gap-10 flex-col w-[700px] sm:w-full sm:h-[220px] sm:text-center'>
                    <p className='text-red-500 text-sm font-semibold'>Problems trying</p>
                    <h1 className='text-2xl font-bold'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
                    </div>
                <p className='text-gray-500 sm:w-[380px] '>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
        </div>
        <div className='w-full h-[264px] flex justify-center font-mont sm:w-[414px] sm:h-[1006px] sm:items-center'>
            <div className='h-full w-[1050px] flex items-center sm:w-[329px] sm:h-[806px] sm:justify-center'>
                <div className='w-full h-[104px] flex flex-row gap-7 sm:w-[241px] sm:h-[716px] sm:flex-col sm:gap-28'>
                    <div className='w-[238px] h-[104px]  flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-5xl font-bold'>15K</h1>
                        <p className='font-bold text-sm text-gray-500'>Happy Customers</p>
                    </div>
                    <div className='w-[238px] h-[104px]  flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-5xl font-bold'>150K</h1>
                        <p className='font-bold text-sm text-gray-500'>Monthly Visitors</p>
                    </div>
                    <div className='w-[238px] h-[104px]  flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-5xl font-bold'>15</h1>
                        <p className='font-bold text-sm text-gray-500'>Countries  Worldwide</p>
                    </div>
                    <div className='w-[238px] h-[104px]  flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-5xl font-bold'>100+</h1>
                        <p className='font-bold text-sm text-gray-500'>Top Partners</p>
                    </div>
                    
                </div>

            </div>
        </div>
            <div className='w-full h-[764px] flex justify-center sm:w-[414px] sm:h-[350px] sm:items-center '>
                <div className='h-full w-[1050px] flex justify-center items-center sm:w-[307px] sm:h-[316px]'>
                    <div className='w-[989px] h-[540px] sm:w-full sm:h-full sm:pt-20'>
                        <iframe className="w-full  aspect-video rounded-3xl " src={video}></iframe>
                    </div>
                </div>
            </div>
            <div className='w-full h-[826px] flex justify-center sm:w-[414px] sm:h-[1627px]'>
                <div className='h-full w-[1050px] font-mont flex justify-center flex-col items-center text-center gap-32 sm:gap-0 sm:h-full sm:w-[361px]'>
                    <div className='w-[607px] h-[100px] flex flex-col items-center gap-4 sm:w-full sm:h-[100px]'>
                        <h1 className='font-bold text-4xl'>Meet Our Team</h1>
                        <p className='w-[350px] text-gray-500 font-semibold text-sm'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className='div1 flex flex-row w-[1034px] h-[383px] gap-9 justify-center font-bold sm:w-[329px] sm:h-[1394px] sm:flex-col sm:items-center'>
                    <div className='Card w-[316px] h-[383px] flex flex-col gap-6 items-center '>
                    <img src={erhan} alt="" />
                    <div className='flex flex-col gap-3 items-center'>
                    <p>Erhan Fırat</p>
                    <p className='text-sm text-gray-500'>Project Owner</p>
                    <div className='flex flex-row gap-5 text-2xl text-[#23a6f0]'>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    </div>
                    
                    </div>

                    <div className='Card w-[316px] h-[383px] flex flex-col gap-6 items-center '>
                    <img src={gokhan} alt="" />
                    <div className='flex flex-col gap-3 items-center'>
                    <p>Gökhan Özdemir</p>
                    <p className='text-sm text-gray-500'>Scrum Master</p>
                    <div className='flex flex-row gap-5 text-2xl text-[#23a6f0]'>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    </div>
                    
                    </div>

                    <div className='Card w-[316px] h-[383px] flex flex-col gap-6 items-center '>
                    <img src={evren} alt="" />
                    <div className='flex flex-col gap-3 items-center'>
                    <p>Evren Aydın</p>
                    <p className='text-sm text-gray-500'>Full Stack Developer</p>
                    <div className='flex flex-row gap-5 text-2xl text-[#23a6f0]'>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
            <div className='w-full h-[479px] flex items-center flex-col font-mont gap-7 sm:gap-0 sm:w-[414px] sm:h-[1444px]'>
                <div className='w-[864px] h-[120px] flex flex-col gap-9 text-center items-center sm:w-[325px] sm:h-[240px]'>

                    <h1 className='text-4xl font-bold'>Big Companies Are Here</h1>
                    <p className='text-gray-500 w-[500px] sm:w-[300px] font-semibold text-sm'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>


                </div>
            <div className='w-full h-[175px] flex justify-center bg-[#FAFAFA] sm:w-[414px] sm:h-[1000px] sm:items-center'>
        <div className='h-full w-[1050px] flex flex-row justify-center items-center gap-16 sm:w-full sm:h-[952px] sm:flex-col'>
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faHooli} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faLyft} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faPiedPiperHat} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faStripe} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faAws} />
            <FontAwesomeIcon className='text-gray-500 text-8xl' icon={faRedditAlien} />
        </div>
    </div>
    </div>
    <div className='w-full h-[636px] font-mont flex relative justify-center sm:w-[414px] sm:h-[520px] sm:items-center sm:bg-[#2a7cc7]'>
        <div className='absolute  w-[1050px] h-full flex items-center sm:w-full sm:h-[388px] sm:justify-center'>
            <div className='w-full h-[412px]  flex flex-row sm:flex-col items-center gap-16 sm:w-[272px] sm:h-[328px]'>
                <div className='w-[438px] h-[238px] flex flex-col justify-center gap-7 text-white sm:w-full sm:h-full sm:text-center sm:items-center'>
                    <p>WORK WITH US</p>
                    <h1 className='font-bold text-4xl'>Now Let’s grow Yours</h1>
                    <p className='text-sm'>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                    <button className='border w-[150px] py-3  border-white rounded-md text-white font-bold'>Button</button>
                </div>
                <div className='w-[548px] h-full  sm:hidden'></div>
            </div>

        </div>

    <div className='w-3/5 bg-[#2a7cc7] sm:w-full sm:hidden'></div>
    <div className='w-2/5 sm:hidden'>
        {/* Rasgele resim eklemek için bir resim URL'i kullanabilirsiniz */}
        <img src={aboutResim} className='w-full h-full object-cover' alt='Random Image' />
    </div>
</div>

        <Footer/>
    </div>
  )
}

export default AboutUsPage
/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong, faArrowTurnDown, faBars, faCartShopping, faEnvelope, faLocationDot, faMagnifyingGlass, faPhone} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import contactArkaplan from "/contact-background.png";
import smResim from "/sm-contact.png";
import Footer from '../layout/Footer';

function ContactPage() {
  return (
    <div>

        <div className="w-full h-[882px] gap-3 flex flex-col items-center bg-cover sm:w-[414px] sm:h-[1616px] sm:object-fit" style={{ backgroundImage: `url(${contactArkaplan})`}}>

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

                <div className='w-[1044px] h-[518px] flex flex-row gap-8 items-center sm:w-full sm:h-[1071] sm:flex-col  '>
                    <div className='w-[599px] h-full font-mont flex flex-col gap-10 sm:w-[417px] sm:h-[590px] sm:items-center sm:text-center'>
                    <p className='font-bold text-xl' >CONTACT US</p>
                    <h1 className='font-bold text-6xl'>Get in touch today!</h1>
                    <p className='text-gray-500 w-[300px] h-[60px]'>We know how large objects will act, but things on a small scale</p>
                    <p className='font-bold text-2xl'>Phone ; +451 215 215 </p>
                    <p className='font-bold text-2xl'>Fax : +451 215 215</p>
                    <div className='flex flex-row gap-6 text-3xl'>
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    </div>
                    <div className='w-[415px] h-[280px] sm:w-[387px] sm:h-[440px]'>
                        <img src={smResim} className='hidden sm:block' alt="" />
                    </div>
                </div>
            </div>

        </div>
        <div className='w-full h-[814px] flex justify-center font-mont font-bold text-center sm:w-[414px] sm:h-[1531px]'>
            <div className='h-full w-[1050px] flex flex-col gap-20 justify-center items-center sm:w-[330px] sm:h-[1453px]'>

                <div className='w-[633px] h-[134px] flex flex-col items-center justify-center gap-7 sm:w-[310px] sm:h-[184px]'>
                <p>VISIT OUR OFFICE</p>
                <p className='text-4xl w-[500px] sm:w-full'>We help small businesses with big ideas</p>
                </div>
                <div className='w-[985px] h-[403px] flex flex-row items-center sm:w-[329px] sm:h-[1119px] sm:flex-col sm:pl-5 '>
                    <div className='div1 w-[328px] h-[343px] flex flex-col items-center justify-center gap-5'>
                    <FontAwesomeIcon className='text-[#23a6f0] text-6xl' icon={faPhone} />
                    <p>georgia.young@example.com</p>
                    <p> georgia.young@ple.com</p>
                    <p className='text-xl'>Get Support</p>
                    <button className='text-[#23a6f0] bg-white rounded-full py-4 px-8 border border-[#23a6f0]'>Submit Request</button>
                    </div>
                    <div className='div2 w-[329px] h-[403px] flex flex-col items-center justify-center gap-5 bg-[#252b42]'>
                        <FontAwesomeIcon className='text-[#23a6f0] text-6xl' icon={faLocationDot} />
                    <p className='text-white'>georgia.young@example.com</p>
                    <p className='text-white'> georgia.young@ple.com</p>
                    <p className='text-xl text-white'>Get Support</p>
                    <button className='text-[#23a6f0] bg-[#252b42] rounded-full py-4 px-8 border border-[#23a6f0]'>Submit Request</button>
                    </div>
                    <div className='div3 w-[328px] h-[343px] flex flex-col items-center justify-center gap-5'>
                        <FontAwesomeIcon className='text-[#23a6f0] text-6xl' icon={faEnvelope} />
                    <p>georgia.young@example.com</p>
                    <p> georgia.young@ple.com</p>
                    <p className='text-xl'>Get Support</p>
                    <button className='text-[#23a6f0] bg-white rounded-full py-4 px-8 border border-[#23a6f0]'>Submit Request</button>
                    </div>
                </div>
            </div>

        </div>

        <div className='w-full h-[348px] flex justify-center font-mont '>
            <div className='h-full w-[1050px] flex items-center flex-col gap-10'>

                <FontAwesomeIcon className='text-6xl text-[#23a6f0]' icon={faArrowTurnDown} />
                <div className='w-[607px] h-[188px] flex justify-center flex-col items-center gap-8 font-bold'>
                    <p>WE Can't WAIT TO MEET YOU</p>
                    <h1 className='text-6xl'>Let’s Talk</h1>
                    <button className='text-white bg-[#23a6f0] rounded-md py-4 px-8 '>Try it free now</button>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactPage
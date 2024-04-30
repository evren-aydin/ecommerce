import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import contactArkaplan from "/contact-background.png";
import ShopCard from '../components/ShopCard';
import Footer from '../layout/Footer';

function ContactPage() {
  return (
    <div>

        <div className="w-full h-[882px] gap-3 flex flex-col items-center bg-cover" style={{ backgroundImage: `url(${contactArkaplan})`}}>

            <div className="w-[1332px] h-[91px] flex flex-row items-center justify-center gap-32 ">

                <h1 className="font-mont font-bold text-2xl">Bandage</h1>
                <div className="flex justify-between w-[815px] h-[58px] items-center">
                <nav className="text-gray-500 font-bold text-sm font-mont flex gap-6">
                    <a className="" href="">Home</a>
                    <a className="" href="">Product</a>
                    <a className="" href="">Pricing</a>
                    <a className="" href="">Contact</a>
                </nav>

                <nav className="font-mont font-bold text-sm flex gap-10 items-center">
                    <a className="text-[#23a6f0] " href="">Login</a>
                    <button className="text-white bg-[#23a6f0] py-4 px-7 flex gap-4 items-center rounded-md">Become a member <FontAwesomeIcon icon={faArrowRightLong} /></button>
                </nav>
                </div>
            </div>
            <div className='w-[1050px] h-[742px]  flex items-center'>

                <div className='w-[1044px] h-[518px]  flex flex-row gap-8 items-center'>
                    <div className='w-[599px] h-full font-mont flex flex-col gap-10'>
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
                    <div className='w-[415px] h-[280px] '></div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ContactPage
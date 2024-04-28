import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="w-screen relative flex flex-col sm:w-[414px] sm:h-[1342px]">
      <div className="static w-screen h-[338px] flex justify-center sm:w-full sm:h-full">
        <div className="flex flex-row gap-24 h-full w-[1050px] items-center sm:w-full sm:h-full sm:flex-col sm:justify-center  ">
          <div className="flex flex-col gap-7">

            <h1 className="font-bold text-2xl">Get In Touch</h1>
            <p className="text-gray-500 w-[250px]">the quik fox jumps over the lazy dog</p>
            <p className=' flex gap-6'>
            <span className='text-blue-400 text-2xl'><FontAwesomeIcon icon={faFacebook} /></span>
            <span className='text-blue-400 text-2xl'><FontAwesomeIcon icon={faInstagram} /></span>
            <span className='text-blue-400 text-2xl'><FontAwesomeIcon icon={faTwitter} /></span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:pr-24">

            <h1 className="font-bold text-2xl">Company Info</h1>
            <p className='text-gray-600 font-semibold'>About Us</p>
            <p className='text-gray-600 font-semibold'>Carrier</p>
            <p className='text-gray-600 font-semibold'>We are hiring</p>
            <p className='text-gray-600 font-semibold'>Blog</p>
            
          </div>

          <div className="flex flex-col gap-3 sm:pr-28 ">

            <h1 className="font-bold text-2xl">Features</h1>
            <p className='text-gray-600 font-semibold'>Bussines Marketing</p>
            <p className='text-gray-600 font-semibold'>User Analytic</p>
            <p className='text-gray-600 font-semibold'>Live Chat</p>
            <p className='text-gray-600 font-semibold'>Unlimited Support</p>
            
          </div>

          <div className="flex flex-col gap-3 sm:pr-36">

            <h1 className="font-bold text-2xl">Resources</h1>
            <p className='text-gray-600 font-semibold'>IOS & Android</p>
            <p className='text-gray-600 font-semibold'>Watch a Demo</p>
            <p className='text-gray-600 font-semibold'>Customers</p>
            <p className='text-gray-600 font-semibold'>API</p>
            
          </div>

        </div>
      </div>
      <div className="static w-screen h-[76px] bg-slate-100 flex justify-center items-center">
        <p className="text-gray-500">Made With Love By Figmaland All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
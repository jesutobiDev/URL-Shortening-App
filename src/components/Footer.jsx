import Logo from '../images/logo.svg'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue text-white flex flex-col md:flex-row py-10 md:px-[100px]  items-center md:text-left md:items-start justify-center text-center">
        <div className="flex-1 py-8 md:py-0 mb-2 md:mb-0">
            <img src={Logo} alt="logo" className='logo-white md:h-[25px] md:w-[90px] h-[35px]' />
        </div>
        <div className='flex flex-col md:flex-row gap-20'>
            <div>
                <div className='font-semibold text-lg pb-4 text-white'>Features</div>
                <div className='flex flex-col gap-2 text-white opacity-70 text-base font-light'>
                    <div>Link Shortening</div>
                    <div>Branded Links</div>
                    <div>Analytics</div>
                </div>
            </div>
            <div>
                <div className='font-semibold text-lg pb-4 text-white'>Resources</div>
                <div className='flex flex-col gap-2 text-white opacity-70 text-base font-light'>
                    <div>Blog</div>
                    <div>Developers</div>
                    <div>Support</div>
                </div>
            </div>
            <div>
                <div className='font-semibold text-lg pb-4 text-white'>Company</div>
                <div className='flex flex-col gap-2 text-white opacity-70 text-base font-light'>
                    <div>About</div>
                    <div>Our Team</div>
                    <div>Careers</div>
                    <div>Contact</div>
                </div>
            </div>
            <div className='flex gap-10 md:gap-5'>
                <img src={Facebook} alt="facebook-logo" className='h-[20px] w-[20px]' />
                <img src={Twitter} alt="twitter-logo" className='h-[20px] w-[20px]' />
                <img src={Pinterest} alt="pinterest-logo" className='h-[20px] w-[20px]' />
                <img src={Instagram} alt="instagram-logo" className='h-[20px] w-[20px]' />
            </div>
        </div>
    </div>
  )
}

export default Footer
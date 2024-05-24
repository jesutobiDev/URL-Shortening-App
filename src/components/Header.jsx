import NavBar from './NavBar'
import HeroImage from '../images/illustration-working.svg'


const Header = ({ handleToggleNav, toggleNav }) => {
  return (
    <div className="min-h-screen">
      <NavBar handleToggleNav={handleToggleNav} toggleNav={toggleNav} />
      <div className="flex flex-col-reverse md:flex-row  items-center">
        <div className="w-full md:w-1/2 h-auto md:px-[100px] text-center md:text-left p-5 md:p-0">
          <p className="text-[50px] text-veryDarkBlue font-bold leading-[70px] mb-3 md:w-full">More than just shorter links</p>
          <p className="text-gray font-medium md:w-full text-base leading-[25px] tracking-wide mb-10">Build your brand&apos;s recognition and get detailed insights on how your links are performing</p>
          <button className=' bg-cyan rounded-full px-7 py-2 text-white font-medium text-[18px]  hover:opacity-50 cursor-pointer transition-all duration-300 ease outline-none'>Get Started</button>
        </div>
        <div className="w-full md:w-1/2  relative -right-12 mt-3">
          <img src={HeroImage} alt="hero-image" className="h-full w-full " />
        </div>
      </div>
    </div>
  )
}

export default Header
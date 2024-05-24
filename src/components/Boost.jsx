import MobileBackground from '../images/bg-boost-mobile.svg'
import DesktopBackground from '../images/bg-boost-desktop.svg'

const Boost = () => {
    return (
        <div className="w-full relative bg-darkViolet flex items-center flex-col justify-center py-16 gap-7">
            <img src={MobileBackground} alt="mobile-background" className='absolute top-0 left-0 inset-0 h-full w-full md:hidden' />
            <img src={DesktopBackground} alt="desktop-background" className='absolute top-0 left-0 inset-0  h-full w-full hidden md:block -z-0' />

            <p className='z-10 text-white text-2xl font-bold tracking-wider'>Boost your links today</p>
            <button className='z-10 bg-cyan rounded-full px-7 py-2 text-white font-medium text-[18px]  hover:opacity-50 cursor-pointer transition-all duration-300 ease outline-none'>Get Started</button>
        </div>
    )
}

export default Boost

// FIXME - Change hover from the current method
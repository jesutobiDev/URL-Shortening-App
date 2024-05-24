import MobileBackground from '../images/bg-boost-mobile.svg'
import DesktopBackground from '../images/bg-boost-desktop.svg'

const Form = () => {
    return (
        <form action="" className="h-auto px-12 py-10 w-full relative  rounded-xl bg-darkViolet overflow-hidden flex flex-col justify-center">
            <img src={MobileBackground} alt="mobile-background" className='absolute top-0 left-0 inset-0 h-full w-full md:hidden' />
            <img src={DesktopBackground} alt="desktop-background" className='absolute top-0 left-0 inset-0  h-full w-full hidden md:block -z-0' />
            <div className='z-10 flex w-full gap-5 flex-col md:flex-row'>
                <input type="text" placeholder='Shorten a link here...' className='bg-white placeholder:text-gray z-10 h-[50px] rounded-lg flex-1 pl-5 placeholder:font-medium outline-none text-violet font-medium' />
                <button className='bg-cyan h-[50px] rounded-lg z-10 py-5 px-7 flex items-center justify-center text-white font-semibold text-base outline-none'>Shorten it!</button>
            </div>
            <p className=' text-red italic text-sm absolute left-12 bottom-4'>Please add a link</p>
        </form>
    )
}

export default Form
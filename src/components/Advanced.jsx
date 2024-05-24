import Form from './Form'
import ShortenedLink from './ShortenedLink'
import BrandIcon from '../images/icon-brand-recognition.svg'
import DetailIcon from '../images/icon-detailed-records.svg'
import CustomizeIcon from '../images/icon-fully-customizable.svg'

const Advanced = () => {
  return (
    <div className='p-5 md:p-20 relative bg-grayishViolet/[.1]'>
      <Form />
      <ShortenedLink />

      <div className='mt-40 flex flex-col items-center'>
        <p className='text-veryDarkViolet text-3xl font-bold text-center'>Advanced Statistics</p>
        <p className='text-grayishViolet font-medium text-center md:max-w-[450px] mt-5'>Track how your links are performing across the web with our advanced statistics dashboard</p>
        <div className='flex gap-5 relative mt-20 flex-col md:flex-row mb-10'>
          <div className='bg-cyan md:w-full md:h-2 h-full w-2 absolute md:top-1/2 md:left-0 top-0 left-0 right-0 mr-auto ml-auto'></div>
          <div className='bg-white shadow-lg rounded p-6 relative h-[200px] w-[320px] text-center md:text-left'>
            <div className='bg-darkViolet w-[60px] h-[60px] absolute -top-8 ml-auto mr-auto left-0 right-0 md:ml-0 md:mr-0 md:left-auto md:right-auto  rounded-full flex items-center justify-center mb-5'>
              <img src={BrandIcon} alt="brand-icon" className='w-7 h-7' />
            </div>
            <p className='mt-7 text-veryDarkBlue font-bold text-lg'>Brand Recognition</p>
            <p className='text-sm text-gray font-medium mt-3'>Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instill confidence in your content.</p>
          </div>
          <div className='bg-white shadow-lg rounded p-6 relative h-[200px] w-[320px] mt-20 md:mt-10 text-center md:text-left'>
            <div className='bg-darkViolet w-[60px] h-[60px] absolute -top-8 ml-auto mr-auto left-0 right-0 md:ml-0 md:mr-0 md:left-auto md:right-auto rounded-full flex items-center justify-center mb-5 '>
              <img src={DetailIcon} alt="detail-icon" className='w-7 h-7' />
            </div>
            <p className='mt-7 text-veryDarkBlue font-bold text-lg'>Detailed Records</p>
            <p className='text-sm text-gray font-medium mt-3'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className='bg-white shadow-lg rounded p-6 relative h-[200px] w-[320px] mt-20 text-center md:text-left'>
            <div className='bg-darkViolet w-[60px] h-[60px] absolute -top-8 ml-auto mr-auto left-0 right-0 md:ml-0 md:mr-0 md:left-auto md:right-auto rounded-full flex items-center justify-center mb-5'>
              <img src={CustomizeIcon} alt="customize-icon" className='w-7 h-7' />
            </div>
            <p className='mt-7 text-veryDarkBlue font-bold text-lg'>Fully Customizable</p>
            <p className='text-sm text-gray font-medium mt-3'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advanced

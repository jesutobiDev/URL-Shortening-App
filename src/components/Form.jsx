import { useState } from 'react'
import MobileBackground from '../images/bg-boost-mobile.svg'
import DesktopBackground from '../images/bg-boost-desktop.svg'

const Form = () => {
    const [error, setError] = useState(false);
    const [link, setLink] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setLink(value);

    };

    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}' + // domain name and extension
        '|((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    const validateUrl = (url) => {
        return urlPattern.test(url);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (link.trim() === '') {
            setError(true);
            setValidationMessage('Please add a link');
        } else if (!validateUrl(link)) {
            setError(true);
            setValidationMessage('Please enter a valid link');
        } else {
            setError(false);
            setValidationMessage('');
        }
    }

    const handleFocus = () => {
        setError(false);
        setValidationMessage('');
    };

    const handleBlur = () => {
        if (link.trim() !== '') {
            const isValid = validateUrl(link);
            setError(!isValid);
            setValidationMessage(isValid ? '' : 'Please enter a valid link');
        }
    };

    return (
        <div className='p-5 md:p-20 w-full h-auto absolute -top-[110px] md:-top-[150px] left-0 right-0 ml-auto mr-auto'>
            <form action="" className="h-auto md:px-12 md:py-10 p-7 w-full relative  rounded-xl bg-darkViolet overflow-hidden flex flex-col justify-center" onSubmit={handleSubmit}>
                <img src={MobileBackground} alt="mobile-background" className='absolute top-0 left-0 inset-0 h-full w-full md:hidden' />
                <img src={DesktopBackground} alt="desktop-background" className='absolute top-0 left-0 inset-0  h-full w-full hidden md:block -z-0' />
                <div className='z-10 flex w-full md:gap-5 gap-7 flex-col md:flex-row'>
                    <input type="text" placeholder='Shorten a link here...' className={`bg-white placeholder:text-gray z-10 h-[50px] rounded-lg md:flex-1 pl-5 placeholder:font-medium outline-none text-violet font-medium border-[3px] text-veryDarkBlue ${error ? 'border-red placeholder:text-red placeholder:opacity-50' : 'border-transparent'}`} value={link} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                    <button className='bg-cyan h-[50px] rounded-lg z-10 py-5 px-7 flex items-center justify-center text-white font-semibold text-base outline-none'>Shorten it!</button>
                </div>
                <p className={`text-red italic text-sm absolute left-7 bottom-[45%] ${error ? '' : 'hidden'}`}>{validationMessage}</p>
                <p className={`text-red italic text-sm absolute left-7 bottom-1/2 ${error ? 'hidden' : ''}`}>{validationMessage}</p>
            </form>
        </div>
    )
}

export default Form



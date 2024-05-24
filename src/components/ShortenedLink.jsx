

const ShortenedLink = () => {
  return (
    <div className="rounded-md  bg-white h-auto w-full font-medium flex flex-col md:flex-row mt-[120px] md:mt-[100px]">
        <p className="text-darkViolet md:flex-1 flex items-center p-5 md:px-5 md:py-3 font-semibold">Original Link here....</p>
        <div className="md:hidden bg-gray w-full  h-[0.5px]"></div>
        <div className="flex flex-col md:flex-row gap-5 md:flex-1 p-5 md:px-5 md:py-3">
            <p className="md:flex-1 flex md:justify-end text-cyan items-center font-semibold">Shortened Link here...</p>
            <button className="bg-cyan text-white py-[10px] md:py-[6px] transition duration-300 ease hover:opacity-50 px-7 rounded outline-none font-semibold">Copy</button>
        </div>
    </div>
  )
}

export default ShortenedLink
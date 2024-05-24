

const ShortenedLink = () => {
  return (
    <div className="mt-5 rounded px-5 py-3 bg-white h-auto w-full font-medium flex">
        <p className="text-darkViolet flex-1 flex items-center">Original Link here....</p>
        <div className="flex gap-5 flex-1">
            <p className="flex-1 flex justify-end text-cyan items-center">Shortened Link here...</p>
            <button className="bg-cyan text-white py-[6px] transition duration-300 ease hover:opacity-50 px-7 rounded outline-none">Copy</button>
        </div>
    </div>
  )
}

export default ShortenedLink
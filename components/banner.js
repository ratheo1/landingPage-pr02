const Banner = () => {
    return (
        <div className="w-full xl:pl-24 2xl:pl-0 2xl:w-[1250px] mx-px 2xl:mx-auto">
            <div className="md:mx-auto lg:mx-px md:w-[700px] lg:w-[600px] xl:w-[500px] pt-8 md:pt-12 xl:pt-32 text-center lg:text-left px-10 xl:px-0 sm:px-24">
                <h1 className="font-bold font-Arvo text-[#02073E] text-3xl md:text-[32px] lg:text-[40px] xl:text-[50px] md:leading-snug leading-tight xl:leading-[70px]">A Creative way to grow your Exciting Business ideas</h1>
                <p className="pt-2 md:pt-4 xl:pt-8 text-sm md:text-base md:leading-loose xl:text-lg xl:leading-9 text-[#02073E]">
                    Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.
                </p>
                <div className="pt-8 flex items-center justify-center">
                    <input className="border outline-none px-5 py-3 xl:py-5 w-full xl:w-[350px] rounded-md" type="text" placeholder="Enter email Adress" />
                    <button className="ml-2 xl:ml-5 bg-[#56BBD0] hover:bg-[#3aa4b9] transition duration-600 text-white w-[180px] py-3 xl:py-5 rounded-md">Get started</button>
                </div>
                <div className="pt-8 pb-16 xl:pb-40 md:pb-20 xl:pt-12 flex items-center justify-center md:justify-start">
                    <p className="m-2 text-sm xl:text-base text-[#566272]">Our clients</p>
                    <img src="/paypal.png" className="w-20 m-2 xl:m-3 xl:w-24" />
                    <img src="/google.png" className="w-20 m-2 xl:m-3 xl:w-24" />
                    <img src="/dropbox.png" className="w-20 m-2 xl:m-3 xl:w-24" />
                </div>
            </div>
        </div>
    )
}

export default Banner

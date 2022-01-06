import { ChevronRightIcon } from "@heroicons/react/solid"

const Company = () => {
    return (
        <div id="colab" className="pt-20 mt-10 px-10">
            <h2 className="text-center mt-3 text-2xl lg:text-3xl font-extrabold font-Arvo text-[#0F2137]">Company who also worked us</h2>
            <p className="text-center mt-5 leading-loose lg:w-[630px] w-full mx-auto">Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression.</p>
            <button className="mt-5 text-[#4F96FF] mx-auto flex items-center">
                <a href="#" className="font-bold pr-1 hover:pr-2 hover:transition duration-300 easy-out">Explore Details</a>
                <ChevronRightIcon className="w-6" />
            </button>
            <img className="mx-auto mt-5" src="/company.png"/>
        </div>
    )
}

export default Company

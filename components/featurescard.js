import { ChevronRightIcon } from "@heroicons/react/solid"

const FeaturesCard = ({icon, title}) => {
    return (
        <div className="w-[360px] md:hover:bg-white md:text-left md:hover:drop-shadow-3xl md:p-12 transition duration-500">
            <div className="pt-8 md:pt-0 w-full">
                {icon}
            </div>
            <h3 className="mt-8 font-bold text-xl text-[#0F2137]">{title}</h3>
            <p className="mt-3 leading-7">
                We’re driven beyond just finishing projects. We want to find smart solutions.
            </p>
            <button className="mt-8 text-[#3183FF] flex items-center">
                <a href="#" className="text-md pr-1 hover:pr-2 hover:transition duration-300 easy-out">Learn more</a>
                <ChevronRightIcon className="w-5" />
            </button>
        </div>
    )
}

export default FeaturesCard

import { AtSymbolIcon, LightningBoltIcon, LockClosedIcon, ViewGridAddIcon, StarIcon, ShoppingBagIcon } from "@heroicons/react/solid"
import FeaturesCard from "../components/featurescard"

const Features = () => {
    let iconSymbol = <AtSymbolIcon className="w-20 text-white bg-[#56BBD0] p-4 rounded-full"/>;
    let iconLight = <LightningBoltIcon className="w-20 text-white bg-[#FBCE82] p-4 rounded-full"/>;
    let iconLock = <LockClosedIcon className="w-20 text-white bg-[#91AFE3] p-4 rounded-full"/>;
    let iconView = <ViewGridAddIcon className="w-20 text-white bg-[#90A7BB] p-4 rounded-full"/>;
    let iconStar = <StarIcon className="w-20 text-white bg-[#BFA1F8] p-4 rounded-full"/>;
    let iconShop = <ShoppingBagIcon className="w-20 text-white bg-[#81DC9A] p-4 rounded-full"/>;
    return (
        <div id="solutions" className="pt-24 xl:w-[1250px] h-auto pb-12 xl:h-[1090px] mx-auto">
            <p className="text-center text-[#00A99D] text-lg font-medium">Ideal solutions for you</p>
            <h2 className="text-center mt-3 text-[#0F2137] text-2xl font-extrabold font-Arvo">Go beyond ultimate features</h2>
            <div className="flex flex-wrap justify-center my-16">
                <FeaturesCard icon={iconSymbol} title='Email subscription'/>
                <FeaturesCard icon={iconLight} title="Bolt Performance"/> 
                <FeaturesCard icon={iconLock} title="Secure Transaction"/>
                <FeaturesCard icon={iconView} title='Multiple Options'/>
                <FeaturesCard icon={iconStar} title="Custom Support"/> 
                <FeaturesCard icon={iconShop} title="Integrated with"/>
            </div>
        </div>
    )
}

export default Features

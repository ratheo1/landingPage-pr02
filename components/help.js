import { ArrowNarrowRightIcon, AtSymbolIcon, CodeIcon } from "@heroicons/react/solid"

const Help = () => {
    return (
        <div id="help" className="w-full md:w-[750px] xl:w-[1250px] flex-col xl:flex-row  px-12 xl:px-0 mx-auto flex justify-between pt-16">
            <div className="xl:w-2/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2137] xl:leading-normal font-Arvo text-center xl:text-left">Do you need help? Our support team ready to help you</h2>
                <p className="mt-5 leading-7 text-center xl:text-left text-base xl:text-lg xl:leading-loose">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                <div className="mail-support flex items-center mt-10">
                    <AtSymbolIcon className="w-20 text-white bg-[#FFA42F] p-2 rounded-full" />
                    <div className="ml-5">
                        <h3 className="font-bold text-xl flex">
                            Email client support
                            <ArrowNarrowRightIcon className="w-5 ml-3 text-gray-400"/>
                        </h3>
                        <p className="mt-2">Ultimate access to all credit popular exercises and assessments materials</p>
                    </div>
                </div>
                <div className="ticket-support flex items-center mt-10">
                    <CodeIcon className="w-20 text-white bg-[#5080FB] p-2 rounded-full" />
                    <div className="ml-5">
                        <h3 className="font-bold text-xl flex">
                            Live ticket support
                            <ArrowNarrowRightIcon className="w-5 ml-3 text-gray-400"/>
                        </h3>
                        <p className="mt-2">Total assessment corrections with live support tickets download access system</p>
                    </div>
                </div>
            </div>
            <div className="mt-20 xl:mt-0">
                <img src="/help_img.png" />
            </div>
        </div>
    )
}

export default Help

import { CheckCircleIcon } from "@heroicons/react/solid"

const Support = () => {
    return (
        <div id="support" className="flex flex-col-reverse xl:flex-row sm:w-[600px] xl:w-[1250px] mx-auto justify-center text-center xl:text-left h-full xl:my-16">
            <div className="mt-10 mx-auto">
                <img src="/layout.png" />
            </div>
            <div className="xl:w-[650px] mt-16 xl:mt-20 px-5 lg:px-0">
                <h2 className="font-Arvo font-bold sm:text-3xl text-2xl xl:text-[34px] text-[#0F2137] leading-normal xl:leading-normal sm:leading-snug">Customer support is our main priority with their hundred percent satisfaction.</h2>
                <p className="xl:leading-8 mt-5 xl:mt-10 text-base xl:text-lg">Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.</p>
                <div className="flex justify-center xl:justify-start">
                    <div className="mt-10 flex flex-col">
                        <span className="flex mr-10">
                            <CheckCircleIcon className="w-6 text text-[#56BBD0]" />
                            <p className="font-bold ml-3">Medical and vision</p>
                        </span>
                        <span className="flex mt-5">
                            <CheckCircleIcon className="w-6 text text-[#56BBD0]" />
                            <p className="font-bold ml-3">HSAs and FSAs</p>
                        </span>
                    </div>
                    <div className="mt-10 flex flex-col">
                        <span className="flex mr-10">
                            <CheckCircleIcon className="w-6 text text-[#56BBD0]" />
                            <p className="font-bold ml-3">Life insurance</p>
                        </span>
                        <span className="flex mt-5">
                            <CheckCircleIcon className="w-6 text text-[#56BBD0]" />
                            <p className="font-bold ml-3">Commuter benefits</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support

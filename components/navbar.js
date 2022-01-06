import { ViewListIcon, XIcon } from "@heroicons/react/solid"
import { useState } from "react"

const Navbar = () => {

    const [sidebar, setsidebar] = useState("hidden")

    const showSidebar = () => {
        setsidebar("block")
        const body = document.getElementsByTagName("body")
        body[0].setAttribute("class","notscroll")
    }
    
    const hideSidebar = () => {
        setsidebar("hidden")
        const body = document.getElementsByTagName("body")
        body[0].setAttribute("class","")
    }

    return (
        <div className="pt-3">
            <div className="w-full 2xl:w-[1250px] mx-px lg:mx-auto py-5 md:px-24 px-8 2xl:px-0 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="logo">
                        <a href="#"><img src="/logo.png" alt="logo"/></a>
                    </div>
                    <div className="text-[#02073E] hidden lg:block ml-12">
                        <a href="#" className="pr-8 hover:text-[#56BBD0] transition duration-200">Home</a>
                        <a href="#solutions" className="pr-8 hover:text-[#56BBD0] transition duration-200">Solutions</a>
                        <a href="#support" className="pr-8 hover:text-[#56BBD0] transition duration-200">Supports</a>
                        <a href="#help" className="pr-8 hover:text-[#56BBD0] transition duration-200">Help</a>
                        <a href="#colab" className="pr-8 hover:text-[#56BBD0] transition duration-200">Collaboration</a>
                        <a href="#faq" className="pr-8 hover:text-[#56BBD0] transition duration-200">FAQ</a>
                    </div>
                </div>

                <button onClick={showSidebar} className="block lg:hidden">
                    <ViewListIcon className="w-5" />
                </button>
            </div>
            <div id={sidebar} className="bg-white px-8 pt-6 absolute shadow-2xl top-0 h-full w-[300px]">
                <div className="flex items-center justify-between ">
                    <img src="/logo.png" alt="startuplanding" className="w-40" />
                    <button onClick={hideSidebar}><XIcon className="w-6" /></button>
                </div>
                <div className="flex flex-col mt-8">
                    <a href="#" className="py-2">Home</a>
                    <a href="#" className="py-2">Adversite</a>
                    <a href="#" className="py-2">Supports</a>
                    <a href="#" className="py-2">About</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

const Footer = () => {
    return (
        <div className="mt-28 text-[#02073E] px-10 xl:px-0 pt-16 xl:w-[1250px] mx-auto  items-start">
            <div className="flex flex-wrap justify-start lg:justify-between gap-10 border-b-2 pb-12">
                <div className="mr-10">
                    <h3 className="font-medium text-xl mb-7">Company</h3>
                    <p className="mb-3">About</p>
                    <p className="mb-3">Affiliate</p>
                    <p className="mb-3">Carrers & culture</p>
                    <p className="mb-3">Blog</p>
                    <p className="mb-3">Press</p>
                </div>
                <div className="mr-10">
                    <h3 className="font-medium text-xl mb-7">About us</h3>
                    <p className="mb-3">Support center</p>
                    <p className="mb-3">Customer support</p>
                    <p className="mb-3">About us</p>
                    <p className="mb-3">Copyright</p>
                    <p className="mb-3">Popular Campain</p>
                </div>
                <div className="mr-10">
                    <h3 className="font-medium text-xl mb-7">Our Information</h3>
                    <p className="mb-3">Return policy</p>
                    <p className="mb-3">Privacy policy</p>
                    <p className="mb-3">Terms and conditions</p>
                    <p className="mb-3">Site Map</p>
                    <p className="mb-3">Store Hours</p>
                </div>
                <div className="mr-10">
                    <h3 className="font-medium text-xl mb-7">My Account</h3>
                    <p className="mb-3">Press inquiries</p>
                    <p className="mb-3">Social Media</p>
                    <p className="mb-3">Directories</p>
                    <p className="mb-3">Images & B-roll</p>
                    <p className="mb-3">Permissions</p>
                </div>
                <div className="mr-10">
                    <h3 className="font-medium text-xl mb-7">Policy</h3>
                    <p className="mb-3">Application security</p>
                    <p className="mb-3">Software principles</p>
                    <p className="mb-3">Unwanted software policy</p>
                    <p className="mb-3">Responsible supply chain</p>
                </div>
            </div>
            <div className="my-8 text-gray-700 flex flex-col lg:flex-row items-center justify-between">
                <div className="flex flex-col lg:flex-row items-center">
                    <img src="/logo.png" />
                    <p className="mt-2 text-sm lg:ml-5">Copyright by 2019 Redq, Inc</p>
                </div>
                <div className="flex items-center mt-5">
                    <p className="ml-5">Home</p>
                    <p className="ml-5">Adversite</p>
                    <p className="ml-5">Supports</p>
                    <p className="ml-5">Marketing</p>
                    <p className="ml-5">FAQ</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

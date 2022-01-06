import FaqSingle from "../components/faqSingle"

const FAQ = () => {

    return (
        <div id="faq" className="pt-24 mx-auto lg:w-[850px] xl:w-[1250px]">
            <p className="text-center text-[#00A99D] text-lg font-medium">Get your question answer</p>
            <h2 className="text-center mt-3 mb-16 text-2xl font-extrabold font-Arvo text-[#0F2137]">Frequantly asked question</h2>

            <FaqSingle question="01. Which domain should I purchase?" reponse="Get your website tests delivered at the home collect a sample. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments." />
            <FaqSingle question="02. What are some tips when choosing a name?" reponse="We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments." />
            <FaqSingle question="03. What if I need help choosing the right domain?" reponse="Create a hub for cross-functional work that also works with all. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments." />
            <FaqSingle question="04. Can I upgrade or downgrade my web hosting subscription system?" reponse="The pricing made me a little hesitant at first but I have been. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments." />
            <FaqSingle question="05. Learn from community on Brandwagon" reponse="Stop your viewers from getting distracted. Publish videos to. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments." />

            <div className="mt-12 w-full text-center">
                <button className="bg-[#ECF2F6] hover:bg-[#56BBD0] hover:text-white transition duration-400 text-gray-400 px-8 py-3 rounded-md font-bold">Still question? Contact us</button>
            </div>
        </div>
    )
}

export default FAQ

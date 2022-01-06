import { MinusIcon, PlusIcon } from "@heroicons/react/solid"
import { useState } from "react"

const FaqSingle = ({question, reponse}) => {

    const [etat, setetat] = useState("all")
    const [icon, seticon] = useState(<PlusIcon className="w-6 text-gray-400 ml-12" />)
    const plus = <PlusIcon className="w-6 text-gray-400 ml-5" />
    const moins = <MinusIcon className="w-6 text-gray-400 ml-5" />

    const onHandleClick = () => {
        if (etat == "all") {
            setetat("active")
            seticon(moins);
        }
        else {
            setetat("all")
            seticon(plus)
        }
    }

    return (
        <div className="py-4 mx-5 lg:mx-auto xl:w-[1250px] flex flex-col lg:flex-row items-start justify-between border-b border-gray-400">
            <h3 className="font-medium text-lg lg:text-xl lg:w-1/2">{question}</h3>
            <p id={etat} className="text-gray-700 mt-1 xl:mt-0 xl:leading-8 lg:w-1/2 overflow-hidden flex items-start">
                {reponse}
                <button className="xl:mt-1" onClick={onHandleClick}>
                    {icon}
                </button>
            </p>
        </div>
    )
}

export default FaqSingle

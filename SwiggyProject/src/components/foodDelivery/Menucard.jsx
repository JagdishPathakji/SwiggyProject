import { useState } from "react"
import Mainmenu from "./Mainmenu"

export default function Menucard({ menuItems, states}) {
    const [isOpen, setisOpen] = useState(true)
    
    if (!isOpen) {
        return (

            <div className="w-full mb-10 border-b border-gray-200 pb-6">
                <div className="flex justify-between items-center">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-800">{menuItems?.title}</p>
                    <span onClick={() => setisOpen(!isOpen)} className="cursor-pointer text-lg hover:text-gray-600 transition">
                    ▼
                    </span>
                </div>
            </div>
        )
    }

    if ("categories" in menuItems) {
        return (

            <>

                <div className="w-full mb-10 border-b border-gray-200 pb-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xl sm:text-2xl font-semibold text-gray-800">{menuItems?.title}</p>
                        <span onClick={() => setisOpen(!isOpen)} className="cursor-pointer text-lg hover:text-gray-600 transition">
                        ▲
                        </span>
                    </div>
                    
                    <div className="mt-6 grid gap-6">
                        {
                            menuItems?.categories?.map((item) => (
                                <Menucard key={item?.title} menuItems={item} states={states}/>
                            ))
                        }
                    </div>
                </div>
            </>            
        )
    }

    return (
        <>

            <div className="w-full mb-10 border-b border-gray-200 pb-6">
                <div className="flex justify-between items-center">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-800">{menuItems?.title}</p>
                    <span onClick={() => setisOpen(!isOpen)} className="cursor-pointer text-lg hover:text-gray-600 transition">
                    ▲
                    </span>
                </div>

                <div className="mt-6 grid gap-6">
                    {
                        menuItems?.itemCards?.map((item) => {
                            
                            if(states?.selected==='veg') {
                                if('isVeg' in item?.card?.info)
                                return <Mainmenu key={item?.card?.info?.id} value={item?.card?.info} />
                            }
                            else if(states?.selected==='nonveg') {
                                if(!('isVeg' in item?.card?.info))
                                return <Mainmenu key={item?.card?.info?.id} value={item?.card?.info} />
                            }
                            else if(states?.selected===null) {
                                return <Mainmenu key={item?.card?.info?.id} value={item?.card?.info}/>
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
    
}

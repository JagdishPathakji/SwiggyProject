import hotels from "../warehouse/hotels"
import Hotelscard from "./Hotelscard"
export default function Hotels() {

    
    return (
        <>
            <div className="w-[85%] mx-auto mt-30 mb-20">
                <h1 className="text-center text-3xl font-bold mb-10">Discover bests restaurants and Dineout</h1>
                <div className="overflow-x-auto">
                    <div className="grid grid-flow-col auto-cols-max grid-rows-2 gap-6">
                        {
                            hotels.map((value) => ( <Hotelscard key={value?.info?.id} card={value} image={value?.info?.mediaFiles[0]?.url} /> ))
                        }
                    </div>
                </div>
            </div>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"/>
        </>
    )
}
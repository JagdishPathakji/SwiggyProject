import swiggy_logo from "url:../../assets/swiggy_logo.avif"
import left from "url:../../assets/left.avif"
import right from "url:../../assets/right.avif"
import { Link } from "react-router";

export default function Header() {
    return (
        <div className="bg-[#FF5200] text-white font-bold font-sans">
           
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-8">
                <img src={swiggy_logo} className="w-32 sm:w-40 h-12 object-contain mb-4 sm:mb-0" alt="Swiggy Logo" />

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-sm w-full sm:w-auto">
                    <a className="hover:underline">Swiggy Corporate</a>
                    <a className="hover:underline">Partner with Us</a>
                    <a className="border border-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition">
                    Get the App
                    </a>
                    <a className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90 transition">
                    Sign In
                    </a>
                </div>
            </div>


            <div className=" text-center py-12 relative">
                <img src={left} className="h-110 w-60 absolute top-0 left-0"></img>
                <img src={right} className=" h-110 w-60 absolute top-0 right-0"></img>
                <div className="max-w-[60%] text-[48px] container mx-auto">Order food & groceries. Discover <br></br> best restaurants. Swiggy it!</div>
            
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-5 justify-center">
                    <input placeholder="Enter your delivery location" className="w-[30%] px-6 py-4 bg-white text-gray-500 rounded-2xl border-[1px]"></input>
                    <input placeholder="Search for restaurant, items and more" className="w-[45%] px-6 py-4 bg-white text-gray-500 rounded-2xl border-[1px]"></input>
                </div>
            </div>
            <div className=" flex gap-[30px] justify-center flex-wrap">
                <Link to={`/restaurants`} className="w-90 h-88">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </Link>
                <a className="w-90 h-88">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                </a>
                <a className="w-90 h-88">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </a>
            </div>
        </div>
    )
}
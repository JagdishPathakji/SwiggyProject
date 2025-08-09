import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Menucard from "./Menucard";
import { Link } from "react-router";
import swiggy_logo from "url:../../../assets/swiggy_logo.avif"
import { orderFoodFetch } from "../../store/orderfoodslice";
import { useSelector , useDispatch} from "react-redux";
import CartBtn from "./cartBtn";

export default function OrderFood() {

    const {hotelid} = useParams()
    const [selected,setSelected] = useState(null)
    const {data,loading,error,hotelId} = useSelector((state)=>state.OrderFood)
    const dispatch = useDispatch()
    

    useEffect(()=> {
        if(hotelId != hotelid)
        dispatch(orderFoodFetch({proxyserver: "https://cors-anywhere.herokuapp.com/", api: 'https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId=', hotelid}))
    },[hotelId,dispatch,hotelid])

    return (

        <div>
            <div className="bg-[#FF5200] text-white font-bold font-sans">
                <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-6">
                    <Link to={"/"} className="flex items-center mb-4 sm:mb-0">
                        <img src={swiggy_logo} className="w-36 sm:w-40 h-10 sm:h-12" alt="Swiggy Logo" />
                    </Link>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-sm sm:text-base w-full sm:w-auto">
                        <a className="hover:underline">Swiggy Corporate</a>
                        <Link to="/restaurants" className="hover:underline">Restaurants</Link>
                        <a className="border border-white py-2 px-4 rounded-xl hover:bg-white hover:text-[#FF5200] transition duration-200">Get the App</a>
                        <a className="bg-black py-2 px-5 rounded-xl hover:bg-gray-800 transition duration-200">Sign In</a>
                        <CartBtn />                        
                    </div>
                </div>
            </div>


            <Link to={`/restaurants/search/${hotelid}`}>
                <div className="w-full max-w-md mx-auto mt-10 mb-6 px-4">
                    <p className="text-lg font-semibold text-gray-800 bg-gray-100 px-6 py-3 rounded-full shadow-sm text-center">
                        Search for dishes 🔍
                    </p>
                </div>
            </Link>

            <div className="flex gap-4 justify-center mt-8">
                <button onClick={()=>{setSelected(selected==='veg' ? null : 'veg')}} className={`px-6 py-2 rounded-full font-semibold text-sm border border-green-600 text-green-700 bg-green-50 ${selected==='veg'? 'bg-green-700 text-white font-bold' : null}  ${selected==='veg' ? 'hover:border-black hover:shadow transition duration-200' : null }`}>
                    Veg
                </button>
                <button onClick={()=>{setSelected(selected==='nonveg' ? null :'nonveg')}} className={`px-6 py-2 rounded-full font-semibold text-sm border border-red-600 text-red-700 bg-red-50 ${selected==='nonveg'? 'bg-red-700 text-white font-bold' : null} ${selected==='veg' ? 'hover:border-black hover:shadow transition duration-200' : null }`}>
                    Non-Veg
                </button>
            </div>

            <div className="w-full max-w-6xl mx-auto mt-12 px-6">
                {   
                    data?.map((value)=> <Menucard key={value?.card?.card?.title} menuItems={value?.card?.card} states={{selected,setSelected}} />)
                }
            </div>
        </div>

    )
}
import swiggy_logo from "url:../../../assets/swiggy_logo.avif"
import {Link} from "react-router"
import { useEffect, useState } from "react"
import Dishescard from "../Dishescard"
import Hotelscard from "../Hotelscard"
import { useSelector, useDispatch } from "react-redux"
import { restaurantFetch } from "../../store/restaurantList"
import CartBtn from "./cartBtn"
export default function Restaurant() {

    const dispatch = useDispatch()
    const {data,loading,error} = useSelector(state=>state.restaurant)

    useEffect(()=> {
        if(!data || data.length == 0)
        dispatch(restaurantFetch({api:"https://raw.githubusercontent.com/JagdishPathakji/SwiggyRestaurantData/refs/heads/main/RestaurantData.json"}))
    },[dispatch,data])
    
    return (
        <div>

            <div className="bg-[#FF5200] text-white font-bold font-sans">
                <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-6">
                    <Link to={"/"} className="flex items-center mb-4 sm:mb-0">
                        <img src={swiggy_logo} className="w-36 sm:w-40 h-10 sm:h-12" alt="Swiggy Logo" />
                    </Link>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-sm sm:text-base w-full sm:w-auto">
                        <a className="hover:underline">Swiggy Corporate</a>
                        <a className="hover:underline">Partner with Us</a>
                        <a className="border border-white py-2 px-4 rounded-xl hover:bg-white hover:text-[#FF5200] transition duration-200">
                            Get the App
                        </a>
                        <a className="bg-black py-2 px-5 rounded-xl hover:bg-gray-800 transition duration-200">
                            Sign In
                        </a>
                        <CartBtn />
                    </div>
                </div>
            </div>


            <div className="w-[85%] mx-auto mt-20 mb-20">
                <h1 className="text-center text-[20px] font-bold mb-5">What's on your mind?</h1>
                <div className="overflow-x-auto scroll-smooth">
                    <div className="grid grid-flow-col grid-rows-2 auto-cols-[9rem] gap-6 w-max min-h-[250px]">
                        {
                            data?.data?.cards[0]?.card?.card?.imageGridCards?.info?.map((value) => (
                                <Dishescard key={value?.id} dish={value} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="w-[85%] mx-auto mt-30 mb-20">
                <h1 className="text-center text-3xl font-bold mb-10">Discover bests restaurants and Dineout</h1>
                <div className="grid [grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] gap-6">
                    {
                        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((value) => {
                            return (<Link to={`/restaurants/${value?.info?.id}`} key={value?.info?.id}>
                                <Hotelscard card={value} image={value?.info?.cloudinaryImageId} /> 
                            </Link>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

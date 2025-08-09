import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import swiggy_logo from "url:../../../assets/swiggy_logo.avif"
import Mainmenu from "./Mainmenu";
import CartBtn from "./cartBtn";

export default function Search() {

    const { hotelid } = useParams()
    const [restData, setrestData] = useState([])
    const [food,setFood] = useState("")

    async function fetchData() {
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId=${hotelid}`
        const response = await fetch(proxyServer + swiggyAPI)
        const data = await response.json()

        const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        const filterData = tempData.filter((value) => {
            return 'title' in value?.card?.card
        })
        setrestData(filterData)
    }

    let itemCards = []
    if (restData.length > 0) {
        restData.forEach((value) => {
            if ("categories" in value?.card?.card) {
                value?.card?.card?.categories?.forEach((category) => {
                    category?.itemCards?.map((item) => {
                        itemCards.push(item)
                    })
                })
            }
            else if ("itemCards" in value?.card?.card) {
                value?.card?.card?.itemCards?.forEach((item) => {
                    itemCards.push(item)
                })
            }
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    let data = new Set()
    itemCards.forEach((value)=> {
        let flag = false;
        [...data].forEach((val)=> {
            if(value?.card?.info?.id === val?.card?.info?.id) {
                flag = true;
            }
        })
        if(!flag) {
            data.add(value)
        }
    })

    data = [...data]

    return (
        <div className="min-h-screen bg-white">
            <div className="bg-[#FF5200] text-white font-bold font-sans shadow-md">
                <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-5">
                    <Link to={"/"} className="mb-4 sm:mb-0">
                        <img src={swiggy_logo} className="w-32 sm:w-36 h-10 object-contain" alt="Swiggy Logo" />
                    </Link>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-sm w-full sm:w-auto">
                        <Link to={`/restaurants/${hotelid}`} className="hover:underline">
                            Go to Menu
                        </Link>
                        <Link to={"/restaurants"} className="hover:underline">
                            Restaurants
                        </Link>
                        <a className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-[#FF5200] transition">
                            Get the App
                        </a>
                        <a className="bg-black px-5 py-2 rounded-full hover:opacity-90 transition">
                            Sign In
                        </a>
                        <CartBtn />
                    </div>
                </div>
            </div>


            <div className="w-full max-w-xl mx-auto mt-10 px-4 relative">
                <input
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    placeholder="Search for dishes 🔍"
                    className="w-full px-6 py-3 rounded-full border border-gray-300 text-base font-medium text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF5200] shadow-sm transition"
                />
                {
                    <button
                        onClick={() => setFood("")}
                        className="absolute right-6 top-3 text-gray-500 hover:text-gray-700 text-xl"
                        >
                        &times;
                    </button>
                }
            </div>

            <div className="mt-8 px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    data
                    .filter((value) => food && value?.card?.info?.name?.toLowerCase().includes(food.toLowerCase()))
                    .map((value) => (
                        <Mainmenu key={value?.card?.info?.id} value={value?.card?.info} />
                    ))
                }
            </div>

            {
                food && data.filter((value) => value?.card?.info?.name?.toLowerCase().includes(food.toLowerCase())).length === 0 && (
                <p className="text-center text-gray-500 mt-10 text-lg">No matching dishes found 🍽️</p>
                )
            }
        </div>
    )
}
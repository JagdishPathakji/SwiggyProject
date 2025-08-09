import { useSelector } from "react-redux"
import { Link } from "react-router";
import swiggy_logo from "url:../../../assets/swiggy_logo.avif"
import CartBtn from "./cartBtn"

export default function Checkout() {

    const { buyitem, counter } = useSelector((state) => state.cart)

    console.log(buyitem)
    console.log(counter)

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

            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>

                {buyitem.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty. Add some delicious food!</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {buyitem.map((item) => (
                            <div
                                key={item.id}
                                className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
                            >
                                <img
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                                    alt={item.name}
                                    className="w-28 h-28 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-900 text-center">{item.name}</h3>
                                <div className="mt-2 flex items-center gap-4">
                                    <span className="text-gray-500">Qty: {item.quantity}</span>
                                    <span className="text-green-600 font-bold">
                                        ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
                                    </span>
                                    <span className="text-gray-500">Total Price: {(item.price ? item.price / 100 : item.defaultPrice / 100) * (item.quantity )}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
                {buyitem.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-b border-gray-200 py-3"
                    >
                        <span className="font-medium">{item.name}</span>
                        <span className="font-semibold text-gray-700">
                            ₹{(item.price ? item.price / 100 : item.defaultPrice / 100) * item.quantity}
                        </span>
                    </div>
                ))}

                <div className="flex justify-between items-center mt-4 mb-2 pt-4 border-t border-gray-300">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold text-green-600">
                       ₹{
                            buyitem.reduce( (acc, item) => acc + (item.price ? item.price / 100 : item.defaultPrice / 100) * item.quantity,0)
                        }
                    </span>
                </div>
            </div>

        </div>
    )
}
import { useDispatch, useSelector } from "react-redux"
import { addItem, incremenetItem, decrementItem } from "../../store/cart"
export default function Mainmenu({ value }) {

    const dispatch = useDispatch()
    const {buyitem} = useSelector((state)=>state.cart)

    const curritem = buyitem.find((item)=> item.id == value.id)


    function handleAdd() {
        dispatch(addItem(value))
    }

    function handleIncrement() {
        dispatch(incremenetItem(value))
    }

    function handleDecrement() {
        dispatch(decrementItem(value))
    }

    return (
        <>
            <div className="flex justify-between w-full pb-8 border-b border-dashed border-gray-300">
                <div className="w-[70%] pr-6">
                    <p className="text-lg font-semibold text-gray-900 mb-2">{value?.name}</p>
                    <p className="text-base font-semibold text-gray-800">{"₹" + ("defaultPrice" in value ? value?.defaultPrice / 100 : value?.price / 100)}</p>
                    {value?.ratings?.aggregatedRating?.rating && (
                        <div className="text-sm text-yellow-600 mt-1">
                            ⭐ {value?.ratings?.aggregatedRating?.rating} ({value?.ratings?.aggregatedRating?.ratingCountV2})
                        </div>
                    )}
                    <p className="text-sm text-gray-600 mt-2">{value?.description}</p>
                </div>

                <div className="w-[25%] relative flex flex-col items-center">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`} alt={value.name}
                        className="w-28 h-28 object-cover rounded-lg shadow-sm" />
                    {
                        !curritem ? (
                            <button
                                onClick={handleAdd}
                                className="mt-3 px-6 py-1 border border-gray-300 text-green-600 font-semibold text-sm rounded hover:shadow-md transition"
                            >
                                ADD
                            </button>
                        ) : (
                            <button
                                className="mt-3 flex items-center gap-3 px-4 py-1 border border-gray-300 text-green-600 font-semibold text-sm rounded hover:shadow-md transition"
                            >
                                <span
                                    onClick={handleDecrement}
                                    className="px-2 text-lg font-bold cursor-pointer hover:text-green-700"
                                >
                                    -
                                </span>
                                {curritem.quantity}
                                <span
                                    onClick={handleIncrement}
                                    className="px-2 text-lg font-bold cursor-pointer hover:text-green-700"
                                >
                                    +
                                </span>
                            </button>
                        )
                    }

                </div>
            </div>
        </>
    )
}
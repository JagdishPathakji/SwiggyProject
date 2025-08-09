export default function Hotelscard({ card, image }) {

    return (
            <div className="w-64 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <img
                    className="w-full h-40 object-cover"
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        image
                    }
                    alt={card?.info?.name}
                />

                <div className="p-3">
                    <h3 className="text-lg font-semibold truncate">{card?.info?.name}</h3>

                    <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                            ⭐ {card?.info?.rating?.value || card?.info?.avgRating}
                        </span>
                        <span>{card?.info?.costForTwo}</span>
                    </div>

                    <p className="text-gray-500 text-sm mt-1 truncate">
                        {card?.info?.cuisines?.join(", ")}
                    </p>

                    <p className="text-gray-500 text-sm">{card?.info?.locality}</p>
                    <p className="text-gray-400 text-xs">
                        {card?.info?.locationInfo?.city?.name}
                    </p>
                </div>
            </div>
    )
}

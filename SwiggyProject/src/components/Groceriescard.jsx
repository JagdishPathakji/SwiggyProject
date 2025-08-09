export default function Groceriescard({card}) {
    return (
        <a href="#">
            <div className="w-36">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+card?.imageId} className="w-36 h-45 object-cover rounded" alt="Dishes Image"/>
                <h3 className="text-center font-bold mt-2">{card?.action?.text}</h3>
            </div>
        </a>
    )
}
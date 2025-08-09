export default function Dishescard({ dish }) {
    return (
        <div className="w-36 object-cover">
            <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/`+dish?.imageId}
                className="w-full h-40 object-cover rounded"
                alt="Dish"
            />
        </div>
    )
}

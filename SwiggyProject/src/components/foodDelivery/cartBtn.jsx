import { Link } from "react-router"
import { useSelector } from "react-redux"

export default function CartBtn() {

    const {counter} = useSelector((state)=>state.cart)

    return (
        <div>
             <Link to={`/restaurants/checkout`} className="bg-black px-5 py-2 rounded-full hover:opacity-90 transition">
                cart: {counter}
            </Link>
        </div>
    )
}
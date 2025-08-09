import groceries from "../warehouse/grocery"
import Groceriescard from "./Groceriescard"

export default function Groceries() {
    return (
        <div className="w-[85%] mx-auto mt-30 mb-20">
            <h1 className="text-center text-3xl font-bold mb-10">Shop Groceries on Instamart</h1>
            <div className="overflow-x-auto">
                <div className="grid grid-flow-col auto-cols-max grid-rows-2 gap-6">
                    {
                        groceries.map((value) => ( <Groceriescard key={value.id} card={value} /> ))
                    }
                </div>
            </div>
        </div>
    )
}

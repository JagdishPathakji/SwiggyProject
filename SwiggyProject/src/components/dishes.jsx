import dishes from "../warehouse/dishes"
import Dishescard from "./Dishescard"

export default function Dishes() {
    return (
        <>
            <div className="w-[85%] mx-auto mt-20 mb-20">
                <h1 className="text-center text-3xl font-bold mb-10">Explore Dishes</h1>
                <div className="overflow-x-auto scroll-smooth">
                    <div className="grid grid-flow-col grid-rows-2 auto-cols-[9rem] gap-6 w-max min-h-[250px]">
                        {
                            dishes.map((value) => (
                                <Dishescard key={value.id} dish={value} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

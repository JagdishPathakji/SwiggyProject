import { configureStore } from "@reduxjs/toolkit"
import orderFoodReducer from "./orderfoodslice"
import restaurantReducer from "./restaurantList"
import cartReducer from "./cart"

const store = configureStore({
    reducer: {
        OrderFood: orderFoodReducer,
        restaurant: restaurantReducer,
        cart: cartReducer,
    }
})

export default store
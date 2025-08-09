import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
    name: "cart",
    initialState: {
        counter: 0,
        buyitem: [],
    },
    reducers: {
        addItem: (state,action)=> {
            state?.buyitem?.push({...action?.payload, quantity: 1})
            state.counter += 1;
        },
        incremenetItem: (state,action)=> {
            const item = state?.buyitem?.find((item)=> item?.id == action?.payload?.id)
            if(item) {
                item.quantity += 1
                state.counter += 1
            } 
        },
        decrementItem: (state,action)=> {
            const item = state?.buyitem?.find((item)=> item?.id == action?.payload?.id)
            if(item) {
                if(item?.quantity > 1) {
                    item.quantity -= 1
                }
                else {
                    state.buyitem = state?.buyitem?.filter((item)=> item?.id != action?.payload?.id)
                }
                state.counter -= 1
            }
        }
    }
})

export const {addItem, incremenetItem, decrementItem} = cart.actions;
export default cart.reducer
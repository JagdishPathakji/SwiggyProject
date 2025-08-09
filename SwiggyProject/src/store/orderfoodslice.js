import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

const orderFoodFetch = createAsyncThunk(
    'orderfood/orderFoodFetch',
    async(args, ThunkAPI)=> {
        try {
            const response = await fetch(args.proxyserver+args.api+args.hotelid)
            const data = await response.json()
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            const filterData = tempData?.filter((value)=> {
                return 'title' in value?.card?.card
            })
            console.log("orderfood data is fetched")
            return {filterData ,hotelId: args.hotelid}
        }
        catch(error) {
            return ThunkAPI.rejectWithValue("Error Occured during fetch")
        }
    }
)

const orderFood = createSlice({
    name:"OrderFood",
    initialState: {
        data: [],
        loading: false,
        error: null,
        hotelId: null,
    },
    extraReducers: (builder)=> {
        builder
        .addCase(orderFoodFetch.pending, (state)=> {
            state.loading = true,
            state.error = null
        })
        .addCase(orderFoodFetch.fulfilled, (state,action)=> {
            state.data = action.payload.filterData,
            state.hotelId = action.payload.hotelId,
            state.loading = false
        })
        .addCase(orderFoodFetch.rejected, (state,action)=> {
            state.error = action.payload,
            state.loading = false
        })
    }
})

export {orderFoodFetch}
export default orderFood.reducer
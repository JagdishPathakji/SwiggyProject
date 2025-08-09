import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

const restaurantFetch = createAsyncThunk(
    'restaurant/restaurantFetch',
    async(args, ThunkAPI)=> {
        try {
            const response = await fetch(args.api)
            const data = await response.json()
            console.log("restaurant data is fetched")
            return data
        }
        catch(error) {
            return ThunkAPI.rejectWithValue("Error Occured during fetch")
        }
    }
)

const restaurants = createSlice({
    name:"restaurant",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder)=> {
        builder
        .addCase(restaurantFetch.pending, (state)=> {
            state.loading = true,
            state.error = null
        })
        .addCase(restaurantFetch.fulfilled, (state,action)=> {
            state.data = action.payload,
            state.loading = false
        })
        .addCase(restaurantFetch.rejected, (state,action)=> {
            state.error = action.payload,
            state.loading = false
        })
    }
})

export {restaurantFetch}
export default restaurants.reducer
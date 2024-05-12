import { createSlice } from "@reduxjs/toolkit";



const bankeSlice = createSlice({
    name:"banke",
    initialState:{
        value:1000
    },

    // push The function actions  
    reducers:{
        increment: (state) => {
            state.value += 100
        },
        decrement: (state) => {
            state.value += 100
        },
        incrementbypayload: (state , action) => {
            state.value += action.payload
        },
    }
    
})

// export function actions

export const { increment, decrement , incrementbypayload } = bankeSlice.actions

// export function main 
export default bankeSlice.reducer
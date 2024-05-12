import { createSlice } from "@reduxjs/toolkit";



const addUser = createSlice({
    name:"User",
    initialState:{
        value:[{id:1,Titel:"yosef"}]
    },

    // push The function actions  
    reducers:{
        incrementuser: (state ,action) => {
            state.value.push(action.payload) 
        },
        decrementuser: (state,action) => {
                state.value = action.payload
        },
        // incrementbypayload: (state , action) => {
        //     state.value += action.payload
        // },
    }
    
})

// export function actions

export const { incrementuser, decrementuser  } = addUser.actions

// export function main 
export default addUser.reducer
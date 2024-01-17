import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name : "app",
    initialState :{
        choice : true
    },
    reducers : {
        toggleChoice : (state)=>{
            state.choice = !state.choice
             console.log(state.choice);
        }
    }
})

export const {toggleChoice} = appSlice.actions;
 export default appSlice.reducer;
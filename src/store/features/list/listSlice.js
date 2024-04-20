import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    rentList:[]
}

export const listSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        addRent:(state,action)=>{
            state.rentList.push(action.payload);
        },
        removeRent:(state,action)=>{
            state.rentList.filter(list=>list.id !== action.payload)
        }
    }
})

export const {addRent,removeRent} = listSlice.actions;
export default listSlice.reducer;
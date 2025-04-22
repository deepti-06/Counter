import {  createSlice } from "@reduxjs/toolkit";

const hiderSlice= createSlice({
  name:"privacy",
  initialState:false,
  reducers:{
    hide_button:(state)=>{

        state= !state
        return state

    }
  }
})
export const hideActions = hiderSlice.actions;
export default hiderSlice;
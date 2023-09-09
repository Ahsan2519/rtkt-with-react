import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfIcecream: 25
}

const IcecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: ({
        order: ((state)=>{
            state.numberOfIcecream--
        }),
        restocking: ((state,action)=>{
            state.numberOfIcecream += action.payload;
        })
    })
});
export default IcecreamSlice.reducer;
export const {order,restocking} = IcecreamSlice.actions
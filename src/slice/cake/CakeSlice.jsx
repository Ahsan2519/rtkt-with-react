import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCake: 15
}

const CakeSlice = createSlice({
    name: 'cake',
    initialState ,
    reducers: ({
        order: ((state)=>{
            state.numberOfCake--
        }),
        restocking: ((state,action)=>{
            state.numberOfCake += action.payload;
        })
    })
});
export default CakeSlice.reducer;
export const {order,restocking} = CakeSlice.actions

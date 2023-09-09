import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../slice/cake/CakeSlice';
import icecreamReducer from '../slice/icecream/IcecreamSlice';

const store = configureStore({
    reducer: {
        cake: cakeReducer, 
        icecream: icecreamReducer, 
    },
});

export default store
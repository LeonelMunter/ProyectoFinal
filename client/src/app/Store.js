import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
const store = configureStore({
    slice: counterReducer

})

export default store
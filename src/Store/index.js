import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slice/userSlice';

export default configureStore({
    reducer: {
        curentUser: userReducer,
    },
})
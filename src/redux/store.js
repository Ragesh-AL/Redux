import { configureStore } from '@reduxjs/toolkit'
import ShoppingReducer from './shoppingSlice'

export default configureStore({
    reducer: {
        shopSlice: ShoppingReducer
    },
})
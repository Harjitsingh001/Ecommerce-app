import { createSlice } from '@reduxjs/toolkit'
const initialState = [];

// function 
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // function -> reducer
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.id);
        }   
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer;
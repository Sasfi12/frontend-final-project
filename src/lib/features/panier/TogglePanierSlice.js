import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    toggle: false, 
    content : []
}
export const HandlePanier = createSlice(
    {
        name:"panier" ,
        initialState,
        reducers: {
            addToCart : (state , action) => {
                state.content = [...state.content , action.payload]
                

                
            }, 
            removeFromCart : () => {

            }, 
            resetCart : (state  ) => {
                state.content = initialState.content
            },
            changeToggle : (state) => {
                state.toggle = !state.toggle
            } 
        }

    }
)
export const {changeToggle , addToCart , removeFromCart , resetCart} = HandlePanier.actions
export default HandlePanier.reducer
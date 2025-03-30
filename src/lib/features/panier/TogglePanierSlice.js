import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    toggle: false, 
    content : {}
}
export const HandlePanier = createSlice(
    {
        name:"panier" ,
        initialState,
        reducers: {
            addToCart : () => {

            }, 
            removeFromCart : () => {

            }, 
            resetCart : () => {

            },
            changeToggle : (state) => {
                state.toggle = !state.toggle
            } 
        }

    }
)
export const {changeToggle} = HandlePanier.actions
export default HandlePanier.reducer
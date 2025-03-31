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
                let check = true ; 
                state.content.forEach((elem) => {
                    if(elem.id === action.payload.id) {
                        check = false  
                    } 
                    
                })
                if(check) state.content = [...state.content , action.payload]
                

                
            }, 
            removeFromCart : () => {
                state.content.forEach
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
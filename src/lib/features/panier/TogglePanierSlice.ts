import { Book } from "@/lib/apiTypes";
import { createSlice } from "@reduxjs/toolkit";
interface PanierState {
    toggle : boolean, 
    content : Book[]
}
const initialState = {
    toggle: false, 
    content : []
}
export const HandlePanier = createSlice(
    {
        name:"panier" ,
        initialState,
        reducers: {
            addToCart : (state : PanierState , action) => {
                let check = true ; 
                state.content.forEach((elem : Book) => {
                    if(elem.id === action.payload.id) {
                        check = false  
                    } 
                    
                })
                if(check) state.content = [...state.content , action.payload]
                

                
            }, 
            removeFromCart : (state : PanierState , action) => {
                state.content = state.content.filter((e) => e.id != action.payload)
                console.log(action.payload)
            }, 
            resetCart : (state : PanierState  ) => {
                state.content = initialState.content
            },
            changeToggle : (state : PanierState) => {
                state.toggle = !state.toggle
            } 
        }

    }
)
export const {changeToggle , addToCart , removeFromCart , resetCart} = HandlePanier.actions
export default HandlePanier.reducer
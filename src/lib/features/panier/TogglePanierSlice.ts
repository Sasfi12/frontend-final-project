import { Book } from "@/lib/apiTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PanierState, recuperatedBook } from "../sliceTypes";
type stateTypes = {
    toggle: boolean, 
    content: recuperatedBook[]
}
const initialState : stateTypes = {
    toggle: false, 
    content : []
}
export const HandlePanier = createSlice(
    {
        name:"panier" ,
        initialState,
        reducers: {
            addToCart : (state : PanierState , action : PayloadAction<recuperatedBook>) => {
                let check = true ; 
                state.content.forEach((elem : recuperatedBook) => {
                    if(elem.id === action.payload.id) {
                        check = false  
                    } 
                    
                })
                if(check) state.content = [...state.content , action.payload]
                

                
            }, 
            removeFromCart : (state : PanierState , action : PayloadAction<number>) => {
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
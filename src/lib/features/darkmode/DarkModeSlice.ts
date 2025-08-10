import { createSlice } from "@reduxjs/toolkit"
import { DarkmodeState } from "../sliceTypes"
const initialState : DarkmodeState = {
    toggle: false
}
const DarkModeSlice = createSlice( {
    name: "darkmode",
    initialState,
    reducers : {
        darkModeClick : (state : DarkmodeState) => {
            state.toggle = !state.toggle
            console.log(state.toggle)
        } 
    }
})

export const {darkModeClick} = DarkModeSlice.actions 
export default DarkModeSlice.reducer 
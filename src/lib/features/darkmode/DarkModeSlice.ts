import { createSlice } from "@reduxjs/toolkit"
interface DarmodeState {
    toggle : boolean
}
const initialState : DarmodeState = {
    toggle: false
}
const DarkModeSlice = createSlice( {
    name: "darkmode",
    initialState,
    reducers : {
        darkModeClick : (state : DarmodeState) => {
            state.toggle = !state.toggle
            console.log(state.toggle)
        } 
    }
})

export const {darkModeClick} = DarkModeSlice.actions 
export default DarkModeSlice.reducer 
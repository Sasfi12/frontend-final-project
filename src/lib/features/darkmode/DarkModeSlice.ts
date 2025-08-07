import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    toggle: false
}
const DarkModeSlice = createSlice( {
    name: "darkmode",
    initialState,
    reducers : {
        darkModeClick : (state) => {
            state.toggle = !state.toggle
            console.log(state.toggle)
        } 
    }
})

export const {darkModeClick} = DarkModeSlice.actions 
export default DarkModeSlice.reducer 
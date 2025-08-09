const { createSlice } = require("@reduxjs/toolkit");
import { RootState } from "../../store";
interface CounterState {
    count : number 
}
const initialState : CounterState =  {
    count: 0
}
const CounterSlice = createSlice(
    {
        name: "counter",
        initialState,
        reducers : {
            ad : (state : CounterState) => {
                state.count += 1 
            },
            sb : (state : CounterState) => {
                state.count -= 1 
            },
            reset : (state : CounterState) => {
                state.count = 0
            }
        }
    }
)
export const {ad , sb , reset } = CounterSlice.actions
export default CounterSlice.reducer 
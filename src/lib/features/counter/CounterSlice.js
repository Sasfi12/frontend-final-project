const { createSlice } = require("@reduxjs/toolkit");
const initialState =  {
    count: 0
}
const CounterSlice = createSlice(
    {
        name: "counter",
        initialState,
        reducers : {
            ad : (state) => {
                state.count += 1 
            },
            sb : (state) => {
                state.count -= 1 
            },
            reset : (state) => {
                state.count = 0
            }
        }
    }
)
export const {ad , sb , reset } = CounterSlice.actions
export default CounterSlice.reducer 
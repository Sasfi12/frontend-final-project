import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './features/counter/CounterSlice'
import PanierReducer from './features/panier/TogglePanierSlice'
import DarkmodeReducer from './features/darkmode/DarkModeSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {  counter : CounterReducer,
                panier : PanierReducer,
                darkmode : DarkmodeReducer}
  })
}

// Infer the type of makeStore 
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

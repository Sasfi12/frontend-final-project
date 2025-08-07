import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./features/counter/CounterSlice"
import PanierReducer from "./features/panier/TogglePanierSlice"
import DarkmodeReducer from './features/darkmode/DarkModeSlice'
export const store = configureStore({
    reducer: { counter : CounterReducer, 
               panier : PanierReducer, 
               darkmode : DarkmodeReducer
        }
  })

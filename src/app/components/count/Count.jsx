"use client" ; 
import { ad, reset, sb } from "@/lib/features/counter/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Count() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch( ad() )}>+</button>
        <button onClick={() => dispatch( sb()  )}>-</button>
        <button onClick={() => dispatch( reset() )}>reset</button>
        </div>
    )
}
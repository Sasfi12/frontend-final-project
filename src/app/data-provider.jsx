"use client";
import  {createContext, useEffect, useState } from "react";
import axios from "axios";
export const DataProvider = createContext(null)
export const Data = ({children})  => {
    const [data , setData] = useState(null)
    const [error , setError] = useState(null)
    
    useEffect(() => {
        axios.get("https://example-data.draftbit.com/books")
        .then((response) => setData(response.data))
        .then((error) => setError(error.message))
    } , [])    
    if(error ) return <div>Error : {error}</div>
    return (
        <>
        {data ?
            <DataProvider.Provider value={data}>
                {children}
            </DataProvider.Provider>
            : 
            <h1>Loading...</h1>}
        </>
    )
}
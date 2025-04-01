"use client";
import logo from "../../public/ReadLeaf.png"
import Image from "next/image";
import  {createContext, useEffect, useState } from "react";
import axios from "axios";
export const DataProvider = createContext()
export default function Data ({children}) {
    const [data , setData] = useState(null)
    const [error , setError] = useState(null)
    setTimeout(() => {
        
    } , 1000)
    useEffect(() => {
        axios.get("https://example-data.draftbit.com/books")
        .then((response) => setData(response.data) )
        .catch((error) => setError(error.message))
    } , [])
    if(error ) return <div>Error : {error}</div>
    return (
        <>
        {data ?
            <DataProvider.Provider value={{data}}>
                {children}
            </DataProvider.Provider>
              : 
              <div className="loading-container">
              <Image alt="loading-logo" src={logo} className="loading-image"/>
              <h1 className="loading-text">Fetching data...</h1>
              </div>}
        </> 
    )
}
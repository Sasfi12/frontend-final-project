"use client";
import logo from "../../public/ReadLeaf.png"
import Image from "next/image";
import  {createContext, useEffect, useState } from "react";
import axios from "axios";
import { Book } from "@/lib/apiTypes";
type DataType = {
    data : Book[]
}

export const DataProvider = createContext<DataType>({ data: []})
export default function Data ({
    children
  }: {
    children: React.ReactNode
  }) 
    {
        console.log(DataProvider);
        const [data , setData] = useState()
        const [error , setError] = useState()
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
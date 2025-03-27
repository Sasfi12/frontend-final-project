"use client"
import { useParams } from "next/navigation"
import { useState , useEffect } from "react";
import axios from "axios";
import Link from "next/link";
export default function Details() {
    const id = useParams()
    const [data , setData] = useState(null) ;  
    const [Error , setError] = useState(null) ; 
    let selected ;  
    useEffect(() => {
      axios.get("https://example-data.draftbit.com/books")
      .then((response) => setData(response.data) )
      .catch((error) => setError(error))
    }, [])
    if(data) {selected = data.find((e) => e.id == id.id ) ; }

    
    return (
        selected ? 
        <div>
            this is your selected products id  : {selected.id}
            <br />
            {selected.title}
            <br />
            <img src={selected.image_url}  alt="" />
            <br />
            {selected.description}
            <br />
            <Link href={"/products"}>Browse More </Link> 
            <br />
            <Link href={"/"}>Go Back to home</Link> 
        </div> : 
        <h1>Loading...</h1>
    )
}
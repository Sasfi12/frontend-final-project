"use client"
import { useParams } from "next/navigation"
import { useContext } from "react";
import Link from "next/link";
import "./product.css"
import { DataProvider } from "@/app/data-provider";
export default function Details() {
    const id = useParams()
    const data = useContext(DataProvider).data 
    let selected ;
    if(data) {selected = data.find((e) => e.id == id.id ) ; }

    
    return (
        selected ? 
        <div className="product-container">
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
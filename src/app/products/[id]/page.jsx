"use client"
import { useParams } from "next/navigation"
import { useContext } from "react";
import Link from "next/link";
import "./product.css"
import { DataProvider } from "@/app/data-provider";
import {addToCart} from "@/lib/features/panier/TogglePanierSlice"
import { useDispatch } from "react-redux";
export default function Details() {
    const dispatch = useDispatch()
    const id = useParams()
    const data = useContext(DataProvider).data 
    let selected ;
    if(data) {selected = data.find((e) => e.id == id.id ) ; }

    
    return (
        selected ? 
        <div className="product-container">
            <div className="nav-options ">
                <Link draggable={false} className="option" href={"/products"}>Browse More </Link> 
                <Link draggable={false} className="option" href={"/"}>Go Back to home</Link> 
            </div>
            this is your selected products id  : {selected.id}
          <h1>{selected.title}</h1>  
            <img src={selected.image_url}  alt="" />
            <p>{selected.description}</p>
            
            <button onClick={() => 
            dispatch( 
                addToCart({
                    title : selected.title, 
                    id: selected.id, 
                    image: selected.image_url , 
                    rating: selected.rating, 
                    format: selected.format ,
                }
            ))
        }>add to cart</button>
        </div> : 
        <h1>Loading...</h1>
    )
}
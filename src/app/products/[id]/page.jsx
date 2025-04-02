"use client"
import { useParams } from "next/navigation"
import { useContext } from "react";
import Link from "next/link";
import "./product.css"
import { DataProvider } from "@/app/data-provider";
import { addToCart } from "@/lib/features/panier/TogglePanierSlice"
import { useDispatch } from "react-redux";
export default function Details() {
    const dispatch = useDispatch()
    const id = useParams()
    const data = useContext(DataProvider).data
    let selected;
    if (data) { selected = data.find((e) => e.id == id.id) }

    console.log(selected)
    return (
        selected &&
        <div className="book-container">
            <div className="book-card-title">
            <h1 className=" book-title text-3xl"><span>{selected.title}</span></h1>
            <div className="book-info">
                
                <div className="book-image">
                    <img src={selected.image_url} alt="" />
                </div>
                <div className="book-about-inside">
                    <h2 className="text-3xl">by <span>{selected.authors}</span></h2>
                    {selected.edition && <h3 className="text-2xl">edition: <span>{selected.edition}</span></h3>}
                    <p className="text-2xl">products id: <span>{selected.id}</span></p>
                    <button className="add-to-cart" onClick={() =>
                        dispatch(
                            addToCart({
                                title: selected.title,
                                id: selected.id,
                                image: selected.image_url,
                                rating: selected.rating,
                                format: selected.format,
                            }
                            ))
                    }>add to cart</button>
                    <div className="book-about-info text-1xl">
                    <p className="text-gray-600 fs-1">format : {selected.format}</p>
                    <p className="text-gray-600">rating : {selected.rating}</p>
                    <p className="text-gray-600">reviews : {selected.rating_count}</p>
                    <p className="text-gray-600">pages : {selected.num_pages}</p>
                </div>     
                </div>
            </div>
            </div>
               
            <div className="book-about d-flex flex-column">
                <div>
                    <h1 className="text-4xl">About: </h1>
                <p className="text-2xl">{selected.description}</p>
                </div>    

               

            </div>
            
        </div>
    )
}
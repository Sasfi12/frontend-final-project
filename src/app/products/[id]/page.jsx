"use client"
import { useParams } from "next/navigation"
import { useContext } from "react";
import Link from "next/link";
import "./product.css"
import { DataProvider } from "@/app/data-provider";
import { addToCart } from "@/lib/features/panier/TogglePanierSlice"
import { useDispatch, useSelector } from "react-redux";
export default function Details() {
    const dark = useSelector((state) => state.darkmode.toggle)
    const dispatch = useDispatch()
    const id = useParams()
    const data = useContext(DataProvider).data
    let selected;
    if (data) { selected = data.find((e) => e.id == id.id) }
    console.log(selected)
    return (
        selected &&
        <div className={`book-container ${dark ? "dark" : ""}`}>
            <div className={`book-card-title`}>
                <h1 className=" book-title text-3xl"><span>{selected.title}</span></h1>
                <div className={`book-info ${dark ? "dark" : ""}`}>

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
                            <p>format : {selected.format}</p>
                            <p>rating : {selected.rating}</p>
                            <p>reviews : {selected.rating_count}</p>
                            <p>pages : {selected.num_pages}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="book-about d-flex flex-column">
                <div>
                    <h1 className="text-4xl">About: </h1>
                    <p className="text-1xl book-about-text">{selected.description}</p>
                </div>



            </div>

        </div>
    )
}
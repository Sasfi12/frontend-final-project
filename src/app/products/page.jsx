"use client"
import { useContext, useState } from "react"
import Link from "next/link"
import axios from "axios"
import "./products.css"
import { DataProvider } from "../data-provider"
export default function Page() {
  const [searched , setSearched] = useState("")
  

  const searchMade = (e) => {
    setSearched(e.target.value) 
  }
  const data = useContext(DataProvider).data.filter((e) => e.title.toLowerCase().includes(searched) )
    return (
      <div>
        <h1 className="title-products-section">Our Products</h1>
        <input type="text" className="border-5" onChange={(event) => searchMade(event)}/>
      <ul className="articles">
        
        { data ? 
        data.map((elem) => (
          <li key={elem.id}>
            <h1>{elem.title}</h1>
            <div className="img-container">
              <img src={elem.image_url} alt="" />
            </div>
            <Link className="see-more" href={`/products/${elem.id.toString()}`}>See more</Link>
          </li>
        )) : <h1>Loading...</h1>}
      </ul>
    </div>
    )
    
  }
"use client"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import "./products.css"
import { DataProvider } from "../data-provider"
export default function Page() {
  const [searched , setSearched] = useState("")
  const [filter , setFilter] = useState("title")
  const [products , setProducts] = useState(useContext(DataProvider).data)

  const selectedFilter = (e) => {setFilter(e.target.options[e.target.selectedIndex].value)}
  const searchMade = (e) => {
    setSearched(e.target.value) 
  }

  let data = products.filter((e) => e.title.toLowerCase().trim().includes(searched.toLowerCase().trim()) ) 


    return (
      <div>
        <h1 className="title-products-section">Our Products</h1>
        <div className="input-select">
        <input type="text" className="border-5" onChange={(event) => searchMade(event)}/>
        <select className="border-5" onChange={(event) => selectedFilter(event)} name="filters" id="filters">
          <option className="border-5" value="title">Search by title </option>
          <option className="border-5" value="authors">Search by author</option>
          <option className="border-5" value="edition">Search by edition name</option>
          <option className="border-5" value="above">rating above </option>
          <option className="border-5" value="below">rating below</option>
        </select>
        </div>
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
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
  const [data , setData] = useState("")
  const selectedFilter = (e) => {
    setFilter(e.target.options[e.target.selectedIndex].value)
  }
  const searchMade = (e) => {
    setSearched(e.target.value)
  }
useEffect(() => {
  updateData(filter)
} , [filter , searched])

  const updateData = (check) =>{
    if(check != "") {
    switch (check) {
      case "title":
        setData(products.filter((e) => e.title.toLowerCase().trim().includes(searched.toLowerCase().trim()) ) )
        break;
      case "authors":
        setData(products.filter((e) => e.authors.toLowerCase().trim().includes(searched.toLowerCase().trim()) )) 
        break;
      case "edition":
        setData(products.filter((e) => e.edition.toLowerCase().trim().includes(searched.toLowerCase().trim()) )) 
        break; 
      case "id": 
        setData(products.filter((e) => e.id.toString().toLowerCase().trim() == searched.toString() )) 
        break; 
      case "above": 
        setData(products.filter((e) =>  e.rating >= parseFloat(searched))) 
      break; 
      case "below": 
        setData(products.filter((e) => e.rating <= parseFloat(searched))) 
      break;
     

    }}
    }


    return (
      <div>
        <h1 className="title-products-section">Our Products</h1>
        <div className="input-select">
        <input type="text" className="border-5" onChange={(event) => searchMade(event)}/>
        <select className="border-5" onChange={(event) => selectedFilter(event)} name="filters" id="filters">
          <option className="border-5 border-black" value="title">Search by title </option>
          <option className="border-5 border-black" value="authors">Search by author</option>
          <option className="border-5 border-black" value="edition">Search by edition name</option>
          <option className="border-5 border-black" value="id">search by id</option>
          <option className="border-5 border-black" value="above">rating above</option>
          <option className="border-5 border-black" value="below">rating below</option>
        </select>
        </div>
      <ul className="articles">
        
        { data ? 
        data.map((elem) => (
          <li key={elem.id}>
            <div className="see-more-and-id">
            <p className="id">id :{elem.id}</p>
            <Link className="see-more" href={`/products/${elem.id.toString()}`}>See more</Link>
            
            </div>
            
            <h1>{elem.title}</h1>
            
            
            <p>{elem.rating}</p>
            <div className="img-container">
              <img src={elem.image_url} alt="" />
            </div>
            <p> by {elem.authors}</p>
            {elem.edition && <p className="edition">Edition: {elem.edition}</p> }
          </li>
          
        )) : <h1>Loading...</h1>}
        
        {data && data.length <= 0 && <h1>Article searched not found</h1>}
      </ul>

    </div>
    )
    
  }
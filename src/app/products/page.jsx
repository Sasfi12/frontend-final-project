"use client"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import "./products.css"
import { DataProvider } from "../data-provider"
import { useSelector } from "react-redux"
export default function Page() {
  const [searched , setSearched] = useState("")
  const [filter , setFilter] = useState("title")
  const [products , setProducts] = useState(useContext(DataProvider).data)
  const [data , setData] = useState("")
  const [genre , setGenre] = useState("all")
  const intFilters = ["id" , "above" , "below"]
  const dark = useSelector((state) => state.darkmode.toggle)
  const selectedFilter = (e) => {
    setFilter(e.target.options[e.target.selectedIndex].value)
  }
  const searchMade = (e) => {
    setSearched(e.target.value)
  }
  const setFiltered = (e) => {
    setGenre(e.target.options[e.target.selectedIndex].value)
    
  }
  console.log(genre)
useEffect(() => {
  updateData(filter , genre)
} , [filter , searched])

  const updateData = (checkSearchFilter , checkGenreFilter) =>{
    if(checkSearchFilter != "") {
    switch (checkSearchFilter) {
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
        setData(products.filter((e) => e.id.toString().toLowerCase().trim() == searched.toString())) 
        break; 
      case "genre": 
        setData(products.filter((e) => e.genre_list.trim().toLowerCase().includes(searched.toLowerCase())))

    }}
    
    }


    return (
      <div className={`products-container ${dark ? "dark" : ""}`}>
        <h1 className="title-products-section">Our Products</h1>
        <div className="input-select">
        <input type="text" className="border-5" onChange={(event) => searchMade(event)}/>
        <select className="border-5" onChange={(event) => selectedFilter(event)} name="filters" id="filters">
          <option className="border-5 border-black" value="title">Search by title </option>
          <option className="border-5 border-black" value="authors">Search by author</option>
          <option className="border-5 border-black" value="edition">Search by edition name</option>
          <option className="border-5 border-black" value="id">search by id</option>
          <option className="border-5 border-black" value="genre">search by genre</option>
        </select>
        <div>
        <select className="border-5" onChange={(event) => setFiltered(event)} name="filters" id="filters">
          <option className="border-5 border-black" value="All">All</option>
          <option className="border-5 border-black" value="Science Fiction">Science Fiction</option>
          <option className="border-5 border-black" value="Fantasy">Fantasy</option>
          <option className="border-5 border-black" value="Young Adult">Young Adult</option>
          <option className="border-5 border-black" value="Dystopia">Dystopia</option>
          
        </select>
        </div>
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
            
            
            <p>{elem.rating} / 5</p>
            <div className="img-container">
              <img src={elem.image_url} alt="" />
            </div>
            <p> by {elem.authors}</p>
            {elem.edition && <p className="edition">Edition: {elem.edition}</p> }
          </li>
          
        )) : <h1>Loading...</h1>}
        
        {data && data.length <= 0 && intFilters.includes(filter) ? <h1>Please enter a valid numerical value to find what you are looking for</h1>
        : data && data.length <= 0 && <h1>No articles meet the search conditions</h1>}
      </ul>

    </div>
    )
    
  }
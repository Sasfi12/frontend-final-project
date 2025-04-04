"use client"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import "./products.css"
import { DataProvider } from "../data-provider"
import { useSelector } from "react-redux"
export default function Page() {
  const [searched , setSearched] = useState("")
  const [filter , setFilter] = useState("title")
  const [genre , setGenre] = useState("All")
  const [products , setProducts] = useState(useContext(DataProvider).data) // Valeur initial 
  const [filteredByGenre , setFilteredByGenre] = useState(products) // valeur filtrer sur base du genre.
  const [data , setData] = useState("") // Valeur final 
  const intFilters = ["id" , "above" , "below"]
  const dark = useSelector((state) => state.darkmode.toggle)
  const selectedFilter = (e) => {
    setFilter(e.target.options[e.target.selectedIndex].value)
  }
  const searchMade = (e) => {
    setSearched(e.target.value)
  }
  const filtered = (e) => {
    setGenre(e.target.options[e.target.selectedIndex].value)
  }


useEffect(() => {
  const runFiltering = () => {

    let genreFiltered = products;
    if (genre !== "All") {
      genreFiltered = products.filter((e) =>
        e.genre_list.split(",").includes(genre)
      );
    }

    let finalFiltered = genreFiltered;
    if (searched.trim() !== "") {
      switch (filter) {
        case "title":
          finalFiltered = genreFiltered.filter((e) =>
            e.title.toLowerCase().includes(searched.toLowerCase())
          );
          break;
        case "authors":
          finalFiltered = genreFiltered.filter((e) =>
            e.authors.toLowerCase().includes(searched.toLowerCase())
          );
          break;
        case "edition":
          finalFiltered = genreFiltered.filter((e) =>
            e.edition.toLowerCase().includes(searched.toLowerCase())
          );
          break;
        case "id":
          finalFiltered = genreFiltered.filter(
            (e) => e.id.toString() === searched.toString()
          );
          break;
        case "genre":
          finalFiltered = genreFiltered.filter((e) =>
            e.genre_list.toLowerCase().includes(searched.toLowerCase())
          );
          break;
        default:
          break;
      }
    }

    setFilteredByGenre(genreFiltered);
    setData(finalFiltered);
  };

  runFiltering();
}, [filter, searched, genre, products]);

// const update = () => {
//   filterData(genre)
//   updateData(filter , genre)

// }
//   const filterData = (check) => {
//     setFilteredByGenre(products)
//     switch(check) {
      
//       case "All": 
//        return setFilteredByGenre(products)
//       default:  
//        return setFilteredByGenre(products.filter((e) => e.genre_list.split(",").includes(check)))
//     }
// }
//   console.log(filteredByGenre)
//   const updateData = (checkSearchFilter) =>{
//     if(checkSearchFilter != "") {
    
//     switch (checkSearchFilter) {
//       case "title":
//         setData(filteredByGenre.filter((e) => e.title.toLowerCase().trim().includes(searched.toLowerCase().trim())) )
//         break;
//       case "authors":
//         setData(filteredByGenre.filter((e) => e.authors.toLowerCase().trim().includes(searched.toLowerCase().trim()) )) 
//         break;
//       case "edition":
//         setData(filteredByGenre.filter((e) => e.edition.toLowerCase().trim().includes(searched.toLowerCase().trim()) )) 
//         break; 
//       case "id": 
//         setData(filteredByGenre.filter((e) => e.id.toString().toLowerCase().trim() == searched.toString())) 
//         break; 
//       case "genre": 
//         setData(filteredByGenre.filter((e) => e.genre_list.trim().toLowerCase().includes(searched.toLowerCase())))
//       }}
// }


    return (
      <div className={`products-container ${dark ? "dark" : ""}`}>
        <h1 className="title-products-section">Our Products</h1>
        <div className="input-select">
        <div className="advanced-search-container">
        <input type="text" className="border-5" onChange={(event) => searchMade(event)}/>
        <select className="border-5" onChange={(event) => selectedFilter(event)} name="filters" id="filters">
          <option className="border-5 border-black" value="title">Search by title </option>
          <option className="border-5 border-black" value="authors">Search by author</option>
          <option className="border-5 border-black" value="edition">Search by edition name</option>
          <option className="border-5 border-black" value="id">search by id</option>
          <option className="border-5 border-black" value="genre">search by genre</option>
        </select>
        </div>
        <select className="border-5" onChange={(event) => filtered(event)} name="filters" id="filters">
          <option className="border-5 border-black" value="All">All</option>
          <option className="border-5 border-black" value="Science Fiction">Science Fiction</option>
          <option className="border-5 border-black" value="Fantasy">Fantasy</option>
          <option className="border-5 border-black" value="Young Adult">Young Adult</option>
          <option className="border-5 border-black" value="Dystopia">Dystopia</option>
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
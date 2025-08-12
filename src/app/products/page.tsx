"use client"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import "./products.css"
import { DataProvider } from "../data-provider"
import { useAppSelector } from "@/lib/hooks"
import { recuperatedBook } from "@/lib/features/sliceTypes"
import { Book } from "@/lib/apiTypes"
export default function Page() {
  const [searched , setSearched] = useState("")
  const [filter , setFilter] = useState("title")
  const [genre , setGenre] = useState("All")
  const [products , setProducts] = useState(useContext(DataProvider)) // Valeur initial 
  const [filteredByGenre , setFilteredByGenre] = useState(products) // valeur filtrer sur base du genre.
  const [data , setData] = useState<Book[]>([]) // Valeur final : filtré sur base du genre et de la recherche. 
  const intFilters : string[] = ["id" , "above" , "below"]
  const dark = useAppSelector((state) => state.darkmode.toggle)
  const selectedFilter  = (e : React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.options[e.target.selectedIndex].value)
  }
  const searchMade = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearched(e.target.value)
  }
  const filtered = (e : React.ChangeEvent<HTMLSelectElement>) => {
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
        data.map((elem : Book) => (
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
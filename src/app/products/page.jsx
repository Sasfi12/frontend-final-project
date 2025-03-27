"use client"
import { useContext, useState } from "react"
import Link from "next/link"
import axios from "axios"
import "./products.css"
import { DataProvider } from "../data-provider"
export default function Page() {
  const data = useContext(DataProvider)
  console.log(data)
    return (
      <ul className="articles">
        
        { data ? 
        data.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <div className="img-container">
              <img src={post.image_url} alt="" />
            </div>
            
            <Link href={`/products/${post.id.toString()}`}>See more</Link>
          </li>
        )) : <h1>Loading...</h1>}
      </ul>
    )
  }
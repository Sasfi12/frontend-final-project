"use client";
import "./main.css"
import { useContext, useState } from "react";
import { DataProvider } from "./data-provider";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Features";
export default function Home() {
  const data = useContext(DataProvider).data
  // randomized data for the carousel. 
  const randomize = () => {
    return data[Math.floor(Math.random() * data.length )] 
  }
  const [randomData, setRandomData] = useState([
                                                randomize(), 
                                                randomize(), 
                                                randomize(), 
                                                randomize(), 
                                                randomize()]
  )
  const [wellRated , setWellRated] = useState()
  const [recommended , setRecommended] = useState()

  return (
    <div className="main-page min-w-full ">
      <h1 className="title text-5xl text-center">Welcome to ReadLeaf</h1>

      <Carousel randomized_data={randomData}/>
      <Featured well_rated={wellRated} recommended={recommended}/>
    </div>
  );
}

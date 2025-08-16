"use client";
import "./main.css"
import { useContext, useState } from "react";
import { DataProvider } from "./data-provider";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Features";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Book } from "@/lib/apiTypes";
export default function Home() {
  const data = useContext(DataProvider)
  const dark = useSelector<RootState>((state) => state.darkmode.toggle)
  // randomized data for the carousel. 
  const randomize = () => {
    return data[Math.floor(Math.random() * data.length )] 
  }
  const allWellRated = () => {
    let array : Book[] = [] ;
    data.forEach(e => {
      if(e.rating >= 4.5) {
        array = [...array , e]
      }
    })
    return array;
  }
  const recommendedId = () => {
    const recommended = [29 ,44 , 45 , 81 , 108 , 167 , 38 ,222 , 240] 
    let array : Book[] = [] ;
    data.forEach(e => {
      if (recommended.includes(e.id)) {
        array = [...array , e]
      }
    })
    return array
  
  }
  const [randomData, setRandomData] = useState(
    [
    randomize(), 
    randomize(), 
    randomize(), 
    randomize(), 
    randomize()
    ]
)
  
  const [wellRated , setWellRated] = useState(allWellRated)
  const [recommended , setRecommended] = useState(recommendedId)
  return (
    <div className={`main-page min-w-full ${dark && "dark"} `}>
      <h1 className="title text-5xl text-center">Welcome to ReadLeaf</h1>

      <Carousel randomized_data={randomData}/>
      <Featured well_rated={wellRated} recommended={recommended}/>
    </div>
  );
}

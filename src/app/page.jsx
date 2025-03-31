"use client";
import "./main.css"
import { useContext } from "react";
import { DataProvider } from "./data-provider";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Features";
export default function Home() {
  const data = useContext(DataProvider).data
  return (
    <div className="main-page min-w-full ">
      <h1 className="title text-5xl text-center">Welcome to ReadLeaf</h1>

      <Carousel data={data}/>
      <Featured data={data}/>
    </div>
  );
}

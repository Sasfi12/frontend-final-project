"use client";
import Image from "next/image";
import "./main.css"
import ReadLeaf from "../../public/ReadLeaf.png"
import { useContext } from "react";
import { DataProvider } from "./data-provider";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Features";
export default function Home() {
  const data = useContext(DataProvider).data
  return (
    data ? 
    <div className="main-page min-w-full ">
      <Image src={ReadLeaf} height={250} width={250} alt="ReadLeaf logo"></Image>
      <h1 className="title text-5xl text-center">Welcome to ReadLeaf</h1> 
      <Carousel/>
      <Featured/>
    </div>
    : 
    <h1>Loading...</h1>
  );
}

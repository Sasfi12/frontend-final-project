"use client";
import Image from "next/image";
import { useContext } from "react";
import { DataProvider } from "./data-provider";
import Link from "next/link";
import Count from "./components/count/Count";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Features";
export default function Home() {
  const data = useContext(DataProvider).data
  return (
    <div className=" min-w-full ">
      <h1 className="title text-5xl text-center">Welcome to ReadLeaf</h1> 
      <Carousel/>
      <Featured/>
    </div>
  );
}

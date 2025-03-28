"use client";
import Image from "next/image";
import { useContext } from "react";
import { DataProvider } from "./data-provider";
import Link from "next/link";
export default function Home() {
  const data = useContext(DataProvider).data
  return (
    <div>
      <h1>Nos recommendations : </h1>
    <div>
      {data.map((e) => {
        return (
          <div key={e.id}>{e.title}</div>
        )
      })}
    </div>
    </div>
  );
}

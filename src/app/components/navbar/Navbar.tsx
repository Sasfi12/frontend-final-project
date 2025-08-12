"use client";
import "./Navbar.css"
import Image from "next/image";
import moon from "../../../../public/moon-with-stars.png"
import star from "../../../../public/star.svg"
import logo from "../../../../public/ReadLeaf.png"
import Link from "next/link";
import Panier from "../panier/Panier";
import { useEffect, useState } from "react";
import { changeToggle } from "@/lib/features/panier/TogglePanierSlice";
import { darkModeClick } from "@/lib/features/darkmode/DarkModeSlice";
import { useSelector , useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
export default function Navbar() {
    const dispatch = useAppDispatch() 
    const panier = useAppSelector((state) => state.panier.toggle)
    const dark = useAppSelector((state) => state.darkmode.toggle)
    return (
    <div className="nav-panier-container">
        <nav className={dark ? "dark" : ""}>
                <Image height={100} width={100} src={logo} alt="ReadLeaf_logo"/>
            <div className="nav-options">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
            </div>
            <div className={`nav-img`}>  
                <Image onClick={() => dispatch( darkModeClick() )} className="img" src={moon} alt="dark mode image" height={40} width={40}/>
                <Image  onClick={() => dispatch(changeToggle())} src={star} alt="star" height={40} width={40} />
            </div>
        </nav>
        {panier && <Panier/>}
    </div>
    )
}
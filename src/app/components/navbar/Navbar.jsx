"use client";
import "./Navbar.css"
import Image from "next/image";
import moon from "../../../../public/moon-with-stars.png"
import star from "../../../../public/star.png"
import logo from "../../../../public/ReadLeaf.png"
import Link from "next/link";
export default function Navbar() {
    
    return (
        <nav>
                <Image height={100} width={100} src={logo} alt="ReadLeaf_logo"></Image>
            <div className="nav-options">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
            </div>
            <div className="nav-img">  <Image onClick={() => darkMode()} className="img" src={moon} alt="dark mode image" height={40} width={40}/>
                <Image onClick={() => showCard()} src={star} alt="star" height={40} width={40} />
            </div>

        </nav>
    )
}
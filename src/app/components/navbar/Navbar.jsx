"use client";
import "./Navbar.css"
import Image from "next/image";
import moon from "../../../../public/moon-with-stars.png"
import cart from "../../../../public/cart.png"
import Link from "next/link";
export default function Navbar() {
    return (
        <nav>
            <h1 className="title">ReadLeaf</h1>
            <div className="nav-options">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
            </div>
            <div className="nav-img">  <Image /*onClick={() => darkMode()}*/ className="img" src={moon} alt="dark mode image" height={50} width={50}/>
                    <Image /*onClick{() => showCard()}*/ src={cart} height={50} width={50} />
            </div>
        </nav>
    )
}
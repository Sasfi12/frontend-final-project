import "./Panier.css"
import Image from "next/image"
import star from "../../../../public/star.svg"
import { changeToggle } from "@/lib/features/panier/TogglePanierSlice";
import { useDispatch } from "react-redux";
export default function Panier() {
    const dispatch = useDispatch()
    return (
        <div className="panier-wrapper">
            <div><h1 className="close-button" alt="star" onClick={() => dispatch(changeToggle())}>CLOSE</h1></div>
        </div>
    )
}
import "./Panier.css"
import { changeToggle , resetCart } from "@/lib/features/panier/TogglePanierSlice";
import { useDispatch , useSelector} from "react-redux";
import Image from "next/image";
export default function Panier() {
    const panier = useSelector((state) => state.panier.content)
    const dispatch = useDispatch()
    return (
        <div className="panier-wrapper">
            <div className="buttons">
                <h1 className="close-button" alt="close" onClick={() => dispatch(changeToggle())}>CLOSE</h1>
                <h1 className="reset-button" alt="reset" onClick={() => dispatch(resetCart())}>RESET</h1>    
                    
            </div>
            <h1 className="text-center fs-6">List of Favorites </h1>
            <div className="panier-container">
                
                {panier ? panier.map((e) => {
                    return (
                        <div className="panier-elem" key={e.id}>
                            <img src={e.image} alt={`image_${e.id}`}/>
                            <div className="panier-elem-text">
                                <p>{e.title} </p>
                                <p>{e.rating}</p>
                                <p>{e.format}</p>
                                <p>{}</p>

                            </div>
                        </div>
                    )
                    
                }) : <h2>empty...</h2>}
            </div>
        </div>
    )
}
import "./Panier.css"
import { changeToggle , resetCart } from "@/lib/features/panier/TogglePanierSlice";
import { useDispatch , useSelector} from "react-redux";
import { removeFromCart } from "@/lib/features/panier/TogglePanierSlice";
export default function Panier() {
    const panier = useSelector((state) => state.panier.content)
    const dispatch = useDispatch()
    return (
        <div className="panier-wrapper">
            <div className="buttons">
                <h1 className="option-button close" alt="close" onClick={() => dispatch(changeToggle())}>CLOSE</h1>
                <h1 className="option-button reset" alt="reset" onClick={() => dispatch(resetCart())}>RESET</h1>      
            </div>
            <h1 className="text-center fs-6">List of Favorites </h1>
            <div className="panier-container">
                
                {panier ? panier.map((e) => {
                    return (
                        <div className="panier-elem" key={e.id}>
                            <div className="img-container">
                            <img src={e.image} alt={`image_${e.id}`}/>
                            </div>
                            <div className="panier-elem-text">
                                <p>title :{e.title} </p>
                                <p>rating :{e.rating}</p>
                                <p>format :{e.format}</p>
                                <button className="option-button" onClick={() => dispatch( removeFromCart(e.id) )}>Remove </button>

                            </div>
                        </div>
                    )
                    
                }) : <h2>empty...</h2>}
            </div>
        </div>
    )
}
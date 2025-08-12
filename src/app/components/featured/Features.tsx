import { Book } from "@/lib/apiTypes"
import "./Featured.css"
import Link from "next/link"
export default function Featured({well_rated , recommended} : {well_rated : Book[] , recommended : Book[]}) {
    return (
        
        <section className="featured-items">
            { well_rated && 
            <div className="good-rates-section ">
                <h1 className="rate-title"> well rated items </h1>
                <div className="good-rates-container">
                {well_rated.map((e , index) => {
                    return (
                    <div key={e.id} className="rate-item">
                        <h1 className="rate-title">{e.title}</h1>
                        <img src={e.image_url} alt={`${e.title} image`} />
                        <p className="rate-rating">{e.rating}/5</p>
                        <Link href={`/products/${e.id}`}>see more</Link>
                    </div>
                    )
                })}
                </div>
            </div>
            }
            { recommended &&
                
            <div className="recommended-section ">
                <h1 className="recommended-title">recommended books</h1>
               <div className="recommended-container">  
                {recommended.map((e) => {
                    return (
                    <div key={e.id} className="recommended-item">
                        <h1 className="recommended-title">{e.title}</h1>
                        <img src={e.image_url} alt={`${e.title} image`} />
                        <Link href={`/products/${e.id}`}>see more</Link>
                    </div>
                    )
                })}
                </div>
            </div>
            }
        </section>
    )
}
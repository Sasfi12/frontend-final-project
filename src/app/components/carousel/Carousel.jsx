import "./Carousel.css"
import Link from "next/link";
export default function Carousel({randomized_data}) { 
    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
    return (
        <section className="carousel-section">
            <div className="carousel-container">
                    <div className="carousel-buttons">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                    <div className="carousel-items">
                        {randomized_data && 
                            randomized_data.map((e) => {
                                return (
                                <div className="carousel-item" key={e.id}>
                                    <h1 className="text-2xl">{e.title}</h1>
                                    <img src={e.image_url} alt={`${e.title} image`} />
                                    <Link href={`products/${e.id}`}>See more</Link>
                                </div>
                            )
                            })}
                    </div> 
                    
            </div>
            
        </section>
    )
}
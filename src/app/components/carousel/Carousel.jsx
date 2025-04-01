import "./Carousel.css"
export default function Carousel({randomized_data}) { 
    console.log(randomized_data)
    return (
        <section className="carousel-section">
            <h1>Carousel</h1>
            <div className="carousel-container">
                    <div className="carousel-buttons">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                    <div className="carousel-items">
                        {randomized_data && 
                            randomized_data.map((e , index) => {
                                return (
                                <div className="carousel-item" key={e.id}>
                                    <h1>{e.title}</h1>
                                    <img src={e.image_url} alt={`${e.title} image`} />
                                </div>
                            )
                            })}
                    </div> 
                    
            </div>
            
        </section>
    )
}
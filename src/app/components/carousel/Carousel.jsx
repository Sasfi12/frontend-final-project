import { useEffect, useState } from "react";
import "./Carousel.css"
import Link from "next/link";
export default function Carousel({randomized_data}) { 
    const [currentIndex , setCurrentIndex] = useState(0);
    const prevElem = () => {
        if(currentIndex == 2) setCurrentIndex(-2) 
        else if(currentIndex !== 2) setCurrentIndex((currentIndex) => currentIndex + 1)
    }
    const nextElem = () => {
        if(currentIndex == -2) setCurrentIndex(2)
        else if(currentIndex !== -2) setCurrentIndex((currentIndex) => currentIndex - 1)
    }
    useEffect(() => {
       let carouselInterval =  setInterval( nextElem, 2000)
        return () => clearInterval(carouselInterval)
    },[])
    // useEffect(() => {
    //     let interval = setInterval(() => {
    //       setSecondsDown((prevSeconds) => --prevSeconds);
    //     }, 1000); // Set interval to 1s for realistic timing
      
    //     return () => clearInterval(interval);
    //   }, []);
    return (
        <section className="carousel-section">
            <button className="previous-button" onClick={() => prevElem()}>Previous</button>
            <div className="carousel-container">
                   
                    <div className="carousel-items">
                        {randomized_data && 
                            randomized_data.map((e) => {
                                return (
                                <div className="carousel-item" style={{transition: "0.5s",transform: `translateX(${69 * currentIndex}rem)`}} id={`index${e.id}`} key={e.id}>
                                    <h1 >{e.title}</h1>
                                    <img src={e.image_url} alt={`${e.title} image`} />
                                    <Link href={`products/${e.id}`}>See more</Link>
                                </div>
                            )
                            })}
                    </div> 
                    
            </div>
            <button className="next-button" onClick={() => nextElem()}>Next</button>
        </section>
    )
}
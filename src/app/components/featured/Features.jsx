
export default function Featured({well_rated , recommended}) {
    console.log(well_rated)
    console.log(recommended)
    return (
        
        <section className="featured-items">
            { well_rated && 
            <div className="good-rates-section">
                well rated items 

                {well_rated.map((e , index) => {
                    return (
                        <div key={e.id}>
                    <h1>{e.title}</h1>
                    </div>
                    )
                })}
            </div>
            }
            { recommended &&
            <div className="recommended-section">
                recommended books 
                {recommended.map((e) => {
                    return (
                    <div key={e.id}>
                        <h1>
                            {e.title}
                        </h1>
                    </div>
                    )
                })}
            </div>
            }
        </section>
    )
}
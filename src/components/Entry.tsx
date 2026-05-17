
interface EntryProps
{
    img: { src: string, alt: string }
    countryName: string
    cityName: string
    date: string
    description: string
}


export default function Entry({ img, countryName, cityName, date, description }: EntryProps)
{
    return (
        <div className="entry-main-card">
            <img src={img.src} className="entry-main-image" alt={img.alt} />
            <div >
                <div className="entry-first-line">
                    <img src="src/assets/marker.png" alt="Marker icon" />
                    <span>{countryName}</span>
                    <a href="google.com" target="_blank" rel="noopener noreferrer">View on Google Map</a>
                </div>
                <h2>{cityName}</h2>
                <h3>{date}</h3>
                <p className="entry-discription">{description}</p>
            </div>
        </div>
    )
}
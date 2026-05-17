
interface EntryProps
{
    id: number
    img: { src: string, alt: string }
    title: string
    country: string
    googleMapsLink: string
    dates: string
    text: string
}


export default function Entry({ id, img, title, country, googleMapsLink, dates, text }: EntryProps)
{
    console.log(id);
    return (
        <div className="entry-main-card">
            <img src={img.src} className="entry-main-image" alt={img.alt} />
            <div >
                <div className="entry-first-line">
                    <img src="src/assets/marker.png" alt="Marker icon" />
                    <span>{country}</span>
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Map</a>
                </div>
                <h2>{title}</h2>
                <h3>{dates}</h3>
                <p className="entry-discription">{text}</p>
            </div>
        </div>
    )
}
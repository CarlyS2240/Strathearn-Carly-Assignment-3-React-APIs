import './styles.css';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */

export const Header = () => {
    return (
        <div className="background">
            <div className="overlay"></div>
            <img className="headerImage" src="https://i.imgur.com/dcevjND.jpg"/>
            <div className="cinemaText">Cosmic Cinemas</div>
            <div className="headingText">Now Playing</div>
            <div className="paragraphText">Blade Runner</div>
            <button className="bookButton" type="button">Book Now</button>
        </div>
    )
}
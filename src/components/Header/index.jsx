import './styles.css';

export const Header = () => {
    return (
        <div className="background">
            <div className="overlay"></div>
            <img className="headerImage" src="https://i.imgur.com/dcevjND.jpg"/>
            <div className="headingText">Now Playing</div>
            <div className="paragraphText">Blade Runner</div>
            <button className="bookButton" type="button">Book Now</button>
        </div>
    )
}
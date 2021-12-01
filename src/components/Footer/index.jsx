import "./styles.css"
import {Link} from 'react-router-dom'; /*Importing Link to route to the MovieDetailsPage from the footer on the homepage*/

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */


 /* Making the Footer component from list, button, and heading elements. The footer also uses Links to provide a quick link to the MovieDetailsPage from the homepage.*/

export const Footer = () => {
    return (
        <>
            <div className="listWrapper">
                <ul className="firstList">
                    <h2 className="listHeading">Cosmic Cinemas</h2>
                </ul>
                <ul className="secondList">
                        <h3>Home</h3>
                    <Link style={{textDecoration: "none"}} to={`/`}>
                        <li>Visit the Homepage</li>
                    </Link>
                </ul>
                <ul className="thirdList">
                    <h3>My Account</h3>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
                <ul className="fourthList">
                    <h3>Movies</h3>
                    <Link style={{textDecoration: "none"}} to={`/movie/Her`}>
                        <li>Her</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={`/movie/Mother`}>
                        <li>Mother</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={`/movie/UnderTheSkin`}>
                        <li>Under The Skin</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={`/movie/Moonlight`}>
                        <li>Moonlight</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={`/movie/Colossal`}>
                        <li>Colossal</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={`/movie/Lost In Translation`}>
                        <li>Lost In Translation</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={`/movie/PaloAlto`}>
                        <li>Palo Alto</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={`/movie/Coherence`}>
                        <li>Coherence</li>
                    </Link>
                    <Link style={{textDecoration: "none"}} to={`/movie/Waves`}>
                        <li>Waves</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}
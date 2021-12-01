import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {ShowtimeButtons} from '../../ShowtimeButtons';
import {Button} from '../../Button';
import spinner from '../../../../src/spinner.gif'


import "./styles.css"
import MoviesOrderContext from '../../../context/moviesOrderContext';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */


export const MovieDetailsPage = (props) => {
    
    const {id} = useParams();

    const [movie, setMovie] = useState({});

    const globalState = useContext(MoviesOrderContext);

    const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(true);



    useEffect (() => {

        const movie = globalState.movies.find(
            (movie) => movie.id.stringValue === id
            
        );
        console.log(id);
        setMovie(movie);
        setShow(false);
    }, [])

    if(movie) {

        return (
            <div className="mDetails">
                <p className="mTitle">{movie.Title?.stringValue}</p>
                <div className="mOverlay"></div>
                <img className="mImage" src={movie.Image?.stringValue}/>
                <p className="mRuntime">Runtime: <span style={{color: "white", fontWeight:300}}>{movie.Runtime?.stringValue}</span></p>
                <p className="mRuntimeText">{movie.Runtime?.stringValue}</p>
                <p className="mReleaseDate">Release Date: <span style={{color: "white", fontWeight:300}}>{movie.ReleaseDate?.stringValue}</span></p>
                <p className="mReleaseDateText">{movie.ReleaseDate?.stringValue}</p>
                <p className="mReleaseDate">Director: <span style={{color: "white", fontWeight:300}}>{movie.Director?.stringValue}</span></p>
                <p className="mReleaseDateText">{movie.Director?.stringValue}</p>
                <hr className="mLine" size="1" width="100%" color="#FF700D"></hr> 
                <p className="mStoryline">Storyline</p>
                <p className="mStorylineText">{movie.Storyline?.stringValue}</p>
                <p className="mTicketTimeText">Choose Your Showtime</p>
                <ShowtimeButtons time1="10:15 AM" time2="01:45 PM" time3="07:55 PM" time4="9:35 PM"></ShowtimeButtons>
                <div className="continueContainer">
                    <Button text="Continue" type="primary" isDisabled={false} action={() => alert("Continue to Checkout")}/>
                </div>
                {
                    loading && <div className="loadOverlay" style={{display: show ? "block" : "none" }}><img className="loadingGIF" src={spinner} alt="loading..." /></div>
                }
            </div>
            
        )

    } else {
        return <p>No movies found</p>
    }


}
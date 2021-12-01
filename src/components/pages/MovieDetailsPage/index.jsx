import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {ShowtimeButtons} from '../../ShowtimeButtons';

import "./styles.css"
import MoviesOrderContext from '../../../context/moviesOrderContext';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */


export const MovieDetailsPage = (props) => {
    
    const {id} = useParams();

    const [movie, setMovie] = useState({});

    const globalState = useContext(MoviesOrderContext);

    useEffect (() => {

        const movie = globalState.movies.find(
            (movie) => movie.id.stringValue === id
            
        );
        console.log(id);
        setMovie(movie);
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
                <ShowtimeButtons></ShowtimeButtons>
           
            </div>
        )

    } else {
        return <p>No movies found</p>
    }


}
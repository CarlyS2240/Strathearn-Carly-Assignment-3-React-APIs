import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';

import "./styles.css"
import MoviesOrderContext from '../../../context/moviesOrderContext';

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
           
            </div>
        )

    } else {
        return <p>No movies found</p>
    }


}
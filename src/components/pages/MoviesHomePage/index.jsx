import { useEffect, useState, useContext} from 'react';

/* Importing the MovieItem component and the Header component to be displayed within the MoviesHomePage component */
import { MovieItem } from '../../MovieItem';
import { Header } from '../../Header';

/* Importing the MoviesOrderContext*/
import MoviesOrderContext from '../../../context/moviesOrderContext';

/* Importing a spinner for the loading state*/
import spinner from '../../../../src/spinner.gif'

import "./styles.css"

export const MoviesHomePage = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); /* Using in the loading state */
    const [show, setShow] = useState(true); /* Using to hide an overlay when the API has finished loading */
    const globalState = useContext(MoviesOrderContext);
    
    useEffect (
        () => {
            getMovies();
        }, []
    );

    const getMovies = async() => {
        /* Getting our data from the API that was created to store data about movies*/ 
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/movies-api-itec-4012/databases/(default)/documents/movies');
            const data = await response.json();
            console.log(data);
            const formattedData = data.documents.map( (item) => {
                return item.fields
            });

            console.log (formattedData);
            setMovies(formattedData);
            globalState.initializeMovies(formattedData);  
            setShow(false); /* Hiding the loading overlay when the API has finished loading*/
            

        }catch(err) {
            console.log (err)
        }
    }

    return (
        <>
        <Header headerImage="https://i.imgur.com/dcevjND.jpg" movieTitle="Blade Runner"></Header>
        <div className="movies-page">
            <h1 className="movies-title">Movies in Theater</h1>
            <hr className="bline" size="1" width="100%" color="#171717"></hr> 
            <div className="movies-container">
                { 
                /* Mapping the fields from the API to the props that we are passing to the MovieItem component*/
                    movies.map((movie) => (
                        <MovieItem key={movie.id.stringValue} id={movie.id.stringValue} genre={movie.Genre.stringValue} image={movie.Poster.stringValue} name={movie.Title.stringValue} actor={movie.Actor.stringValue} rating={movie.Rating.integerValue} mpaa={movie.MPAA.stringValue}></MovieItem>
                    ))
                }
                {
                    
                }

                {
                    loading && <div className="loadOverlay" style={{display: show ? "block" : "none" }}><img className="loadingGIF" src={spinner} alt="loading..." /></div>
                }
            </div>
        </div>
        </>
    )
}
import { useEffect, useState, useContext} from 'react';
import { MovieItem } from '../../MovieItem';
import { Header } from '../../Header';
import MoviesOrderContext from '../../../context/moviesOrderContext';
import spinner from '../../../../src/spinner.gif'


import "./styles.css"

export const MoviesHomePage = () => {

    const [movies, setMovies] = useState([]);

    const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(true);

    const globalState = useContext(MoviesOrderContext);
    

    useEffect (
        () => {
            getMovies();
        }, []
    );

    const getMovies = async() => {
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
            setShow(false);
            

        }catch(err) {
            console.log (err)
        }
    }

    return (
        <>
        <Header></Header>
        <div className="movies-page">
            <h1 className="movies-title">Movies in Theater</h1>
            <hr className="bline" size="1" width="100%" color="#171717"></hr> 
            <div className="movies-container">
                { 
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
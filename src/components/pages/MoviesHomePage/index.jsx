import { useEffect, useState } from 'react';
import { MovieItem } from '../../MovieItem';
import { Header } from '../../Header';

import "./styles.css"

export const MoviesHomePage = () => {

    const [movies, setMovies] = useState([]);

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

        }catch(err) {
            console.log (err)
        }
    }

    return (
        <>
        <Header></Header>
        <div className="movies-page">
            <h1 className="movies-title">Movies in Theater</h1>
            <div className="movies-container">
                { 
                    movies.map((movie) => (
                        <MovieItem key={movie.id.stringValue} image={movie.Poster.stringValue} name={movie.Title.stringValue} actor={movie.Actor.stringValue} rating={movie.Rating.integerValue}></MovieItem>
                    ))
                }
            </div>
        </div>
        </>
    )
}
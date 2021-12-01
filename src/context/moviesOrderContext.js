import React, {useState} from 'react';

const MoviesOrderContext = React.createContext({
    movies: [],
    order: [],
    initializeMovies: () => {},    

});

export const MoviesOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);

    const [movies, setMovies] = useState([]);

    const initializeMovies = (moviesFromApi) => {
        setMovies(moviesFromApi);
        
    }


    
    return (<MoviesOrderContext.Provider
     value={{movies: movies, initializeMovies: initializeMovies}}
    >
        {props.children}
    </MoviesOrderContext.Provider>)

} 

export default MoviesOrderContext;
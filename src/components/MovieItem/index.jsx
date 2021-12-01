import './styles.css';

import {Button} from '../Button'; /* Importing the Button component to be displayed within the MovieItem component */

import {Link} from 'react-router-dom'; /* Importing Link to route to the MovieDetailsPage from the homepage*/
import { useContext } from 'react';
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating' /* Importing Rating hook to display a star rating for the movie on the homepage*/

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */


export const MovieItem = (props) => {
    const {image, id, name, rating, genre, actor, mpaa} = props; /* Declaring props */
  
    /* Making the product card component from text, the Button component, and the Rating hook*/

    return (
        <div className="movie">
            <Link to={`/movie/${id}`}>
                <img className="movie-poster" src={image} alt={name + "photo"}/>
            </Link>
            <p className="movie-name">{name}</p>
            <p className="movie-actor">{actor}</p>
            <hr className="line" size="1" width="100%" color="#171717"></hr> 
            <p className="movie-MPAA">{mpaa}</p>
            <button className="movie-genre" type="button">{genre}</button>
            <div className='App'>
                <Rating 
                    size={15}
                    label
                    transition
                    fillColor='#FF700D'
                    emptyColor='gray'
                    ratingValue={rating}/>
            </div>
            <Button text="Get Tickets" type="primary" isDisabled={false} action={() => alert("Requested Tickets")}/>
        </div>
    )
}
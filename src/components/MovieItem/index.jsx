import './styles.css';
import {Button} from '../Button';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> /* Used to add breakpoints to website for responsive design */


export const MovieItem = (props) => {
    const {image, id, name, rating, genre, actor, showtimes, mpaa} = props;
  
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
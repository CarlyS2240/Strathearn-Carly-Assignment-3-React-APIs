import './styles.css';
import {Button} from '../Button';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export const MovieItem = (props) => {
    const {image, id, name, rating, genre, actor, showtimes} = props;
  
    return (
        <div className="movie">
            <img className="movie-poster" src={image} alt={name + "photo"}/>
            <p className="movie-name">{name}</p>
            <p className="movie-actor">{actor}</p>
            <div className='App'>
                <Rating 
                    size={15}
                    label
                    transition
                    fillColor='#FF700D'
                    emptyColor='gray'
                    ratingValue={rating} /* Rating Props */ />
            </div>

            

            <Button text="Buy Tickets" type="primary" isDisabled={false} action={() => alert("Requested Movie")}/>

            

            

        </div>
        
    )
}
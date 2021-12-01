import PropTypes from 'prop-types';  
import { Rating } from 'react-simple-star-rating'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export const StarRating = (props) => {

    const{rating} = props; 
  
    return (
            <div className='App'>
                <Rating 
                    size={15}
                    label
                    transition
                    fillColor='#FF700D'
                    emptyColor='gray'
                    ratingValue={rating}/>
            </div>
    )
}

StarRating.propTypes = {
    rating: PropTypes.number,
}
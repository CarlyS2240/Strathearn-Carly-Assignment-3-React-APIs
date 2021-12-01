import PropTypes from 'prop-types';  /* Using props to be able to reuse the ShowtimeButtons component in the MovieDetailsPage */
import './styles.css';

export const ShowtimeButtons = (props) => {

    const{time1, time2, time3, time4} = props; /* Declaring props */

     /* Making the ShowtimeButtons component from buttons*/

    return (
        <div className="buttonContainer">
            <button className="button1" type="button">{time1}</button>
            <button className="button2" type="button">{time2}</button>
            <button className="button3" type="button">{time3}</button>
            <button className="button4" type="button">{time4}</button>
        </div>
    )
}

/* ShowtimeButtons component takes a parameter for the following: the first time the movie is playing, the second time the movie is playing
the third time the movie is playing, and the fourth time the movie is playing. We use props so that we can change these times easily
if the cinema wants to change the show times*/

ShowtimeButtons.propTypes = {
    time1: PropTypes.string,
    time2: PropTypes.string,
    time3: PropTypes.string,
    time4: PropTypes.string,
    time5: PropTypes.string,
}
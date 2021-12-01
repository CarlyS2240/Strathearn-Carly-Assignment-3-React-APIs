import './styles.css';

export const Button = (props) => {
    const {isDisabled, action, type, text} = props; /* Using props to be able to reuse this Button in other components of the website (i.e this Button component is used in the MovieDetailsPage component)*/

    return (
        <button onClick={action} disabled={isDisabled} className={type}>{text}</button> /* Making a button with props*/
    )
}
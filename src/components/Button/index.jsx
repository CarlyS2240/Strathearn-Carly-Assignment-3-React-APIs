import './styles.css';

export const Button = (props) => {
    const {isDisabled, action, type, text} = props;
    const style = { color: "black", fontSize: "1.5em" }


    return (
       
            <button onClick={action} disabled={isDisabled} className={type}>{text}</button>
    )
}
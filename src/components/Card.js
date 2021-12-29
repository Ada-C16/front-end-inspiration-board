import PropTypes from "prop-types";

// card and likes are the props we are recieving
const Card =({card,onIncreaseLikes}) => {

    return (
        // div might be a good choice for this container
        // which would include button, span, button
        <div> 
            <p>{card.message}</p>
        {/* +1 button is listening for the user to click, onIncreaseLikes has to be wrapped in () and
        anonymous function or it will get called every time the page renders*/}
            <button onClick = {()=>onIncreaseLikes(card)}> + 1</button>
            <span> {card.likes}</span>
            <button>Delete</button>
        </div>
    )
};
export default Card;

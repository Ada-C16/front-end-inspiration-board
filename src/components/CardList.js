import PropTypes from "prop-types";
import Card from "./Card"
// "card" and {card} generally refer to the data being passed through props
// while Card is the component and component file
const CardList = ({cards,onIncreaseLikes})=>{
    return (
        <div> 
            {/* using map function to iterate through list of cards and create a new
             html Card element for each card  */}
            {cards.map((card)=> {
                return <Card key={card.id} card={card}
                onIncreaseLikes={onIncreaseLikes}/>
            })}
        </div>
    )
}

export default CardList;
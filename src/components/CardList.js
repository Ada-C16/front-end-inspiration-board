import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';



const CardList = (props) => {
       // This will call the API to get all of the cards for this board_id
        console.log('in CardList');
        let renderedOutput = [];        
        if (props !== []){

            //create a loop through response.data and push to an renderedOutput array the Card elements
            console.log('CardList props: ' + JSON.stringify(props.Cards));
            let myObj = props.Cards;
            for (let i=0; i<myObj.length; i++){
                console.log('creating card with message:' + myObj[i].message);
                renderedOutput.push(
                                        <Card 
                                            card_id={myObj[i].card_id} 
                                            likes_count={myObj[i].likes_count} 
                                            message={myObj[i].message} 
                                            onClickCallbackLikes={props.onClickCallbackLikes}
                                            onClickCallbackDeleteCard={props.onClickCallbackDeleteCard}
                                        />
                                    )
            }


        }

        return(renderedOutput)
}

CardList.propTypes = {    
    board_id:PropTypes.number.isRequired,
    onClickCallbackDeleteCard: PropTypes.func.isRequired,
    onClickCallbackLikes: PropTypes.func.isRequired,
    Cards:PropTypes.arrayOf(
        PropTypes.shape({
            card_id: PropTypes.number.isRequired,
            likes_count: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired
        })
)

}

export default CardList;

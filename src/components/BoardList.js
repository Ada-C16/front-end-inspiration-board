import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

const BoardList = (props) => {




    const clickBoard = (obj) =>{
        console.log('in clickBoard, obj is:' + JSON.stringify(obj));
        // props.onClickCallback(props.board_id, props.title);
        props.onClickCallback(obj);
    };

    let returnArray = [];
    let boards = props.boards;

    for (let i=0; i<(props.boards).length; i++){
        returnArray.push(
            <li className='boardlink' id='{boards[i].board_id}'><span className="navsublink" onClick={()=>clickBoard(boards[i])}>{boards[i].title}</span></li>
        )
    }


    return (        
        returnArray
    );

}

BoardList.propTypes = {
    onClickCallback: PropTypes.func.isRequired,
    showCardListFunction: PropTypes.func.isRequired,
    boards:PropTypes.arrayOf(
            PropTypes.shape({
                board_id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                owner: PropTypes.string.isRequired
            })
    )

}

export default BoardList;

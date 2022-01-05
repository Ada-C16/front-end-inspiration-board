import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

const BoardList = (props) => {


    const clickBoard = () =>{
        props.onClickCallback(props.board_id);
    };

    let returnArray = [];
    let boards = props.boards;

    for (let i=0; i<(props.boards).length; i++){
        console.log(boards[i].title);
        returnArray.push(
            <li className='boardlink' id='{boards[i].board_id}'><a className="navsublink" href="#">{boards[i].title}</a></li>
        )
    }


    return (        
        returnArray
    );

}

BoardList.propTypes = {
    onClickCallback: PropTypes.func.isRequired,
    boards:
        PropTypes.objectOf(
            PropTypes.shape({
                board_id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                owner: PropTypes.string.isRequired
            })
        )


}

export default BoardList;

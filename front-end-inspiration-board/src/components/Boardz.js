import React from "react";
import Board from './Board';
import './Boardz.css';

const Boardz = (props) => {

    return(
        <section className='boardz-block grid-block'>
            <h1> Boardz List </h1>
                <ul>
                    <li>
                        <Board selectNewBoard={props.updateCurrentBoardCallback}/>
                    </li>
                    <li>
                        <Board />
                    </li>
                    <li>
                        <Board />
                    </li>
                    <li>
                        <Board />
                    </li>
                    <li>
                        <Board />
                    </li>
                    <li>
                        <Board />
                    </li>
                </ul>
        </section>
    )
}

export default Boardz;
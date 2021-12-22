import React from "react";
import Board from './Board';
import './Boardz.css';

const Boardz = () => {

    return(
        <section className='boardz-block grid-block'>
            <h1> Boardz List </h1>
            This is the boardz container component.
            <Board />
            <Board />
        </section>
    )
}

export default Boardz;
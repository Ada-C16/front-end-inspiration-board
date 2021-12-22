import React from "react";
import Board from './Board';

const Boardz = () => {

    return(
        <section className='boardz-block'>
            This is the boardz container component.
            <Board />
            <Board />
        </section>
    )
}

export default Boardz;
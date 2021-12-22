import React from "react";
import Card from './Card';

const CardDisplay = () => {

    return(
        <section className='card-display-block grid-block'>
            <h1>Card Displayy</h1>
            This is a container component
            <Card />
            <Card />
            <Card />
        </section>
    )
}

export default CardDisplay;
import React from "react";
import Card from './Card';

const CardDisplay = () => {

    return(
        <section className='card-display-block'>
            Card Displayy
            This is a container component
            <Card />
            <Card />
            <Card />
        </section>
    )
}

export default CardDisplay;
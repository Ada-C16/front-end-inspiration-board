import React, {useState, useEffect} from 'react';
import Board from "./Board";
import Card from "./Card";

const CardsList=(props)=>{
    return <div className="container">
        {props.cards.map((c)=>{
            <Card card={c}/>;
        })}
        <Card />
    </div>;
};

export default CardsList; 